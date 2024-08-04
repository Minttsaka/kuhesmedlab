import AboutFooter from '@/components/AboutFooter'
import BlogFirst from '@/components/BlogFirst'
import BlogSecond from '@/components/BlogSecond'
import { LandingNav } from '@/components/landing-nav'
import React from 'react'

export default function page() {
  return (
    <div>
        <LandingNav />
        <BlogFirst />
        <BlogSecond />
        <AboutFooter />
      
    </div>
  )
}
