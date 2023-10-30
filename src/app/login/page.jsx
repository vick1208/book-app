"use client"

import Buttons from '@/components/Buttons';
export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            {/* <form action="#" method="post">
                <input type="text" id='label' />
            </form> */}
            <Buttons onClick={() => alert("Sukses")} text={"Tes tombol"} />
        </div>
    );
}