import { Settings } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Notifications() {
  return (
    <div className='max-w-[40%] p-5 bg-white shadow fixed inset-y-0 right-0 z-50'>
      <div className='space-y-5 w-full'>
        <div className='flex border-b py-5 justify-between items-center'>
            <ul className='flex gap-5 items-center'>
                <li className="text-sm">Inbox</li>
                <li className="text-sm">General</li>
                <li className="text-sm">Archived</li>
            </ul>
            <Settings className='w-5 h-5' />
        </div>
        <div className='bg-blue-100 p-2 rounded-2xl space-y-1'>
            <div className='flex items-center gap-2 bg-white hover:bg-gray-100 p-3 rounded-2xl'>
                <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className='space-x-1'>
                    <p className='font-bold'>lorem biden</p>
                    <p className='text-sm line-clamp-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, rerum.</p>
                    <p className='text-xs text-gray-500'>35 min ago . central vin</p>
                </div>
            </div>

            <div className='flex items-center gap-2 bg-white hover:bg-gray-100 p-3 rounded-2xl'>
                <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className='space-x-1'>
                    <p className='font-bold'>lorem biden</p>
                    <p className='text-sm line-clamp-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, rerum.</p>
                    <p className='text-xs text-gray-500'>35 min ago . central vin</p>
                </div>
            </div>

            <div className='flex items-center gap-2 bg-white hover:bg-gray-100 p-3 rounded-2xl'>
                <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className='space-x-1'>
                    <p className='font-bold'>lorem biden</p>
                    <p className='text-sm line-clamp-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, rerum.</p>
                    <p className='text-xs text-gray-500'>35 min ago . central vin</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
