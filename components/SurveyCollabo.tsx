/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/c35wH0sOyRc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

"use client"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "antd"
import { Input } from "./ui/input"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr"
import { Label } from "./ui/label"
import { toast } from "sonner"
import { SurveyFormAnswer } from "@prisma/client"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { Card } from "./ui/card"


type SurveyFormQuestion = {
  id: string
  title: string
  image: string | null
  choices:SurveyFormAnswer[]
  formId: string
  author: string
  createdAt: Date
}

const FormSchema = z.object({
  title: z
    .string()
    .min(2, "First name must be at least 2 characters"),
  description: z.string()
  .min(2, "First name must be at least 2 characters")
});

type InputType = z.infer<typeof FormSchema>;



const fetcher = async (url:string) => {
  const res = await axios.get(url);

  return res.data;
};


export function SurveyForms({surveyId}:{surveyId:string}) {

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


  const { data, mutate, isLoading, error } = useSWR(
    `/api/form/${surveyId}`,
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;


  }
  console.log(surveyId,  "first")

  const saveform: SubmitHandler<InputType> = async (data) => {

    console.log(surveyId,  "second")

    const {title, description} = data
  try {
    const response= await axios.post('/api/form',{
      title,
      description,
      surveyId
        })
      mutate();
      toast.success("The User Registered Successfully.");
      
  } catch (error) {
    console.log(error)
  }
};

const formList = Array.isArray(data) ? data : [];

  return (
    <div className="bg-white mr-6 p-6 rounded-2xl space-y-5 w-[30%]">
          <Dialog>
          <DialogTrigger asChild>
            <button className="px-8 py-2 rounded-full relative bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 ">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">
              Create new form
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#c8f2f3] sm:max-w-[425px]">
            <DialogTitle>
              <h2 className='text-gray-600 font-bold space-y-5 text-center'>Create New survey Form</h2>
            </DialogTitle>
            <form onSubmit={handleSubmit(saveform)} className="grid gap-4 py-4">
              <div className="">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  {...register("title")}
                  className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
                />
              </div>
              <div className="">
                <Label htmlFor="description" className="text-right">
                Description
                </Label>
                <Input
                {...register("description")}
                  id="description"
                  className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
                />
              </div>
              <button type='submit' className="px-8 py-2 rounded-full relative bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200"
              disabled={isSubmitting}
              >
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                    {isSubmitting ? (<Loader2 className=" animate-spin h-4 w-4"/>) : "Create New form"}
                </span>
                </button>
            </form>
          </DialogContent>
        </Dialog>
      <div className="relative w-full overflow-auto">
      {formList.length === 0 && (<p  className=" text-gray-500">No survey form for this survey</p>)}
   
                {formList.length > 0 &&
                formList.map(form=>(
                  <Card key={form.id} className="w-full border p-6 grid gap-6">
                    <div>
                      <h2 className="text-2xl font-bold">{form.title}</h2>
                      <p className="text-muted-foreground">
                        {form.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-md p-4 flex flex-col gap-2">
                        <span className="text-2xl font-bold">25</span>
                        <span className="text-muted-foreground text-sm">Questions</span>
                      </div>
                      <div className="bg-muted rounded-md p-4 flex flex-col gap-2">
                        <span className="text-2xl font-bold">1,234</span>
                        <span className="text-muted-foreground text-sm">Respondents</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[purple] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        View
                      </Link>
                      <Link
                        href={`/mw/survey/create/${form.id}`}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[green] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Edit
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[red] px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Delete
                      </Link>
                    </div>
                  </Card>
                ))
                
               }
                
              
              
               
          

          
      </div>
    </div>
  )
}
