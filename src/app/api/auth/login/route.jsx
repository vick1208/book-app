import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { email, password } = await request.json();

    // masih belum terhubung dengan source code backend dan mysql

    if (email === "admin@mail.com" && password === "qwertyui") {
        const token = sign({
            email,
            username: "admin",
        }, 'my_strong_token_key',
            { expiresIn: '1h' }
        );
        const response = NextResponse.json({
            token,
        });

        response.cookies.set({
            name: "myTokenName",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "development",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60,
            path: "/",
        });
        return response;
    } else {

        return NextResponse.json({ status: 401 },
            { message: "Credentials Invalid" },
            );
    }

}