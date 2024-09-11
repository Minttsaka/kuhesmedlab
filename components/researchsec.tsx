/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/X1e8Gyt0VJ2
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
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Calendar } from "lucide-react"
import { Prisma } from "@prisma/client"

type Research = Prisma.ResearchGetPayload<{
  include:{
    files:true
  }
}>

export function Researchsec({currentArticles}:{currentArticles:Research[]}) {

  return (
    <section id="published" className="w-full py-12 md:py-24 lg:py-32">
      <div className="relative container px-4 md:px-6">
      <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
      <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Recent Published Research</Badge>

<div className=" py-10 dark:bg-gray-700 transition duration-500">
  <div className="relative lg:mx-auto mx-2">
    <div className="breadcrumb text-sm text-gray-900 font-normal flex flex-row space-x-2 my-2 dark:text-gray-50">
      <a href="#">The publications are verified and approved before published</a>
      <a href="#">✌️ </a>
    </div>
    {/* <div className="relative blog-header-image rounded-lg shadow-lg overflow-hidden h-48 object-cover">
      <img src="https://www.shutterstock.com/image-vector/vector-illustration-approved-label-flag-600nw-1506750614.jpg" className="object-cover object-center w-full" alt="headerImage" />
    </div> */}
    <span aria-label="emoji" className="absolute left-1/2 -bottom-5 text-6xl">🍁</span>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
    {currentArticles.length===0 &&
      <Card className="w-full max-w-2xl mx-auto bg-white ">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">No Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              There are currently no Publications. Our team is working on publishing research papers for the future.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-sm text-yellow-700">
                  Stay tuned for updates on our upcoming publications. We will be adding new publications soon!
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                In the meantime, you can:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {/* <li>Check out our past event recordings</li> */}
                <li>Subscribe to our newsletter for blog notifications</li>
                <li>Follow us on social media for the latest updates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>}
      {currentArticles.map(content=>
      <div key={content.id} className="blog-card flex flex-col items-center md:items-start cursor-pointer">
        <div className="img-container rounded-md overflow-hidden w-3/4 sm:w-1/2 mx-auto md:w-full lg:h-48">
          {content.files.find(file=>file.fileType==="image") && <img src={content.files.find(file=>file.fileType==="image")?.url} className="object-cover" alt="headerImage" />}
        </div>
        <Link href={`/publications/${content.slug}`}  className="mt-4 text-xl font-semibold dark:text-gray-50">{content.title}</Link>
        <p className="my-4 text-sm font-light max-w-md dark:text-gray-50 line-clamp-2">{content.abstract}</p>
        <small className="text-gray-500 dark:text-gray-50">{content.publicationDate?.toDateString()}</small>
      </div>
    )}
    </div>
</div>
        <div className="mt-12 flex justify-center">
          <Link className="underline text-xl text-blue-400" href={'/publications'} >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props:any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
