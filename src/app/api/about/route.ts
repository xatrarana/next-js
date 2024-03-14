import { NextResponse } from "next/server";

export async function POST(request: Request){
    const {title,description} = await request.json();
    console.log(title,description);
    return NextResponse.json({
        success: true,
        message: true
    })
}