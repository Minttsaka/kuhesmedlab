import { BotIcon, Cloud, SearchCheck, Store } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card } from './ui/card'

export default function AboutCard() {
  return (
    <div className='container mx-auto'>
       <div className='container mx-auto grid md:grid-cols-2 gap-8  items-center'>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
    <div className="col-span-2">
        <div className="">
        <h2 className='text-3xl font-bold my-8 text-center'>Our Components</h2>
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
        </div>
    </div>
   
</div>

        <section className=" w-full">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-green-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold">Pharmaceutical Research</h3>
                  <p className="text-muted-foreground max-w-sm">
                   collaborates with leading pharmaceutical companies to support drug discovery and
                  </p>
                  
                </Card>
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-green-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold">Pharmaceutical Research</h3>
                  <p className="text-muted-foreground max-w-sm">
                   collaborates with leading pharmaceutical companies to support drug discovery and
                  </p>
                  
                </Card>
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-green-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                    <StarFilledIcon className=" text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold">Pharmaceutical Research</h3>
                  <p className="text-muted-foreground max-w-sm">
                   collaborates with leading pharmaceutical companies to support drug discovery and
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
