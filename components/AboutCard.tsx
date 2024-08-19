import { BotIcon, Cloud, LibraryBig, SearchCheck, SearchIcon, Store, Users2 } from 'lucide-react'
import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card } from './ui/card'

export default function AboutCard() {

  const iconSize = 80
  const iconColor = "white"

  const IconWrapper = ({ children, gradient, label }:{ children:ReactNode, gradient:string, label:string }) => (
    <div className="flex flex-col items-center">
      <div 
        className="p-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 mb-2"
        style={{
          background: gradient,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(255, 255, 255, 0.2)'
        }}
      >
        {children}
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  )
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
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-orange-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                  </div>
                  
                  <IconWrapper gradient="linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)" label="//\\">
                    <SearchIcon size={iconSize} color={iconColor} strokeWidth={1.5} />
                  </IconWrapper>
                  
                </Card>
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-orange-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                  </div>
                  
                  <IconWrapper gradient="linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" label="//\\">
                    <Users2 size={iconSize} color={iconColor} strokeWidth={1.5} />
                  </IconWrapper>
                  
                </Card>
                <Card className="w-full md:max-w-md bg-white shadow border-s-2 border-s-orange-500  p-6 space-y-4 rounded-none">
                  <div className='flex gap-3 items-center'>
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                    <StarFilledIcon className=" text-orange-500" />
                  </div>
                  
                  <IconWrapper gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" label="//\\">
                    <LibraryBig size={iconSize} color={iconColor} strokeWidth={1.5} />
                  </IconWrapper>
                  
                </Card>
                
              </div>
            </div>
          </div>
        </section>

    </div>

    </div>
  )
}
