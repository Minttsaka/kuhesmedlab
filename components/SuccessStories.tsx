import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SuccessStories() {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto space-y-5 py-20'>
        <h5 className='text-center text-sm font-bold'>Resources</h5>
        <h2 className='text-center text-4xl font-bold'>Take a deeper dive int dctfusion</h2>
        <div className='grid grid-cols-2 gap-10 items-center'>
        <img
            src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
            alt=""
            className="w-full h-full object-cover"
          />
          <div className='space-y-6'>
            <h5 className='text-xs font-bold'>Featured</h5>
            <h2 className='text-4xl font-bold'>Take a deeper dive int dctfusion</h2>
            <p  className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.  blanditiis consequuntur 
            </p>
            <Link href={'#'} className='flex items-center space-x-3'>
              Watch now <ArrowRight className='h-4 w-4 text-[green]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
