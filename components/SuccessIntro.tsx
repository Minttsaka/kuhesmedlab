import { ArrowRight, DnaIcon, MicroscopeIcon, SyringeIcon } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card'
import Link from 'next/link'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function SuccessIntro() {
  return (
    <div className='bg-gray-100'>
         <div className='container mx-auto grid md:grid-cols-2 gap-8  items-center'>
            <div className="flex max-w-3xl flex-col ">
                <a className="relative md:p-8" href="/blogs/what-is-a-website-template">
                    <div className="relative z-50">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        <h2 className=" font-bold text-lg mt-4">Research</h2>
                        <p className=" font-normal  mt-4 text-gray-500 max-w-4xl">
                        A collaborative research team focused on advancing medical laboratory science through innovative projects and publications.
                        </p>
                    </div>
                </a>

                <a className="relative md:p-8" href="/blogs/what-is-a-website-template">
                    <div className="relative z-50">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        <h2 className=" font-bold text-lg mt-4">Meetup Forum</h2>
                        <p className=" font-normal  mt-4 text-gray-500 max-w-4xl">
                        A virtual platform for discussing current affairs, sharing knowledge, and networking among medical laboratory professionals and enthusiasts.
                        </p>
                    </div>
                </a>

                <a className="relative md:p-8" href="/blogs/what-is-a-website-template">
                    <div className="relative z-50">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        <h2 className=" font-bold text-lg mt-4">Repository</h2>
                        <p className=" font-normal  mt-4 text-gray-500 max-w-4xl">
                        A digital library hosting research papers, articles, and resources in medical laboratory science.
                        </p>
                    </div>
                </a>
                
            </div>
   


        <section className=" w-full">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <Card className="max-w-md bg-white shadow border-s-2 border-s-green-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold">A comprehensive tool for medical research.</h3>
                  <p className="text-muted-foreground max-w-sm">
                  KUHESMedLab offers a range of features designed
                   to support the needs of the medical research community. From data management
                   and analysis tools to collaboration spaces and 
                   publication support, our platform is built to facilitate every step of the research process.
                  </p>
                  
                </Card>
                <Card className="max-w-md bg-white shadow border-s-2 border-s-green-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold">Guiding principles that define who we are.</h3>
                  <p className="text-muted-foreground max-w-sm">
                  Integrity, Innovation, Collaboration, and Excellence are the core 
                  values that drive everything we do at KUHESMedLab. We believe in conducting our work with the highest ethical
                   standards, embracing new ideas, working together to achieve common 
                   goals, and striving for excellence in all our endeavors.
                  </p>
                  
                </Card>
              </div>
            </div>
          </div>
        </section>

    </div>
    </div>
   
  )
}
