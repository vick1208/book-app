"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {

    const [user, setUser] = useState({
        email: "",
        username: ""
    });
    const router = useRouter();

    const logout = async () => {
        try {
            const res = await axios.get("/api/auth/logout");
            console.log(res);
        } catch (error) {
            console.error(error.message);
        }
        router.push("/login");
    };


    return (

        <div>
            <h1>Halaman Dashboard</h1>
            {JSON.stringify(user)}
            <button onClick={() => logout()}>Logout</button>
        </div>



    );
}