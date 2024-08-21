import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import LandingSurvey from '@/components/LandingSurvey'
import Footer from "@/components/Footer";
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100'>
      <LandingNav />
      <LandingMobileNav />
      <LandingSurvey />
      <Footer/>
    </div>
  )
}
