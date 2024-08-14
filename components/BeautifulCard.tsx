import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Book, Group, HelpCircle, Leaf, Search } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import Link from 'next/link'

export default function BeautifulCard() {
  return (
    <div className='bg-gray-100 py-40'>
      <div className="container mx-auto flex flex-col gap-5 border-x border-dotted">
        <h2 className="text-[purple] font-bold text-2xl">Features to drive success</h2>
        <h1 className="text-4xl font-bold">All in One</h1>
        <p className='max-w-md'>
        An MLS scientist is equiped with all it
        takes to conduct research in medical
        laboratories, universities, or industries to
        develop new diagnostic tests, vaccines,
        and treatments.
        </p>
        
          <Link href={'/signin'} className="bg-slate-800 w-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                Explore the features
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </Link>
      </div>
      <div className='container mx-auto grid md:grid-cols-2 gap-5 mt-10 border-x'>
        <div className='grid grid-cols-1 gap-5 md:pr-12'>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/support.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2  mt-5'>
                    <Badge className='flex gap-2 p-2 hover:bg-transparent rounded-xl bg-gray-100 text-[green] w-fit'>
                        <HelpCircle className='h-4 w-4' />
                        SUPPORT
                    </Badge>
                    <h2 className='uppercase font-bold'>Outstanding support</h2>
                    <p className='text-gray-500'>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                    <Link className='text-gray-500 text-sm pt-5 flex gap-2 items-center' href={'#'}>
                        Explore support  <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                    </Link>
                </div>
            </CardContent>
        </Card>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/forum.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2 mt-5'>
                    <Badge className='flex gap-2 p-2 rounded-xl bg-gray-100 text-[green] hover:bg-transparent w-fit'>
                        <Group className='h-4 w-4' />
                        FORUM
                    </Badge>
                    <h2 className='uppercase font-bold'>Forum to discussion</h2>
                    <p className='text-gray-500'> Engage in discussions on the latest developments and trends in medical laboratory technologies and advancements.</p>
                    <Link className='text-gray-500 text-sm pt-5 flex gap-2 items-center' href={'#'}>
                        Explore Forum  <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>
        <div className='grid grid-cols-1 gap-5 md:pl-12'>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/research.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='space-y-2 mt-5'>
                    <Badge className='flex gap-2 p-2 rounded-xl bg-gray-100 text-[green] hover:bg-transparent w-fit'>
                        <Search className='h-4 w-4' />
                        Research
                    </Badge>
                    <h2 className='uppercase font-bold'>Research center</h2>
                    <p className='text-gray-500'>Use this platform to research and drive innovation in medical laboratory science. Share knowledge, ideas, and expertise to overcome challenges and advance laboratory technology.</p>
                    <Link className='text-gray-500 text-sm pt-5 flex gap-2 items-center' href={'#'}>
                        Learn more about research  <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                    </Link>
                </div>
            </CardContent>
        </Card>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/learn.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
            <div className='space-y-2 mt-5'>
                    <Badge className='flex gap-2 p-2 rounded-xl bg-gray-100 text-[green] hover:bg-transparent w-fit'>
                        <Book className='h-4 w-4' />
                        Education
                    </Badge>
                    <h2 className='uppercase font-bold'>Educational Resources</h2>
                    <p className='text-gray-500'> Find training programs, workshops, and mentorship opportunities.
Explore educational resources, including research papers, presentations, and tutorials.</p>
                    <Link className='text-gray-500 text-sm pt-5 flex gap-2 items-center' href={'#'}>
                        Explore this section  <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>
        
      </div>
    </div>
  )
}
