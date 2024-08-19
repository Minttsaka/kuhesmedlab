
import { LandingNav } from '@/components/landing-nav'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationSearch from '@/components/PublicationSearch'
import React from 'react'

export default function page() {
  return (
    <div>
      <LandingNav />
      <PublicationSearch />
      <PublicationsFooter />
    </div>
  )
}
