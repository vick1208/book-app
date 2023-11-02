"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("/api/auth/login", credentials);
        if (result.status === 200) {
            router.push("/dashboard");
        }
    };

    return (
        <main>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="email" 
                onChange={(e)=>setCredentials({
                    ...credentials, 
                    email: e.target.value,
                })} />
                <input type="password" placeholder="password" onChange={(e)=>setCredentials({
                    ...credentials, 
                    email: e.target.value,
                })} />
                <button>Login</button>
            </form>
        </main>
    );
}