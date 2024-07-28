import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function AboutVision() {
  return (
    <div className='bg-[#f5f9ff] py-20'>
        <div className='container mx-auto h-[60vh] flex gap-10'>
            <div className='space-y-2 flex flex-col justify-center'>
                <h2 className='font-bold text-3xl'>
                    Whats suitd your vision
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis!
                </p>
                <Button className='bg-black text-gray-100'>
                    Lets chat <ArrowRight className='h-4 w-4' />
                </Button>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className="relative h-full rounded-2xl">
                    <img
                    src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-blue-500 bg-opacity-50 flex flex-col text-white p-5">
                    <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                    </div>
                </div>
                <div className="relative h-full rounded-2xl">
                    <img
                    src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-blue-500 bg-opacity-50 flex flex-col text-white p-5">
                    <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                    </div>
                </div>

                <div className="relative h-full rounded-2xl">
                    <img
                    src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-blue-500 bg-opacity-50 flex flex-col text-white p-5">
                    <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
