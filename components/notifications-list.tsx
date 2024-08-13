"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeftRightIcon, BotMessageSquare, XCircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { BellIcon } from '@radix-ui/react-icons'

export default function NotificationsList() {

    const [isOpen,setIsOpen] = useState(false)

  return (
    <div>
        <div className="fixed bottom-20 right-5 h-12 w-12 rounded-full bg-white shadow  flex items-center justify-center">
            <span  onClick={()=>{
                setIsOpen((prev)=>!prev)
                }} className="text-gray-700">
            <BellIcon />
            </span>
        </div>
       <aside className={cn("fixed w-[70%] md:w-[40%] inset-y-0 left-0 z-20 flex flex-col overflow-hidden rounded-r-2xl bg-white shadow p-6 ",
       {
        'hidden':!isOpen
    })}>
    <h3 className="text-lg font-semibold">Notifications</h3>
    <div className='mt-10'>
      <p>You dont have notifications</p>
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
