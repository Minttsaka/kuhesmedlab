"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, User, Sparkles } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation'
import { KeyboardEvent, useState } from "react"


export default function PublicationNav() {

  const {data:session} = useSession()

  const user = session?.user

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
    <nav className="bg-blue-900 text-white p-1 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Decorative Logo */}
        <div className="flex items-center space-x-2">
          <Avatar>
              <AvatarImage src='/img/official-logo.png' className="object-cover" />
          </Avatar>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 bg-blue-800 border-blue-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          {user ? 
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.image! ?? "/img/avatar.png"} alt="User" className="object-cover" />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
            <Link href={'/mw/profile'}>
              My Account
            </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={'/mw/dashboard'}>
              Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/publications'}>
              All Publications
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button className="w-full bg-[red]" onClick={()=>signOut()}>Signout</Button>
          </DropdownMenuContent>
        </DropdownMenu>
        : <Button onClick={()=>signIn()}>Signin</Button>}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-full right-0 w-32 h-32 bg-blue-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-blue-300 rounded-full"></div>
      </div>
    </nav>
  )
}