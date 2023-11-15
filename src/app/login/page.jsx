"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/pinjam-buku/api/login.php`, formData).then(function (response) {
            console.log(response);
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