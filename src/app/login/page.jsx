"use client"

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const headers = {
            'Content-Type': "application/json"
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/pinjam-buku/api/login.php`, data)
        .then(function (response) {
            console.log(response);
            // Cookies.set('token', response.json.token);
            // router.push("/dashboard");
        }).catch(function (error) {
            console.log(error);
        });



    };


    return (
        <main>

            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </main>
    );
}