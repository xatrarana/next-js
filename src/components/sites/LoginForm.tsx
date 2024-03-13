'use client'
import React from 'react'
import Button from '../common/Button'
import { useForm, SubmitHandler, set } from "react-hook-form";
import { LoginInput, loginSchema } from '@/schemas/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const LoginForm = () => {
    const {register,handleSubmit,formState: { errors }} = useForm<LoginInput>({
        resolver: zodResolver(loginSchema)
    })
    const [isloading, setIsLoading] = React.useState(false)
    const router = useRouter()
    const onSubmit = async(data: LoginInput) => {
        setIsLoading(true)
       try {
        const signInData = await signIn('credentials',{
            email: data.email,
            password: data.password,
            redirect: false
        })
        if(signInData?.error) {
            throw new Error(signInData.error)
        }
        
        if(signInData?.ok){
            setIsLoading(false)
            router.push('/admin/dashboard')
        }
       } catch (error) {
              setIsLoading(false)
              toast.error('इमेल वा पासवर्ड गलत छ')
       }finally{
        setIsLoading(false)
       }
        
    };
  return (
    <div className="">
        <form onSubmit={handleSubmit(onSubmit)}  className="max-w-sm md:mx-auto bg-gray-100 px-4 py-5 rounded-md">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              इमेल
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:outline-green-500 block w-full p-2.5 "
              placeholder="name@wolfie.com"
            />
            <p className='text-sm text-red-600'>{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              पासवर्ड
            </label>
            <input
              type="password"
              {...register('password')}
              id="password"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:outline-green-500 block w-full p-2.5 "
            />
             <p className='text-sm text-red-600'>{errors.password?.message}</p>
          </div>

          <Button  className="py-2 self-end" type="submit">
            {
                isloading ? <span className="loading loading-dots loading-md"></span> : 'लग इन'
            }
          </Button>
        </form>
      </div>
  )
}

export default LoginForm