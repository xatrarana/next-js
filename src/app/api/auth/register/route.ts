import { loginSchema } from "@/schemas/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";
import db from '@/lib/prisma'
import { hash } from "bcrypt";
export  async function GET(req:NextRequest,res:NextResponse){
    return NextResponse.redirect("http://localhost:4545/auth/login")
}


export async function POST(req:Request,res:Response){
    try {
    const {fname,lname,email,password} = await req.json()
    const name = fname + lname
    const existingUser = await db.user.findFirst({
        where: {
            email
        }
    })
    if(existingUser){
        throw new Error('User already exists')
    }
    const hashPass = await hash(password,10)
    const newUser = await db.user.create({
        data: {
            name,
            email,
            password: hashPass,
        }
    })
    const {password: newPassword, ...rest} = newUser
        return NextResponse.json({
            success:true,
            message: 'User created successfully',
            ...rest
        })
    } catch (error) {
        if(error instanceof Error){
            return NextResponse.json({
                success:false,
                message: error.message
            },{status: 400})
        }else{
            return NextResponse.json({
                success:false,
                message: 'Something went wrong'
            })
        }
    }
}