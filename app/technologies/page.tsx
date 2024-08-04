import AboutFooter from '@/components/AboutFooter'
import { LandingNav } from '@/components/landing-nav'
import SolutionsFirst from '@/components/Solutions'
import SolutionSec from '@/components/SolutionSec'
import SolutionsFinisher from '@/components/SolutionsFinisher'
import SolutionsGridBoxies from '@/components/SolutionsGridBoxies'
import SolutionsTopReseacher from '@/components/SolutionsTopReseacher'
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
        <AboutFooter />
    </div>
  )
}
