"use client"

import { useRouter } from 'next/router';
import {useState} from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {

    }




    return (
        <main>

        </main>
    );
}