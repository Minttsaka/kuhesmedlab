"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Search, Bell, BookOpen, User, ChevronDown, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Notifications from './Notifications'

export default function PublicationNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full transition-all z-50 py-1 duration-300 ease-in-out ${scrolled ? 'bg-blue-900/80 backdrop-blur-md shadow-lg' : 'bg-blue-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/img/official-logo.png" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {['Dashboard', 'Publication', 'Researchers', 'Topics'].map((item) => (
                  <Link key={item} href={`/mw/${item.toLowerCase()}`} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-200 hover:bg-blue-800/50 transition-all duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-blue-200" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search publications..." 
                  className="w-64 pl-10 pr-4 rounded-full focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-blue-800/50 text-white placeholder-blue-200"
                />
              </div>
              <div className='ml-5'>
                 <Notifications />
              </div>
             
              <DropdownMenu>
                <DropdownMenuTrigger className='bg-transparent' asChild>
                  <Button variant="ghost" className="ml-3 flex items-center text-white hover:text-blue-200 hover:bg-blue-800/50">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 bg-blue-900/80 backdrop-blur-md">
                  {['Profile', 'My Publications', 'Notifications'].map((item) => (
                    <DropdownMenuItem key={item} className="text-white hover:bg-blue-800/50 focus:bg-blue-800/50">
                      {item === 'Profile' && <User className="mr-2 h-4 w-4" />}
                      {item === 'My Publications' && <BookOpen className="mr-2 h-4 w-4" />}
                      {item === 'Notifications' && <Bell className="mr-2 h-4 w-4" />}
                      <span>{item}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-blue-800/50">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">
          {['Home', 'Publications', 'Researchers', 'Topics'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800/50">
              {item}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-blue-800">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">John Doe</div>
              <div className="text-sm font-medium text-blue-300">john@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            {['Profile', 'My Publications', 'Notifications'].map((item) => (
              <Button key={item} variant="ghost" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800/50">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}