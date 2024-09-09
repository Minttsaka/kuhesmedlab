"use client"


import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart2,
  FileText,
  Folder,
  LinkIcon,
  Menu,
  Microscope,
  AlertTriangle,
  Sparkles,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "./ui/avatar"
import Notifications from "./Notifications"


const navItems = [
  { name: "My Research", icon: Microscope, href: "#list", color: "text-blue-600" },
  { name: "Files", icon: Folder, href: "#files", color: "text-green-600" },
  { name: "Related Research", icon: FileText, href: "#related", color: "text-purple-600" },
  { name: "Analytics", icon: BarChart2, href: "#analytics", color: "text-orange-600" },
  { name: "References", icon: LinkIcon, href: "#reference", color: "text-teal-600" },
  { name: "Danger Zone", icon: AlertTriangle, href: "#danger", color: "text-red-600" },
]

export default function ResearchSideBar() {
  return (

       <header className="hidden md:block sticky top-0 z-50 w-full border-b bg-white rounded-t-xl shadow-sm">
        <div className="container flex justify-between h-16 items-center bg-gray-100 rounded-lg p-1 my-1">
        <Avatar>
          <AvatarImage src='/img/official-logo.png' className="object-cover" />
      </Avatar>
          <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden ">
            {navItems.map((item) => (
                <Link
                key={item.name}
                  href={item.href}
                  className={cn("flex items-center space-x-2", item.color)}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
            ))}
          </nav>
          
          <Notifications />
        </div>
      </header>
  )
}
