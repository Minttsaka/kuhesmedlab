"use client"

import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'
import BioPractice from './BioPractice'

export default function DashboardSolutions({bio}:{bio:string}) {
    const [isBio, setIsBio ] = useState(true)

    if(!bio || bio===undefined || bio===""){
        setIsBio(false)
    }
    
  return (
    <div className='my-10'>
        {!isBio && <BioPractice /> }
        <div className='container mx-auto space-y-5 mb-5'>
            <h2 className='text-3xl font-sans'>
                Your Products
            </h2>
        </div>
      <div className='container mx-auto grid md:grid-cols-3 gap-4'>
            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500 '>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Research
                    </Badge>
                    <h2  className='text-3xl'>
                        Create Your Research Workspace
                    </h2>
                    <p className=''>
                    Create a personal space for your research, where you can
                     easily access and organize your papers, collaborations,
                      and resources, helping you work more efficiently and make new discoveries.
                    </p>
                    <Link className='underline flex items-center' href={'/mw/research'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>

            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Events
                    </Badge>
                    <h2  className='text-3xl'>
                        Find Events
                    </h2>
                    <p className=''>
                    Discover upcoming conferences, workshops, and webinars in medical laboratory science,
                     connecting you with experts, innovations, and networking
                      opportunities to enhance your knowledge and professional growth.
                    </p>
                    <Link className='underline flex items-center' href={'/events'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Research
                    </Badge>
                    <h2  className='text-3xl'>
                    Research Repository
                    </h2>
                    <p className=''>
                        Access a vast collection of medical laboratory science research papers,
                         articles, and resources, curated to facilitate knowledge sharing, collaboration, and innovation.
                    </p>
                    <Link className='underline flex items-center' href={'/publications'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Support
                    </Badge>
                    <h2  className='text-3xl'>
                        Seek Support From Expert
                    </h2>
                    <p className=''>
                    Connect with experienced professionals in medical laboratory science, receiving personalized guidance,
                     mentorship, and expertise to overcome challenges, enhance your research, and achieve your goals.
                    </p>
                    <Link className='underline flex items-center' href={'/support'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Connect
                    </Badge>
                    <h2  className='text-3xl'>
                        Community
                    </h2>
                    <p className=''>
                    Attend a researchers community and learn from other professionals
                     in medical laboratory science, share your research, and discuss new ideas.
                    </p>
                    <Link className='underline flex items-center' target='__blank' href={'/community/feed'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10 hover:shadow-2xl cursor-pointer hover:shadow-purple-500'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                       Developers
                    </Badge>
                    <h2  className='text-3xl'>
                        API Access
                    </h2>
                    <p className=''>
                    Unlock programmatic access to the KUHESMEDLAB DB repository, enabling seamless integration,
                     automated workflows, and custom applications to accelerate your medical 
                     laboratory science research and development.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'/404'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


          
        </div>
    </div>
  )
}
