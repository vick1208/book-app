"use client"
// impor library axios
import axios from "axios";
// impor library Cookies
import Cookies from "js-cookie";
// impor library navigation
import { useRouter } from "next/navigation";
// impor fungsi useState
import { useEffect, useState } from "react";


export default function LoginPage() {

    const router = useRouter();

    // define state untuk email dan password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // define state untuk email dan password
    const [validation, setValidation] = useState([]);

    // fungsi handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //    inisialisasi formData
        const fData = new FormData();

        fData.append('email', email);
        fData.append('password', password);

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`, fData)
            .then(function (response) {
                console.log(response);
                Cookies.set('token', response.json.token);
                router.push("/dashboard");
            }).catch(function (error) {
                setValidation(error.response.data);
            });
    };

    useEffect(function () {
        if (Cookies.get('token')) {
            router.push('/dashboard');
        }
    }, []);

    return (
        <main>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email}
                    placeholder="Masukkan Alamat Email"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password}
                    placeholder="Masukkan Password"
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </main>
    );
}