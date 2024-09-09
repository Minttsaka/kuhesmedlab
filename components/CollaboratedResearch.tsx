"use client"

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState, useEffect } from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Prisma, Research } from '@prisma/client'

type Collabo = Prisma.CollaboratorGetPayload<{
    include:{
        research:true
      }
}>

export default function CollaboratedResearch({ id, collaborations }:{id:string, collaborations:Collabo[]}) {

    const research = collaborations.map(collabo=>collabo.research)

  return (
    <div className="overflow-hidden z-20 relative bg-gradient-to-r from-background to-secondary p-6" id='list'>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Your collaborations</h2>
        <h4 className="text-gray-600">You will find the details of selected collaborated individual research when scrolling.</h4>
      </div>
      <div className="relative z-10">
        <div className="relative">
          <ScrollArea className="w-full ">
            {research.length ===0 && 
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>You have not yet collaborated</AlertTitle>
              <AlertDescription>
                We havent found any collaborated research for your account yet.
              </AlertDescription>
            </Alert>
          </motion.div>}
            <div className="flex space-x-4 p-4">
              {research?.map((item, index) => (
                <ResearchCard key={index} item={item} id={id} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

function ResearchCard({ item, id }: { item: Research; id: string }) {
  return (
    <Card className={`w-80 shrink-0 transition-all duration-300 bg-white shadow ${id===item.id ? 'scale-105 shadow-lg' : 'scale-100 opacity-70'}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="text-sm text-blue-400">{item.status}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-500">
        <p className='line-clamp-1'><span className="font-semibold">Journal:</span> {item.journal}</p>
        {item.Published && <p><span className="font-semibold">Published Date:</span> {item.publicationDate?.toDateString()}</p>}
        <p className='line-clamp-1'><span className="font-semibold">Field:</span> {item.field}</p>
        <p className='line-clamp-1'><span className="font-semibold">Volume:</span> {item.volume}, <span className="font-semibold">Issue:</span> {item.issue}</p>
        <p className='line-clamp-1'><span className="font-semibold">Affiliation:</span> {item.affiliation}</p>
        <p className='line-clamp-1'><span className="font-semibold">Year Created:</span> {item.createdAt.toDateString()}</p>
        <p className='line-clamp-1'> <span className="font-semibold">DOI:</span> {item.doi}</p>
        <a
          href={`/mw/publication/${item.id}`}

          className="inline-flex items-center mt-2 hover:underline"
        >
          View Research <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  )
}