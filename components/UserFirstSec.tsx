import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { User } from '@prisma/client'
import { Clock, Locate } from 'lucide-react'
import { Button } from './ui/button'
import { Profilegroups } from './profilegroups'

export default async function UserFirstSec() {

  return (
    <div className="relative grid grid-cols-2 gap-3 text-white mt-5 p-6 rounded-2xl">
      <div className='bg-white shadow p-5 rounded-2xl'>
  
        <div className='flex gap-5 b justify-center'>
        <Avatar className="w-24 h-24 ring-2 ring-purple-300">
          <AvatarImage src={``} className='object-center object-cover'/>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className='space-y-5'>
          <div className='flex gap-2'>
          <h2 className='text-xl text-black'>
            Christiana justin
          </h2>
          <div className='flex gap-2 items-center'>
            <Button className='rounded-full bg-blue-300'>
              Edit profile
            </Button>
            <Button className='rounded-full bg-transparent border text-gray-500'>
              Edit profile
            </Button>
          </div>
          </div>
          
          <p className='flex items-center text-sm text-gray-500'><Locate className='h-4 w-4' />Bt , malawi</p>
          <p className='flex items-center text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nihil
             repellat totam sint fuga soluta a autem non perferendis? Accusamus?</p>

        </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='flex items-center gap-2'>
            <Clock className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>3+ years job</p>
              <p className='text-gray-500 text-xs'>3+ years job</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Clock className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>3+ years job</p>
              <p className='text-gray-500 text-xs'>3+ years job</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Clock className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>3+ years job</p>
              <p className='text-gray-500 text-xs'>3+ years job</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white shadow p-5 rounded-2xl'>
        <Profilegroups />
      </div>
       
</div>


  )
}
