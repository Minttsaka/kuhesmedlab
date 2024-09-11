"use client"

import { Event } from '@prisma/client';
import React from 'react'
import { useState, useEffect } from 'react'
import { NoEvents } from './NoEvent';

function shuffleArray(array: Event[]): Event[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function EventsGrid({newEvent}:{newEvent:Event[]}) {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents(shuffleArray(newEvent).slice(0, 6))
  }, [])

  const rotations = ['rotate-6', '-rotate-6', 'rotate-6', '-rotate-6', 'rotate-6', '-rotate-6']

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#2a2e7c] -skew-y-12 origin-top-left -z-10" /> 
      <div className="grid z-10 md:grid-cols-3 md:grid-rows-2 gap-6 container mx-auto p-6 sm:p-10">
      {events.length ===0 && <NoEvents  eventType="New" />}
        {events.map((event, index) => (
          <div key={index} className={`col-span-1 bg-white border-b-8 border-b-blue-600 row-span-1 bg-background rounded-lg shadow-lg overflow-hidden transform ${rotations[index]}`}>
            <img
              src={event.img!}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{event.startDate.toDateString()}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}