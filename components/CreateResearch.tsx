"use client"
import Link from "next/link"
import { ArrowBigDown, ArrowDown01, HelpCircle,} from "lucide-react"
import { ArrowRightIcon, BellIcon, Component1Icon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MenuSquareIcon, MessageSquare, Plus, PlusCircle, Search, Settings, User, UserPlus, Users } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Notifications from "./Notifications"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import PublicationNav from "./PublicationNav"


export default function CreateResearch() {
  return (
    <div className="min-h-screen bg-[#2a2e7c] text-white relative overflow-hidden">
      <PublicationNav />
    <div className="container h-screen flex items-center justify-center mx-auto">
    <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/paper.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex items-center justify-center h-full'>
                    <div className="space-y-3">
                    <div className="flex items-center  gap-2">
                        <Avatar>
                        <AvatarImage src='/img/official-logo.png' className="object-cover" />
                    </Avatar>
                    <h2 className='text-4xl text-yellow-200 uppercase font-bold'>KUHESMEDLAB</h2>
                    </div>
                        
                        <h2 className='text-2xl text-blue-900 uppercase font-bold'>Set Up Your Research Workspace</h2>
                        <p className="max-w-md pb-5">Get started by creating a new research workspace to organize your research projects, data, and insights.</p>
                        <Link className="mt-5" href={'#create'}>
                            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                        <span>
                                        Create Workspace
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
                            </button>
                        </Link>
                        
                    </div>
                   
                </div>
            </CardContent>
        </Card>
    </div>
    </div>
  
  )
}
