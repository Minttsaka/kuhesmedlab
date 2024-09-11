"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusIcon, UserIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function CommunityNav() {

  const {data:session} = useSession()

  const user = session?.user

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="fixed inset-x-0 z-40 top-0 w-full text-white bg-gray-100 ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter"></div>
          <div className="flex items-center space-x-4">
            {user ? <Link href={'/community/create'}>
                <Button 
                variant="ghost" 
                className="bg-gray-700 hover:bg-gray-600 text-white hover:text-white"
                >
                <PlusIcon className="mr-2 h-4 w-4" />
                Create Post
                </Button>
            </Link> : <Button 
                variant="ghost"
                onClick={()=>signIn()} 
                className="bg-gray-700 hover:bg-gray-600 text-white hover:text-white"
                >
                <PlusIcon className="mr-2 h-4 w-4" />
                Login to create Post
                </Button>}
            {user &&
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-gray-300 transition-all hover:ring-4">
                    <AvatarImage src={user.image! ?? "/img/avatar.png"} alt="@user" className='object-cover' />
                    <AvatarFallback className="bg-gray-600">U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-800 text-white" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="focus:bg-gray-700">
                    <Link className='flex items-center' href={`/mw/profile`}>
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-700">
                  <Link className='flex items-center' href={`/community/settings`}>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="focus:bg-gray-700" onSelect={()=>signOut()}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          }
          </div>
        </div>
      </div>
    </div>
  )
}