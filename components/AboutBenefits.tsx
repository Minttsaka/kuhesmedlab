import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { RocketIcon } from 'lucide-react'

export default function AboutBenefits() {
  return (
    <div className='bg-[#00c26c] h-[40vh] flex items-center mt-20'>
        <div className='container mx-auto grid grid-cols-2'>
            <div className='space-y-2'>
                <Badge>
                    benefits
                </Badge>
                <h2 className='text-2xl font-bold'>
                    Lorem ipsum dolor sit amet Ad, corrupti.
                </h2>
                <p className='max-w-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    . Expedita, iure provident facilis et optio at excepturi tenetur, similique quis, velit eligendi.
                    </p>
                    <Button>
                        Work with our team member
                    </Button>
            </div>
            <div className='space-y-3'>
                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <RocketIcon className='h-8 w-8 p-2 rounded-full bg-[#00c26c]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of tech talent</p>
                </div>

                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <RocketIcon className='h-8 w-8 p-2 rounded-full bg-[#00c26c]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of tech talent</p>
                </div>

                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <RocketIcon className='h-8 w-8 p-2 rounded-full bg-[#00c26c]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of tech talent</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
