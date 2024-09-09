import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import TechnologyPage from '@/components/Technology'
import React from 'react'

export default function page() {
  return (
    <div>
        <LandingNav />
        <LandingMobileNav />
      <TechnologyPage />
    </div>
  )
}
