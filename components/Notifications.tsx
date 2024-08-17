"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from '@/lib/utils'
import axios from 'axios'
import { BellIcon, Cross1Icon } from '@radix-ui/react-icons'
import 'animate.css';
import { Avatar, AvatarImage } from './ui/avatar'

export default function Notifications() {

    const [isOpen,setIsOpen] = useState(false)

  return (
    <div>
        <div onClick={()=>{
            setIsOpen((prev)=>!prev)
            }}  className="w-fit p-1 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
              <BellIcon className="h-6 w-6 text-gray-500" />
            </div>

       <aside className={cn("fixed animate__animated animate__slideInLeft  w-[70%] md:w-[20%] inset-y-0 left-0 z-20 flex flex-col overflow-hidden rounded-r-2xl bg-white shadow  ",
       {
        'hidden':!isOpen
    })}>
      <div className='flex  justify-between items-center p-6'>
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Cross1Icon onClick={()=>{setIsOpen((prev)=>!prev)}} className='cursor-pointer' />
      </div>
    
    <div className='mt-10'>
    <Tabs defaultValue="inbox" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="inbox">Inbox</TabsTrigger>
        <TabsTrigger value="password">General</TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className='space-y-1'>
        <div className='flex justify-between items-center bg-purple-50 p-2'>
          <div className='flex gap-2'>
            <Avatar>
              <AvatarImage alt='' src='https://media.istockphoto.com/id/135018895/photo/laboratory.webp?b=1&s=170667a&w=0&k=20&c=sQlDQIqCA4Bgam8XXbjtMnXyTRZ4JJe8zGz-M_4IytY=' />
            </Avatar>
            <div>
              <p><span className='font-bold'>mint</span> posted a research</p>
              <p className='text-xs text-gray-500'>30 min ago</p>
            </div>
          </div>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-500' />
        </div>

        <div className='flex justify-between items-center bg-purple-50 p-2'>
          <div className='flex gap-2'>
            <Avatar>
              <AvatarImage alt='' src='https://media.istockphoto.com/id/135018895/photo/laboratory.webp?b=1&s=170667a&w=0&k=20&c=sQlDQIqCA4Bgam8XXbjtMnXyTRZ4JJe8zGz-M_4IytY=' />
            </Avatar>
            <div>
              <p><span className='font-bold'>mint</span> posted a research</p>
              <p className='text-xs text-gray-500'>30 min ago</p>
            </div>
          </div>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-500' />
        </div>

        <div className='flex justify-between items-center bg-purple-50 p-2'>
          <div className='flex gap-2'>
            <Avatar>
              <AvatarImage alt='' src='https://media.istockphoto.com/id/135018895/photo/laboratory.webp?b=1&s=170667a&w=0&k=20&c=sQlDQIqCA4Bgam8XXbjtMnXyTRZ4JJe8zGz-M_4IytY=' />
            </Avatar>
            <div>
              <p><span className='font-bold'>mint</span> posted a research</p>
              <p className='text-xs text-gray-500'>30 min ago</p>
            </div>
          </div>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-500' />
        </div>
      </TabsContent>
      <TabsContent value="password">
       
      </TabsContent>
    </Tabs>
    </div>
        
        
        </aside>
      
    </div>
  )
}

function MessageCircleIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }
  

const LoadingSpinner: React.FC = () => {
    return (
      <svg
        className="animate-spin h-6 w-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    );
  };
