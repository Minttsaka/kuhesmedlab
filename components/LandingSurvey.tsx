import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRightIcon, BarChartIcon, UsersIcon, ClipboardIcon } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Avatar, AvatarImage } from './ui/avatar'

export default async function LandingSurvey() {

  const forms = await prisma.surveyForm.findMany({
    orderBy:{
      createdAt:"desc"
    },
    include:{
      survey:{
        include:{
          research:{
            include:{
              user:true
            }
          }
        }
      }
    }
  })
  return (
    <div className="flex flex-col min-h-screen">

      <main className="relative">
         <div className="relative bg-white  h-[70vh] flex items-center justify-center px-4 bg-gradient-to-br">
          <div className="relative">
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-0 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
            <h2 className="text-center max-w-4xl flex flex-col md:flex-row gap-3 mx-auto text-4xl font-bold  md:text-5xl lg:text-6xl">
            Unlock Insights with Powerful Surveys
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                AI Powered
              </span>
            </h2>
            <p className="mx-auto text-center max-w-[700px] text-gray-300 md:text-xl">
              Create, distribute, and analyze surveys with ease. Get the data you need to make informed decisions.
            </p>
          </div>
         
          <svg
          className="absolute bottom-0 left-0 w-full text-gray-100"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        </div>

        <section className="w-full pb-12  bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Featured Surveys</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {forms.map((survey) => (
                <Card key={survey.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="p-0 relative">
                    <img
                      alt={survey.title}
                      className="object-cover w-full h-60"
                      height={240}
                      src={survey.img! ?? 'https://optinmonster.com/wp-content/uploads/2019/11/survey-best-practices.png'}
                      style={{
                        aspectRatio: "400/240",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <div className='absolute bottom-1 left-1'>
                      <Avatar>
                        <AvatarImage src={survey.survey.research.user.image!} className='object-cover'/>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle>{survey.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{survey.description}</p>
                    <Badge className="mt-4" variant="secondary">
                    {survey.survey.research.user.role}
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
        <section className="w-full bg-white py-12 md:py-24 lg:py-32">
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
                    <h3 className="text-xl font-bold">AI Powered</h3>
                    <p className="text-gray-500">
                      Generate unbiased questions using ai assistance.
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
                <Link href={'/register'}>
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
                  </Link>
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
    </div>
  )
}