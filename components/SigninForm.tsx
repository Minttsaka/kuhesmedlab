/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/mwt5gUXbL4z
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { z } from "zod"
import { useRouter, useSearchParams } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, useSession } from "next-auth/react"
import { Eye, EyeOff, Loader2, Lock, User } from "lucide-react"
import SignupBg from "./ui/SigninupBg"
import { useEffect, useState } 
from "react"
import { toast } from "./ui/use-toast"
import{ LoadingState } from "./LoadingState"

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof FormSchema>;

export default function SigninForm() {

  const [showPassword, setShowPassword] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: data.email,
        password: data.password,
      });
      if (!result?.ok) {
        toast({
          title: "error",
          description: "Something went wrong",
          variant: "destructive",
        })
        return;
      }

      if(result.ok){
        toast({
          title: "Login",
          description: "Success",
          variant: "default",
        })
        setLoginSuccess(true)
        if(callbackUrl){
          window.location.href = callbackUrl;
        } else{
          window.location.href = callbackUrl;
        }
      }
  
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error",
          description:"error",
          variant: "destructive",
        })
      }
      
    }
   
    
  };

  if (status === 'loading') {
    return <LoadingState />;
  }

  return (
    <SignupBg>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center  bg-clip-text tracking-tight mb-2 text-transparent bg-gradient-to-r from-blue-900 to-secondary ">KUHESMEDLAB</h2>
            <div className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("email")}
                  className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 text-gray-500 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full pl-10 pr-12 py-3 bg-white bg-opacity-20 text-gray-500 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className={`w-full mt-8 py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 ${
                isSubmitting ? 'animate-pulse' : ''
              }`}
              disabled={isSubmitting}>{ isSubmitting ? <Loader2 className="h-3 w-3 animate-spin" /> : "Signin"}
            </Button>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform origin-left scale-x-0 transition-transform duration-500 ease-out login-progress"></div>
        </form>
        <div className="flex justify-between text-xs text-gray-400 items-center">
          <Link href={'/register'}>
                Register
          </Link>
          <Link href={'/auth/forgotPassword'}>
                Forgot password?
          </Link>
        </div>
        {loginSuccess && <LoadingState />}
      </div>
    </SignupBg>
  )
}
