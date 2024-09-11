"use client"
import React, { KeyboardEvent, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, Cloud, CreditCard, Search, Settings, UserIcon, UserPlus, Users, VolumeIcon } from "lucide-react"
import { BellIcon, Component1Icon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Notifications from "./Notifications"
import { Research, User } from '@prisma/client'
import Logout from './Logout'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardSearchBar({user , firstResearch}:{user:User, firstResearch:Research}) {

    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()
  
    const handleSearch = () => {
      if (searchQuery.trim()) {
        router.push(`/publications/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    }
  
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch()
      }
    }
  

  return (
    <div className="flex justify-between gap-2 items-center bg-blue-100 p-2">
    <Link href={'/mw/dashboard'}>
      <Avatar>
        <AvatarImage src='/img/official-logo.png' className="object-cover" />
    </Avatar>
    </Link>
    <div className="w-full flex items-center bg-white shadow-xl gap-3 px-5 rounded-xl">
      <Input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
       className="w-full bg-transparent border-none" />
      <Search onClick={handleSearch}  className="text-gray-500 cursor-pointer"/>
    </div>
   
    <div className="flex gap-2 items-center">
    <div className="w-fit p-1 rounded-full hover:bg-gray-100 bg-white">
    <Popover>
    <PopoverTrigger asChild>
      <Component1Icon className="h-6 w-6 text-gray-500"  />
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-3 font-bold">
        <div className="grid grid-cols-2 gap-2">
          <Link className="flex items-center justify-center p-5 bg-blue-100 text-blue-500 rounded-md" href={firstResearch ? `/mw/publication/${firstResearch.id}`:"/mw/research"}>
            Research
          </Link>

          <Link className=" flex items-center justify-center p-5 bg-purple-100 text-purple-500 rounded-md" href={'/mw/survey'} >
            Surveys
          </Link>

          <Link className="flex items-center justify-center p-5 bg-yellow-100 text-yellow-500 rounded-md" href={'/publications'} target="__blank">
            Library
          </Link>

          <Link className="flex items-center justify-center p-5 bg-green-100 text-green-500 rounded-md" href={'/community'}>
            Community
          </Link>
        </div>
        <h2>Other Services</h2>
        <div className="grid gap-2 bg-gray-100 p-2 rounded-lg">
              <Link href={'/support'}  className="space-y-2 w-full flex items-center gap-1">
              <div className="bg-purple-100 w-fit rounded p-2 ">
                <QuestionMarkCircledIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Support</p>
                </div>
              </Link>
        </div>
        
      </div>
    </PopoverContent>
  </Popover>
      </div>
    <Notifications />
          
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
              <Avatar>
                <AvatarImage src={user?.image! ?? "/img/avatar.png"} className="object-cover"/>
                <AvatarFallback>{user?.name}</AvatarFallback>
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
           {user?.role==="ADMIN" && 
           <DropdownMenuItem>
                <Link  className="flex items-center gap-2" target="__blank"  href={'https://adminkuhesmedlab-minttsaka-gmailcoms-projects.vercel.app/a/dashboard'} >
                  <UserIcon className="mr-2 h-4 w-4" />
                <span>Admin panel</span>
                </Link>
              </DropdownMenuItem>}
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href={'/mw/profile'}>
                  <UserIcon className="mr-2 h-4 w-4" />
               
                <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href={'/community/settings'}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>

                </Link>

              </DropdownMenuItem>
             
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              
              <Link className="flex items-center gap-2" href={'/404'}>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
          
    </div>

  )
}
