"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ChevronRight, ChevronLeft, Check, HelpCircle, Beaker, Book, Atom, Dna, Loader2, LucideProps } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useToast } from "./ui/use-toast"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  abstract: z.string().min(10, {
    message: "Abstract must be at least 10 characters.",
  }),
  keywords: z.string().min(2, {
    message: "Please provide at least one keyword.",
  }),
  affiliation: z.string().min(2, {
    message: "Affiliation must be at least 2 characters.",
  }),
  field: z.string({
    required_error: "Please select a research field.",
  }),
  authors: z.string().min(2, {
    message: "Please provide at least one author.",
  }),
  journal: z.string().optional(),
  conference: z.string().optional(),
})

const AnimatedIcon = ({ icon: Icon, delay }:{ icon: React.FC<LucideProps>, delay:number }) => (
  <div className={`absolute text-white/20 animate-float`} style={{ animationDelay: `${delay}s` }}>
    <Icon size={48} />
  </div>
)

export default function ResearchWorkspaceForm() {
  const [step, setStep] = React.useState(0)
  const totalSteps = 3
  const [isSubmitting,setIsSubmitting] = React.useState(false)

  const router = useRouter();
  const {toast} = useToast()

  const slugify = (str:string) =>str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      abstract: "",
      keywords: "",
      affiliation: "",
      field: "",
      authors: "",
      journal: "",
      conference: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    const { 
      title,
      abstract,
      affiliation,
      keywords,
      field,
      journal,
      authors,
      conference
    } = values

    setIsSubmitting(true)

    try {
        const response= await axios.post('/api/research',{
          title,
          abstract,
          slug:slugify(title),
          affiliation,
          keywords,
          field,
          journal,
          authors,
          conference
        
        })
        if(response.data===null || response.data===""){

          toast({
            title:"Error",
            description:"Please try again. This occur due to ai unable to distribute subject area."
          });

        } else {
          toast({
            title:"Workspace created",
            description:"The research was successfully created."
          });
          router.push(`/mw/publication/${response.data}`)
        }

      } catch (error) {
        console.log(error)
      } finally {
        setIsSubmitting(false)
      }
    console.log(values)
   // alert("Form submitted successfully! Time to celebrate! 🎉🎊🥳")
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps - 1))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="min-h-screen bg-[#2a2e7c] overflow-hidden relative">
      <AnimatedIcon icon={Beaker} delay={0} />
      <AnimatedIcon icon={Book} delay={2} />
      <AnimatedIcon icon={Atom} delay={4} />
      <AnimatedIcon icon={Dna} delay={6} />

      <nav className="bg-white backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold ">ResearchSpace 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl bg-white rounded-lg bg-opacity-15 backdrop-blur-lg mx-auto mt-10 pb-20 px-4 sm:px-6 lg:px-8 relative z-10" id="create">
        <div className="bg-white mt-6 shadow-lg rounded-lg p-6 dark:bg-gray-800/90">
          <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400 dark:text-white">Create Your Awesome Research Workspace! 🧪📚</h1>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1/3 h-2 rounded-full transition-all duration-300",
                    step >= index ? "bg-blue-500" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
            <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              Step {step + 1} of {totalSteps} - You are almost! 🌟
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {step === 0 && (
                <>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title of Your Groundbreaking Research 🏆</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your mind-blowing research title" {...field} />
                        </FormControl>
                        <FormDescription>
                          Make it Professional.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="abstract"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Abstract (Your Researchs Elevator Pitch) 🎭</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Summarize your research in a way that would impress even your grandma"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Keep it short, sweet, and science-y (150-300 words).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords (a.k.a. Your Researchs Hashtags) #️⃣</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter keywords (comma-separated, no actual hashtags needed)" {...field} />
                        </FormControl>
                        <FormDescription>
                          What would your research tweet if it had a Twitter account?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="affiliation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Affiliation (Your Researchs Home Base) 🏫</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your institution (or secret lab)" {...field} />
                        </FormControl>
                        <FormDescription>
                          Where the magic happens! (No Hogwarts, please)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="field"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Research Field (Your Academic Playground) 🎢</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your research field" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="computer-science">Computer Science (Binary Boogaloo)</SelectItem>
                            <SelectItem value="biology">Biology (Cell-ebration Studies)</SelectItem>
                            <SelectItem value="physics">Physics (Quantum Leaps and Bounds)</SelectItem>
                            <SelectItem value="chemistry">Chemistry (Periodic Table Dancing)</SelectItem>
                            <SelectItem value="psychology">Psychology (Mind-Bending Research)</SelectItem>
                            <SelectItem value="other">Other (Uncharted Academic Territory)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose your research arena. May the odds be ever in your favor!
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="authors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Authors (The Dream Team) 🦸‍♀️🦸‍♂️</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter author names (comma-separated, no alter-egos please)" {...field} />
                        </FormControl>
                        <FormDescription>
                          List all the brilliant minds behind this research. Dont forget yourself, superhero!
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="journal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Journal (Your Researchs Red Carpet) 📰
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="w-4 h-4 ml-2 inline-block text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Optional: The journal where your research will make its grand debut.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter journal name (optional, 'Nature' is fine too 😉)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="conference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Conference (Your Researchs World Tour) 🌍
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="w-4 h-4 ml-2 inline-block text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Optional: The conference where your research will rock the academic world.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter conference name (optional, 'TED Talk' works too 🎤)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 0}
                  className="bg-white hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                {step < totalSteps - 1 ? (
                  <Button type="button" onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 text-white">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="animate-spin" />:'Submit and Continue! 🎉'}
                   
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}