"use client"

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {

    const token = Cookies.get('token');

    const [user, setUser] = useState({});

    const router = useRouter();



    const fetchData = async function () {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`).then(function (response) {
            setUser(response.data);
        });
    }

    const logoutHandler = async function () {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`)
            .then(() => {
                Cookies.remove("token");
                router.push('/login');
            });
    };

    return (

        <div>


            SELAMAT DATANG {user.name}
            <hr />
            <button onClick={logoutHandler}></button>
        </div>



    );
}