"use client"
import React from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { BarChartIcon, ClipboardCopyIcon, ClipboardIcon, PlusIcon } from '@radix-ui/react-icons'
import { CircleHelpIcon, Clipboard, LayoutTemplateIcon, SettingsIcon, Upload } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarImage } from './ui/avatar'
import Notifications from './Notifications'

export default function ResearchNavBar() {
  return (
    <div className='sticky top-0 z-50 bg-white md:rounded-t-3xl py-2  md:hidden'>
        <aside className="flex">
        <nav className="flex items-center gap-1 px-2 sm:py-5">
        <TooltipProvider>
            <Link
              href="/mw/dashboard"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <Avatar>
                    <AvatarImage src='/img/official-logo.png' className="object-cover" />
                </Avatar>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#overview"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <LayoutTemplateIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
 
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#analytics"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <BarChartIcon className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#related"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <ClipboardCopyIcon className="h-5 w-5" />
                  <span className="sr-only">Related</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Related</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#files"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <Upload className="h-5 w-5" />
                  <span className="sr-only">Upload</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Upload</TooltipContent>
            </Tooltip>
            
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex  items-center gap-1 px-2 sm:py-5">
          <TooltipProvider>
         
          <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <Notifications />
                  <span className="sr-only">Notifications</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Notifications</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/support"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <CircleHelpIcon className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Help</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
        
    </div>
  )
}
