import AboutBenefits from '@/components/AboutBenefits'
import AboutBlog from '@/components/AboutBlog'
import AboutCard from '@/components/AboutCard'
import AboutFinisher from '@/components/AboutFinisher'
import AboutFirst from '@/components/AboutFirst'
import AboutFooter from '@/components/AboutFooter'
import AboutUs from '@/components/AboutUs'
import AboutVision from '@/components/AboutVision'
import AobutSec from '@/components/AobutSec'
import { AboutTeam } from '@/components/about-team'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div>
        <div className='h-screen bg-gradient-to-tr from-[#8686ce] via-blue-400 to-[blue] flex justify-center items-center'>
            <div className='space-y-10 container mx-auto text-white text-center'>
                <h5 className='flex justify-center text-xs text-center'><span className='rounded-2xl bg-[purple] w-fit  py-1 px-5'>ai development company</span></h5>
                <h2 className='font-bold text-4xl'>Gain A Competitive Edge With kuhes AI Development Services</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure doloremque aliquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, alias?</p>
                <Button className='bg-white rounded-none text-black text-xs font-bold'>
                    Contact with sales manager
                </Button>
            </div>
          
        </div>
        <AboutFirst />
        <AboutCard />
        <AobutSec />
        <AboutTeam />
        <AboutBenefits />
        <AboutUs />
        <AboutVision />
        <AboutBlog />
        <AboutFinisher />
        <AboutFooter />
    </div>
  )
}
