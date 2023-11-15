
import { NextResponse } from "next/server";


export async function POST(request) {
    const req = await request.json();

    // masih belum terhubung dengan source code backend dan mysql

    return NextResponse.json({
        status: 200,
        message: "Success",
        data: req,
    });
}