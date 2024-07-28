import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DashboardFirst() {
  return (
    <div className='my-20'>
        <div className='container mx-auto space-y-5'>
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold max-w-xl'>
                    Generative ai on akuhes
                </h2>
                <p className='max-w-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum dicta modi aliquam mollitia
                    corporis sit ipsa harum earum repellendus!
                </p>
            </div>
            <div className='flex gap-1 rounded-full border w-fit'>
                <p className='bg-gray-100 text-gray-500 w-fit py-2 px-5 rounded-full'>
                    Gnerative ai assistant
                </p>

                <p className='bg-gray-100 text-gray-500 w-fit py-2 px-5 rounded-full'>
                    Gnerative ai assistant
                </p>

                <p className='bg-gray-100 text-gray-500 w-fit py-2 px-5 rounded-full'>
                    Generative ai assistant
                </p>
            </div>

            <div className='grid grid-cols-2 items-center'>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-semibold'>
                        Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Commodi.
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae dolores at ratione. 
                        Laudantium minus fugit consequuntur sint esse labore!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae dolores at ratione. 
                        Laudantium minus fugit consequuntur sint esse labore!
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae dolores at ratione. 
                        Laudantium minus fugit consequuntur sint esse labore!
                        </p>

                        <Link href={'#'} className=' text-xs flex gap-3 underline'>
                            Explore AI Infrastructure <ArrowRight className='h-2 w-2' />
                        </Link>

                        
                </div>

            <div>
                <img className='h-[40vh] w-full object-cover rounded-3xl' alt='' src='https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            </div>

            </div>
            

        </div>
      
    </div>
  )
}
