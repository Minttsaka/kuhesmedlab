/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Soc6B8scqDG
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
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react"


export function DashboardNav() {
  return (
    <header className="sticky flex justify-between items-center px-10 top-0 z-50 w-full bg-[#2a2e7c] text-white">
      <div className="flex h-16 items-center gap-10 justify-between ">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">  Kuhesmedlab</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            My Research Projects
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
          My Research Group
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Learn
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Partner Network
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
          kuhes Marketplace
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Customer Enablement
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
            Explore More
          </Link>
        </nav>
        <p className="cursor-pointer text-sm" onClick={()=>signOut()}>
          Logout
        </p>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Acme Inc</span>
              </Link>
              <SheetClose>
                <XIcon className="h-6 w-6" />
              </SheetClose>
            </div>
            <nav className="grid gap-4 px-4 py-6">
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                My Account
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                My research Projects
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
              My research Group
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Events
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Documentation
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Learn
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Partner Network
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                kuhesS Marketplace
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Customer Enablement
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Events
              </Link>
              <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
                Explore More
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
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

    </header>
  )
}

function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
