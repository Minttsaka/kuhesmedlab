import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRightIcon, BarChartIcon, UsersIcon, ClipboardIcon } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

const featuredSurveys = [
  {
    id: 1,
    img:"https://optinmonster.com/wp-content/uploads/2019/11/survey-best-practices.png",
    title: "Customer Satisfaction",
    description: "Gain insights into your customers' experiences and preferences.",
    category: "Customer Research",
  },
  {
    id: 2,
    img:"https://optinmonster.com/wp-content/uploads/2019/11/survey-best-practices.png",
    title: "Employee Engagement",
    description: "Measure and improve employee satisfaction and productivity.",
    category: "HR Management",
  },
  {
    id: 3,
    img:"https://optinmonster.com/wp-content/uploads/2019/11/survey-best-practices.png",
    title: "Market Research",
    description: "Analyze market trends and consumer behavior for strategic decisions.",
    category: "HR Management",
  },
]

export default async function LandingSurvey() {

  const forms = await prisma.surveyForm.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Unlock Insights with Powerful Surveys
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Create, distribute, and analyze surveys with ease. Get the data you need to make informed decisions.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                 <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                        <span>
                        Get Started
                        </span>
                        <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Featured Surveys</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {forms.map((survey) => (
                <Card key={survey.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="p-0">
                    <img
                      alt={survey.title}
                      className="object-cover w-full h-60"
                      height={240}
                      src={'https://optinmonster.com/wp-content/uploads/2019/11/survey-best-practices.png'}
                      style={{
                        aspectRatio: "400/240",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle>{survey.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{survey.description}</p>
                    <Badge className="mt-4" variant="secondary">
                    HR Management
                    </Badge>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link className='w-full' href={`/survey/${survey.id}`}>
                      <Button className="w-full">
                        Start Survey
                        <ChevronRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Survey Platform?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers intuitive design, powerful analytics, and seamless integration. Create surveys that engage your audience and provide actionable insights.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start space-x-4">
                  <UsersIcon className="mt-1 h-6 w-6 text-blue-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">User-Friendly Interface</h3>
                    <p className="text-gray-500">
                      Easily create and customize surveys with our drag-and-drop builder. No coding skills required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChartIcon className="mt-1 h-6 w-6 text-green-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                    <p className="text-gray-500">
                      Gain deep insights with our powerful analytics tools. Visualize data and uncover trends effortlessly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ClipboardIcon className="mt-1 h-6 w-6 text-purple-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Customizable Templates</h3>
                    <p className="text-gray-500">
                      Choose from a wide range of professionally designed templates or create your own from scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of organizations using our survey platform to gather insights and make data-driven decisions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                        <span>
                        Sign up
                        </span>
                        <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-primary" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}