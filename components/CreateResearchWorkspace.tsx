
"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { GroupMembers } from './GroupMembers'
import { Progress } from './ui/progress'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { BriefcaseIcon, CalendarIcon, Loader2, LocateIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react"



const FormSchema = z.object({
    title: z
      .string()
      .min(2, "First name must be at least 2 characters"),
    abstract: z.string()
    .min(2, "First name must be at least 2 characters"),
    keyWords: z.string()
    .min(2, "First name must be at least 2 characters"),
    affiliation: z.string()
    .min(2, "First name must be at least 2 characters"),
    doi: z.string()
    .min(2, "First name must be at least 2 characters"),
    journal: z.string()
    .min(2, "First name must be at least 2 characters"),
    conference: z.string()
    .min(2, "First name must be at least 2 characters"),
    });
  
  type InputType = z.infer<typeof FormSchema>;


export default function CreateResearchWorkspace() {
  const [authors, setAuthors] = useState([''])
  const [researchField, setResearchField] = useState("");

  const addAuthor = () => {
    setAuthors([...authors, ''])
  }

  const updateAuthor = (index: number, value: string) => {
    const newAuthors = [...authors]
    newAuthors[index] = value
    setAuthors(newAuthors)
  }

  const deleteAuthor = (index: number) => {
    const newAuthors = authors.filter((_, i) => i !== index)
    setAuthors(newAuthors)
  }


    const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors,isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  console.log(errors)

  const saveResearch: SubmitHandler<InputType> = async (data) => {

    const {title, abstract ,keyWords, affiliation,doi, journal, conference} = data
  try {
    const response= await axios.post('/api/research',{
      title,
      abstract,
      keyWords,
      affiliation,
      authors,
      researchField,
      doi,
      journal,
      conference,
    })
    router.push(`/mw/publication/${response.data}`)
      toast.success("The User Registered Successfully.");
      
  } catch (error) {
    console.log(error)
  }
};


  return (
    
    <div className='bg-[#2a2e7c] pt-10' id='form'>
        <div className='container mx-auto grid md:grid-cols-2 gap-2'>
        <Card className="rounded-none  bg-white bg-opacity-20 w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className='text-yellow-300'>Create New Research Workspace</CardTitle>
                <CardDescription className='text-white'>Enter the details of your research project to create a new workspace.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(saveResearch)}>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <Label className='text-gray-100' htmlFor="title">Title</Label>
                    <Input {...register("title")} className='bg-transparent placeholder:text-gray-200 text-white' id="title" placeholder="Enter the research title" />
                    </div>
                    
                    <div className="space-y-2">
                    <Label className='text-gray-100' htmlFor="abstract">Abstract</Label>
                    <Textarea {...register("abstract")} className='bg-transparent text-white' id="abstract" placeholder="Enter the research abstract" />
                    </div>
                    
                    <div className="space-y-2">
                    <Label className='text-gray-100' htmlFor="keywords">Keywords</Label>
                    <Input {...register("keyWords")} className='bg-transparent placeholder:text-gray-200 text-white' id="keywords" placeholder="Enter keywords separated by commas" />
                    </div>
                    
                    <div className="">
                    <div className="space-y-2">
                        <Label className='text-gray-100' htmlFor="field">field</Label>
                        <Select  onValueChange={(e)=>setResearchField(e)}>
                        <SelectTrigger className='bg-transparent placeholder:text-gray-200' id="field">
                            <SelectValue placeholder="Select field" className='' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bio">Bio</SelectItem>
                            <SelectItem value="plant">Plants</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    
                    </div>

                    <div className="space-y-2">
                        <Label className='text-white'>Authors</Label>
                        <AnimatePresence initial={false}>
                            {authors.map((author, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center space-x-2"
                            >
                                <Input
                                value={author}
                                onChange={(e) => updateAuthor(index, e.target.value)}
                                placeholder={`Author ${index + 1}`}
                                className="mt-2"
                                />
                                {index > 0 && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => deleteAuthor(index)}
                                    className="mt-2 rounded-full bg-[red] text-white"
                                    aria-label={`Delete author ${index + 1}`}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                                )}
                            </motion.div>
                            ))}
                        </AnimatePresence>
                        <Button type="button" variant="outline" size="icon" onClick={addAuthor} className="mt-2 rounded-full bg-[green] border-none text-white">
                            <PlusCircledIcon />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className='text-gray-100' htmlFor="doi">DOI</Label>
                        <Input {...register("doi")} className='bg-transparent placeholder:text-gray-200 text-white' id="doi" placeholder="Enter DOI" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label className='text-gray-100' htmlFor="journal">Journal</Label>
                        <Input {...register("journal")} className='bg-transparent placeholder:text-gray-200 text-white' id="journal" placeholder="Enter journal name" />
                    </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className='text-gray-100' htmlFor="conference">Conference</Label>
                        <Input  {...register("conference")} className='bg-transparent placeholder:text-gray-200 text-white' id="conference" placeholder="Enter conference name" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label className='text-gray-100' htmlFor="affiliation">Affiliation</Label>
                        <Input {...register("affiliation")} className='bg-transparent placeholder:text-gray-200 text-white' id="affiliation" placeholder="Enter affiliation" />
                    </div>
                    </div>
                </div>
                <Button type='submit' className="w-full" disabled={isSubmitting}>{isSubmitting ? "Creating.." : "Create New Research"}</Button>
                </form>
            </CardContent>

            </Card>
            <img alt='' src='https://www.kuhes.ac.mw/wp-content/uploads/2022/02/Home-slide-2-2736x980.jpg-3748x980.png' className='h-full object-cover object-center rounded-lg' />
                </div>
    </div>
    
  )
}