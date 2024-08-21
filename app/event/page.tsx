
import EventFirst from '@/components/EventFirst'
import { EventFourth } from '@/components/EventFourth'
import { EventSec } from '@/components/EventSec'
import { EventThird } from '@/components/EventThird'
import Footer from '@/components/Footer'
import LandingMobileNav from '@/components/LandingMobileNav'
import { EventsGrid } from '@/components/events-grid'
import { LandingNav } from '@/components/landing-nav'
import React from 'react'

export default function page() {
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
      <EventFirst />
      <EventSec />
      <EventThird />
      <EventFourth />
      <EventsGrid />
      <Footer />
    </div>
  )
}
