import { getJwtSecretKey } from "@/libs/auth";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { email, password } = await request.json();

    if (email === "admin@mail.com" && password === "qwertyui") {
        const token = await new SignJWT({
            email: email,
        }).setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt('http://localhost/pinjam-buku/')
            .setExpirationTime("3600s")
            .sign(getJwtSecretKey());

        const response = NextResponse.json(
            { success: true },
            {
                status: 200,
                headers: { "content-type": "application/json" }
            }
        );

        response.cookies.set({
            name: "token",
            value: token,
            path: "/"
        });
        return response
    }
    return NextResponse.json({ success: false });

}