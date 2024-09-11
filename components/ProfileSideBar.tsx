"use client"

import Link from 'next/link'
import { LockKeyhole, BookOpen, LayoutDashboard, HelpCircle, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const sidebarLinks = [
  { href: '/mw/profile/credential', label: 'Update Password', icon: LockKeyhole },
  { href: '/mw/research', label: 'Manage Research', icon: BookOpen },
  { href: '/mw/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/support', label: 'Help', icon: HelpCircle },
]

export default function ProfileSideBar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white h-screen">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Kuhesmedlab</h1>
        </div>
        <ScrollArea className="flex-1">
          <nav className="space-y-2 p-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-2 text-gray-600 hover:text-white hover:bg-gray-700 rounded-lg p-2 transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger className='fixed bottom-10 z-50 left-2' asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-white  p-0">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Menu</h2>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <ScrollArea className="flex-1">
            <nav className="space-y-2 p-4">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-white hover:bg-gray-700 rounded-lg p-2 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}