
import Footer from '@/components/Footer'
import { LandingNav } from '@/components/landing-nav'
import SolutionsFirst from '@/components/Solutions'
import SolutionSec from '@/components/SolutionSec'
import SolutionsFinisher from '@/components/SolutionsFinisher'
import SolutionsGridBoxies from '@/components/SolutionsGridBoxies'
import SolutionThird from '@/components/solutionThird'
import React from 'react'

export default function page() {
  return (
    <div>
      <LandingNav />
        <SolutionsFirst />
        <SolutionSec />
        {/* <SolutionsTopReseacher /> */}
        <SolutionsGridBoxies />
        <SolutionThird />
        <SolutionsFinisher />
        <Footer />
    </div>
  )
}
