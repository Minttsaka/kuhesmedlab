import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { NewspaperIcon, Users } from 'lucide-react';

export default function AboutUs() {

    const people = [
        {
          id: 1,
          name: "Dctfusion",
          designation: "Malawian leading tech and ai company",
          image:
            "/img/fusion.png",
        },

      ];

  return (
    <div className='py-20'>
        <div className='container mx-auto grid md:grid-cols-2  md:items-center gap-20'>
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold'>Shaping Digital Solutions That Transform ai in Research</h2>
                <div className='bg-green-400 p-5 rounded grid md:grid-cols-2'>
                    <div className='flex flex-row items-center '>
                    <AnimatedTooltip items={people} />
                    </div>
                    <div>
                        <h2 className='md:text-4xl font-bold'>1</h2>
                        <p>partner</p>
                    </div>
                </div>
                <p>We work hand in hand with our partner to make sure we provide quality operations</p>
                <div className='grid grid-cols-2 text-white gap-3'>
                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <Users className='h-6 w-6' />
                        <div>
                            <h2 className='md:text-4xl font-bold'>5+</h2>
                            <p>Users</p>
                        </div> 
                    </div>

                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <NewspaperIcon className='h-6 w-6' />
                        <div>
                            <h2 className='md:text-4xl font-bold'>10+</h2>
                            <p>Award winner</p>
                        </div> 
                    </div>

                </div>
            </div>
            <img alt='kuh' src='/kuh.png' />
        </div>
      
    </div>
  )
}
