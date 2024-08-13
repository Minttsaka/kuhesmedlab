/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vBige0TMYEI
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useDropzone } from "react-dropzone";
import { uploadToS3 } from '@/lib/s3'
import { toast } from "sonner"
import { Loader2, UploadIcon } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export function UploadResearchPaper({researchId}:{researchId:string}) {

  const router = useRouter()

  const [uploading, setIsUploading] = useState(false)

  const [fileKey, setIsfileKey] = useState<string>()
  const [keyWords, setKeyWords] = useState<string>()

  const uploadFile =async () => {

    console.log(researchId, "this is research id")

    await axios.post('/api/files',{
      fileKey,
      keyWords,
      researchId
    })

    toast.success("successfully uploaded")

    router.refresh()

  }


  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];

      console.log(file)
      if (file.size > 10 * 1024 * 1024) {
        // bigger than 10mb!
        toast.error("file is too big")
        return;
      }

      try {
        setIsUploading(true)
        const data = await uploadToS3(file);
        if (typeof(data?.fileKey)!=="string") {
          toast.error("error");
          return;
        }

        setIsfileKey(data?.fileKey)
        
 
      } catch (error) {
        console.log(error);
      } finally {
        setIsUploading(false)
      }
    },
  });

  return (
    <section className="w-full bg-white p-8 rounded-3xl space-y-5">
      <p className=" text-muted-foreground ">
      Share your latest research with the world! Simply upload your paper and fill out the details below. Our expert researchers will meticulously
       analyze and review your work to ensure its validity and quality, giving you the recognition and credibility you deserve.
          </p>
          <div>
         
          <div className="space-y-2">
            <Label htmlFor="keywords">
              <TagIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              Keywords
            </Label>
            <Input id="keywords" onChange={(e)=>setKeyWords(e.target.value)} placeholder="Enter keywords separated by commas" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">
              <PaperclipIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              Research Paper
            </Label>
            <div
            {...getRootProps({
              className:
                "flex items-center justify-center rounded-lg border-2 border-dashed border-muted px-6 py-10 transition-colors hover:border-primary hover:bg-muted",
            })}
          >
            <input {...getInputProps()} />
            {uploading  ? (
                  <>
                    {/* loading state */}
                    <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
                    <p className="mt-2 text-sm text-slate-400">
                      uploading...
                    </p>
                  </>
                ) : (
                  <>
                     <div className="text-center">
                        <CloudUploadIcon className="mx-auto h-10 w-10 text-muted-foreground" />
                        <p className="mt-4 text-sm font-medium text-muted-foreground">
                          Drag and drop your file here
                          
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">PDF, DOC, DOCX, or TXT files up to 50MB</p>
                      </div>
                  </>
                )}
             
            </div>
          </div>
          <Button onClick={uploadFile} className="w-full">
            Submit Paper
          </Button>
        </div>
    </section>
  )
}

function CloudUploadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}


function FileTextIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function PaperclipIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function TagIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
