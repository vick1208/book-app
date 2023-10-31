"use client"

import Buttons from '@/components/Buttons';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Router } from 'next/router';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [valid, setValid] = useState([]);

    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        let object = {};
        formData.forEach((value,key) => object[key]=value);
        let json = JSON.stringify(object);
        // console.log(json);
        // const customConfig = {
        //     headers: {
        //     'Content-Type': 'application/json'
        //     }
        // };

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login.php`, json)
            .then((response) => {
                Cookies.set('token', response.data.token);
                // redirect to dashboard
                Router.push('/dashboard');
            }).catch((error) => {
                setValid(error.response.data);
            })

        // axios({
        //     method: 'post',
        //     url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/login.php`,
        //     data:{
        //     }
        // });



    };

    useEffect(() => {

        // if (Cookies.get('token')) {
        //     Router.push('/dashboard');
        // }

    }, []);
    return (


        <div>
            <h1>Log-in</h1>
            <Buttons onClick={()=>alert("Tidak dapat melakukan login untuk sementara. HTTP 422")} 
            text = "Info error"/>
            <form onSubmit={loginHandler}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />

                {/* <button type="submit">LOGIN</button> */}
                <input type="submit" value="login" />

            </form>
            
        </div>
    );
}