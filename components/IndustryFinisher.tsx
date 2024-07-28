import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function IndustryFinisher() {
  return (
    <div className='bg-gray-100 py-20'>
      <div className='container mx-auto space-y-10'>
        <h4 className='text-center font-bold'>Get started</h4>
        <h2 className='text-4xl font-bold text-center'>
            Lorem ipsum dolor sit amet.
        </h2>
        <div className='grid grid-cols-2'>
            <div className='space-y-5'>
                <h2>
                Sign up for the Latest AECO News from NVIDIA.
                </h2>
                <Button className='rounded-none bg-[green]'>
                    subscribe
                </Button>
            </div>

            <div className='space-y-5'>
                <h2>
                Sign up for the Latest AECO News from NVIDIA.
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi.</p>
                <Link href={'#'} className='flex items-center gap-5 text-[green]'>
                    Lets talk <ArrowRight className='h-4 w-4' />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
