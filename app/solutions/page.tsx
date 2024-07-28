import AboutFooter from '@/components/AboutFooter'
import Resources from '@/components/Resources'
import SolutionsFirst from '@/components/Solutions'
import SolutionsFinisher from '@/components/SolutionsFinisher'
import SolutionsGridBoxies from '@/components/SolutionsGridBoxies'
import SolutionsTopReseacher from '@/components/SolutionsTopReseacher'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'
import React from 'react'

export default function page() {
  return (
    <div>
        <WobbleCardDemo />
        <Resources />
        <SolutionsFirst />
        <SolutionsTopReseacher />
        <SolutionsGridBoxies />
        <SolutionsFinisher />
        <AboutFooter />
    </div>
  )
}
