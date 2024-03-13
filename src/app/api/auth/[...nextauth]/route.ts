import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/lib/prisma'
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Adapter } from "next-auth/adapters";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";

const ADAPTER = PrismaAdapter(prisma);

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    adapter: ADAPTER as Adapter,
   pages:{
    error: '/auth/login',
    signIn: '/auth/login',
   },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            type: 'credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials,_) {
                console.log(credentials)
                if(!credentials?.email || !credentials?.password){
                    return null
                }
                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                })

                if(!user){
                    return null
                }

                const isPasswordValid = await compare(credentials?.password, user?.password as string)

                if(!isPasswordValid){
                    return null
                }

                return {
                    id: String(user.id),
                    email: user.email,
                    name: user.name, 
                    role: user.role,
                }

            }
        })
    ],
    callbacks:{
        session: ({session,token}:{session: Session, token: JWT}) => {
            session.user.role = token.role
            return {
                ...session,
                id: token.id,
            }
        },
        jwt:({token, user}) => {
            const u = user as unknown as any
            if(user){
                return {
                    ...token,
                    id: u.id,
                }
            }
            return token
        },
        
        
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}