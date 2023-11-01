"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

    const [cred, setCred] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await axios.post("/api/auth/login", cred);
        if (result.status === 200) {
            router.push("/dashboard");
        }
    };

    return (
        <main>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" onChange={(e)=>setCred({
                    ...cred, 
                    email: e.target.value,
                })} />
                <input type="password" placeholder="password" onChange={(e)=>setCred({
                    ...cred, 
                    email: e.target.value,
                })} />
                <button type="submit">Login</button>
            </form>
        </main>
    );
}