import AboutBenefits from '@/components/AboutBenefits'
import AboutCard from '@/components/AboutCard'
import AboutFinisher from '@/components/AboutFinisher'
import AboutFirst from '@/components/AboutFirst'
import AboutUs from '@/components/AboutUs'
import AobutSec from '@/components/AobutSec'
import Footer from '@/components/Footer'
import LandingMobileNav from '@/components/LandingMobileNav'
import { AboutTeam } from '@/components/about-team'
import { LandingNav } from '@/components/landing-nav'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function page() {

  const teams = await prisma.user.findMany({
    where:{
      role:"ADMIN"
    }
  })

  const users = await prisma.user.count()

  const publications = await prisma.research.count()

  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
        <div className='h-screen bg-gradient-to-tr from-[#8686ce] via-blue-400 to-[blue] flex justify-center items-center'>
            <div className='space-y-10 container mx-auto text-white text-center '>
                <h5 className='flex justify-center text-xs text-center capitalize tracking-[3px]'><span className='rounded-2xl bg-gradient-to-r from-blue-300 to-purple-400 w-fit  py-1 px-5 uppercase'>About Us</span></h5>
                <h2 className='font-bold text-2xl md:text-4xl'>We are a pioneering initiative dedicated to transforming medical laboratory science through innovative research, collaboration, and knowledge sharing</h2>
                <p>Our innovative solutions enable researchers to gain a competitive edge in improving public health in Malawi and beyond.</p>
                <Link href={'#more'} className='p-px text-xs font-semibold leading-6  text-white inline-block'>
                  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full ">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span>
                        Explore More
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
                  </button>
                </Link>
            </div>
          
        </div>
        <AboutFirst />
        <AboutCard />
        <AobutSec />
        <AboutTeam teams={teams!} />
        <AboutBenefits />
        <AboutUs users={users!} publications={publications!} />
        <AboutFinisher />
        <Footer />
    </div>
  )
}
