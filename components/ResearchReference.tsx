
"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon, BookOpenIcon, ClipboardListIcon, LightbulbIcon, HelpCircle } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ResearchReferenceForm from './ResearchReferenceForm'
 

export default function ResearchReferencesSection({researchId,file_url}:{researchId:string,file_url:string}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)



  return (
    <section className="w-full p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Research References</h2>
        <p className="text-muted-foreground">
          Properly citing your sources is crucial for academic integrity and giving credit to original ideas.
        </p>
      </div>
    <div className='grid lg:grid-cols-2 gap-1'>
    <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ClipboardListIcon className="h-6 w-6" />
            How to Add References
          </h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Click the Create Reference button below.</li>
            <li>Fill in the details of your reference in the popup form.</li>
            <li>Use the DOI auto-fetch feature when available for quick entry.</li>
            <li>Review the APA citation preview for accuracy.</li>
            <li>Click Add Reference to save your entry.</li>
          </ol>
          <ResearchReferenceForm researchId={researchId} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6" />
            Recently Added References
            <HoverCard>
              <HoverCardTrigger asChild>
                <HelpCircle />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className='text-xs font-light'>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <LightbulbIcon className="h-6 w-6" />
                  Tips for Effective Referencing
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Always cite your sources to avoid plagiarism.</li>
                  <li>Use primary sources whenever possible.</li>
                  <li>Keep your references organized as you research.</li>
                  <li>Double-check the accuracy of your citations.</li>
                  <li>Familiarize yourself with different citation styles (APA, MLA, Chicago, etc.).</li>
                </ul>
                </div>
               
              </HoverCardContent>
            </HoverCard>
          </h3>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            {7 < 0 ? (
              <ul className="space-y-4">
               
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">No references added yet. Start by creating a new reference!</p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

    </div>
     
    </section>
  )
}