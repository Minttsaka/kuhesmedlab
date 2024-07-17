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
          <Button className="w-fit rounded-3xl">
            Explore the features<ArrowRight className="h-3 w-3"/>
          </Button>
      </div>
      <div className='container mx-auto grid md:grid-cols-2 gap-5 mt-10 border-x'>
        <div className='grid grid-cols-1 gap-5 md:pr-12'>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 p-5 rounded-xl bg-gray-100 text-[green] w-fit'>
                        <HelpCircle className='h-4 w-4' />
                        SUPPORT
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Outstanding support</h2>
                    <p>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                    <Link className='text-[#3f3f74] flex gap-2 items-center' href={'#'}>
                        Explore support <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>
            </CardContent>
        </Card>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-10 mt-5'>
                    <Badge className='flex gap-2 p-5 rounded-xl bg-gray-100 text-[green] w-fit'>
                        <Group className='h-4 w-4' />
                        FORUM
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Forum to discussion</h2>
                    <p> Engage in discussions on the latest developments and trends in medical laboratory technologies and advancements.</p>
                    <Link className='text-[#3f3f74] flex gap-2 items-center' href={'#'}>
                        Explore Forum <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>
        <div className='grid grid-cols-1 gap-5 md:pl-12'>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-10 mt-5'>
                    <Badge className='flex gap-2 p-5 rounded-xl bg-gray-100 text-[green] w-fit'>
                        <Search className='h-4 w-4' />
                        Research
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Research center</h2>
                    <p>Use this platform to research and drive innovation in medical laboratory science. Share knowledge, ideas, and expertise to overcome challenges and advance laboratory technology.</p>
                    <Link className='text-[#3f3f74] flex gap-2 items-center' href={'#'}>
                        Learn more about research <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>
            </CardContent>
        </Card>
        <Card className='shadow-2xl'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
            <div className='flex flex-col gap-10 mt-5'>
                    <Badge className='flex gap-2 p-5 rounded-xl bg-gray-100 text-[green] w-fit'>
                        <Book className='h-4 w-4' />
                        Education
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Educational Resources</h2>
                    <p> Find training programs, workshops, and mentorship opportunities.
Explore educational resources, including research papers, presentations, and tutorials.</p>
                    <Link className='text-[#3f3f74] flex gap-2 items-center' href={'#'}>
                        Explore this section <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>
        
      </div>
    </div>
  )
}
