import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { NewspaperIcon } from 'lucide-react';

export default function AboutUs() {

    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Tyler Durden",
          designation: "Soap Developer",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
          id: 6,
          name: "Dora",
          designation: "The Explorer",
          image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
      ];

  return (
    <div className='py-20'>
        <div className='container mx-auto grid grid-cols-2 gap-20'>
            <div className='space-y-5'>
                <h2 className='text-green-400'>- About us</h2>
                <h2 className='text-3xl font-bold'>Shaping Digital Solutions That Transform Businesses</h2>
                <div className='bg-green-400 p-5 rounded grid grid-cols-2'>
                    <div className='flex flex-row items-center '>
                    <AnimatedTooltip items={people} />
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold'>100+</h2>
                        <p>Tech partners</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur tenetur atque odit.</p>
                <div className='grid grid-cols-2 text-white gap-3'>
                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <NewspaperIcon className='h-6 w-6' />
                        <div>
                            <h2 className='text-4xl font-bold'>100+</h2>
                            <p>Award winner</p>
                        </div> 
                    </div>

                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <NewspaperIcon className='h-6 w-6' />
                        <div>
                            <h2 className='text-4xl font-bold'>100+</h2>
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
