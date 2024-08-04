import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Book, Hospital, Leaf } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function Finisher() {
  return (
    <div className='bg-white py-40'>
    <div className="container mx-auto flex flex-col gap-5 border-x border-dotted">
      <h2 className="text-[purple] font-bold text-2xl">KUHESMEDLAB</h2>
      <h1 className="text-4xl font-bold max-w-md">Develop innovative solutions to healthcare challenges</h1>
      <p className='max-w-md'>
      Together, we can break free from the constraints of limited
        resources and achieve greatness. Let us embrace our collective
        power and shape the future of Medical Laboratory Science in
        Malawi.
      </p>

        <Link href={'/signin'} className="bg-slate-800 no-underline group w-fit cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                Start now
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </Link>
    </div>
    <div className='container mx-auto grid md:grid-cols-3 gap-5 mt-10 border-x'>
    <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2  mt-5'>
                    <Badge className='flex gap-2 p-2 hover:bg-transparent rounded-xl bg-gray-100 text-gray-500 w-fit'>
                       
                    Halima Kaipirani
                    </Badge>
                    
                    <p className='text-gray-500'>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                     <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                </div>
            </CardContent>
        </Card>
      <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2  mt-5'>
                    <Badge className='flex gap-2 p-2 hover:bg-transparent rounded-xl bg-gray-100 text-gray-500 w-fit'>
                       
                    DL Banda
                    </Badge>
                    
                    <p className='text-gray-500'>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                     <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                </div>
            </CardContent>
        </Card>
      <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2  mt-5'>
                    <Badge className='flex gap-2 p-2 hover:bg-transparent rounded-xl bg-gray-100 text-gray-500 w-fit'>
                       
                    Chikumbutso Mzumara 
                    </Badge>
                    
                    <p className='text-gray-500'>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                     <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                </div>
            </CardContent>
        </Card>
  
    </div>
  </div>
  )
}
