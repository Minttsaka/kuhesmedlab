import AboutFooter from '@/components/AboutFooter'
import BlogFirst from '@/components/BlogFirst'
import BlogSecond from '@/components/BlogSecond'
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import React from 'react'

export default function page() {
  return (
    <div>
        <LandingNav />
        <LandingMobileNav />
        <BlogFirst />
        <BlogSecond />
        <AboutFooter />
      
    </div>
  )
}
