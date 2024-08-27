"use client"

import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from 'sonner'
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { PlusIcon } from 'lucide-react'
import axios from 'axios'
import { KeyedMutator } from 'swr'
import { Reference as Rf } from '@prisma/client'

interface Reference {
  authors: string;
  title: string;
  journal: string;
  bookTitle: string;
  publisher: string;
  volume: string;
  issue: string;
  pages: string;
  year: string;
  doi: string;
  url: string;
}

const useDOIFetch = (doi: string) => {
  const [fetchedData, setFetchedData] = useState<Partial<Reference> | null>(null)

  useEffect(() => {
    if (doi) {
      fetch(`https://api.crossref.org/works/${doi}`)
        .then(response => response.json())
        .then(data => {
          const { message } = data;
          setFetchedData({
            title: message.title[0],
            journal: message['container-title'][0],
            year: (message.published['date-parts'][0][0]).toString(),
            volume: message.volume,
            issue: message.issue,
            pages: message.page,
            authors: message.author.map((author: any) => `${author.given} ${author.family}`).join(', ')
          });
        })
        .catch(err => {
          
        })
        
   
    }
  }, [doi])

  return fetchedData
}

const ReferenceForm = ({
  reference,
  setReference,
  onSubmit,
  darkMode,
  setDarkMode
}: {
  reference: Reference,
  setReference: Dispatch<SetStateAction<Reference>>,
  onSubmit: (reference: Reference) => void,
  darkMode: boolean,
  setDarkMode: (checked: boolean) => void
}) => {
  const fetchedData = useDOIFetch(reference.doi)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (fetchedData) {
      setReference(prev => ({ ...prev, ...fetchedData }))
    }
  }, [fetchedData, setReference])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setReference(prev => ({ ...prev, [name]: value }))
  }

  const calculateProgress = () => {
    const filledFields = Object.values(reference).filter(Boolean).length
    return (filledFields / Object.keys(reference).length) * 100
  }

  const generateAPACitation = () => {
    const {
      authors, year, title, journal, bookTitle, volume, issue, pages, doi, url
    } = reference

    let citation = ''

    if (authors) citation += `${authors} `
    if (year) citation += `(${year}). `
    if (title) citation += `${title.charAt(0).toUpperCase() + title.slice(1)}. `
    if (journal) citation += `<i>${journal}</i>`
    else if (bookTitle) citation += `<i>${bookTitle}</i>`
    if (volume) citation += `, <i>${volume}</i>`
    if (issue) citation += `(${issue})`
    if (pages) citation += `, ${pages}`
    citation += '. '
    if (doi) citation += `https://doi.org/${doi}`
    else if (url) citation += url

    return citation
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-background'}`}
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add New Reference (APA 7th Edition)</h2>
        
      </div>

      <Progress value={calculateProgress()} className="mb-4" />

      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(reference)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
      }} className="space-y-4">
        {Object.entries(reference).map(([key, value]) => (
          <div key={key} className="relative">
            <Input
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              className="peer pt-6"
              placeholder=" "
            />
            <Label 
              htmlFor={key}
              className="absolute left-3 top-1 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Label>
          </div>
        ))}

        <motion.div 
          className="bg-primary/10 p-4 rounded-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-2">APA 7th Edition Citation Preview:</h3>
          <p dangerouslySetInnerHTML={{ __html: generateAPACitation() }}></p>
        </motion.div>

        <Button type="submit" className="w-full">Add Reference</Button>
      </form>
    </motion.div>
  )
}

export default function ResearchReferenceForm({researchId, mutate}:{researchId:string, mutate: KeyedMutator<Rf[]>}) {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [reference, setReference] = useState<Reference>({
    authors: '',
    title: '',
    journal: '',
    bookTitle: '',
    publisher: '',
    volume: '',
    issue: '',
    pages: '',
    year: '',
    doi: '',
    url: ''
  })

  const handleSubmit = async () => {
    try {

      const res =await axios.post(`/api/reference/${researchId}`,{
        reference
      })
      if(res.data==="success"){
        toast.success("Your reference has been successfully added in APA format.")
      } else {
        toast.error("Something went wrong")
      }
      await mutate()
    } catch (error) {
      console.log(error)
    } finally {
      setIsOpen(false)
    }

   
    
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          Create Reference
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <AnimatePresence>
          {isOpen && (
            <ReferenceForm
              reference={reference}
              setReference={setReference}
              onSubmit={handleSubmit}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
