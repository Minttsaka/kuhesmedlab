'use client'

import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Reference } from '@prisma/client'



export default function PublicationRef({ references }:{ references:Reference[]}) {

  
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background text-foreground">
      <h2 className="text-lg font-bold mb-4">References</h2>
      <div className=" w-full p-4 md:p-0">
        <ul className="space-y-4">
          {references.map((ref) => (
            <li key={ref.id} className="flex justify-between items-start gap-4">
              <p className="text-sm">
                {ref.fullReference}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}