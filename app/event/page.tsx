
import EventFirst from '@/components/EventFirst'
import { EventFourth } from '@/components/EventFourth'
import { EventSec } from '@/components/EventSec'
import { EventThird } from '@/components/EventThird'
import Footer from '@/components/Footer'
import LandingMobileNav from '@/components/LandingMobileNav'
import { EventsGrid } from '@/components/events-grid'
import { LandingNav } from '@/components/landing-nav'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const events = await prisma.event.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })

  const newEvents = await prisma.event.findMany({
    orderBy:{
      createdAt:"desc"
    },
    take:6
  })
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
      <EventFirst />
      <EventSec organizationalEvents={events.filter(event=>event.type==="ORGANIZATION")}  />
      <EventThird institutionEvents={events.filter(event=>event.type==="INSTITUTION")}  />
      <EventFourth generalEvents={events.filter(event=>event.type==="GENERAL")}  />
      <EventsGrid newEvent={newEvents} />
      <Footer />
    </div>
  )
}
