import React from 'react'
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


export default function PublicationNav() {
  return (
    <div>
         <header className='bg-blue-900'>

            <div className="flex justify-between gap-2 items-center p-2">

            <div className="w-full flex items-center border shadow-xl gap-3 px-5 ">
            <Input className="w-full bg-transparent text-white border-none" />
            <Search  className="text-gray-500 "/>
            </div>

            <div className="flex gap-2 items-center">
            <div className="w-fit p-1 rounded-full ">
            <DropdownMenu>
                <DropdownMenuTrigger className="px-5 py-2 border text-white bg-transparent" asChild>    
                <div className="flex items-center gap-2">
                <p className="text-nowrap">Miracle Tsaka</p><ArrowBigDown />
                </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <Link href={'/mw/profile'}>
                        <User className="mr-2 h-4 w-4" />
                    </Link>
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                        <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                        </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            </div>
            
            </div>
                
            </div>

            </header>
      
    </div>
  )
}
