import React, { ReactNode } from 'react'
import { Badge } from './ui/badge'
import { Plus } from 'lucide-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { SearchIcon, ClipboardListIcon, BarChart2Icon, MessageCircleIcon } from "lucide-react"

export default function ResearchFIrst({researchNo, downloadTrend, citationTrend}:{researchNo:number, downloadTrend:number, citationTrend:number}) {

  const iconSize = 80
  const iconColor = "white"

  const IconWrapper = ({ children, gradient }:{children:ReactNode,gradient:string}) => (
    <div 
      className="w-fit p-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      style={{
        background: gradient,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(255, 255, 255, 0.2)'
      }}
    >
      {children}
    </div>
  )
  return (
    <div className='relative'>
      <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
      <div className='relative container  mx-auto space-y-20 mt-40'>

       <h2 className='text-4xl md:text-7xl font-bold max-w-5xl mx-auto text-center'>Supercharge your research with ai built right in</h2>
       <div>
        <div className="stats-container">
          <div className="shadow-md bg-white max-w-2xl flex flex-col items-start sm:flex-row justify-between rounded-md mx-auto p-8">
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">{researchNo < 1 ? researchNo :` ${researchNo - 1}+`}</p>
              <span className="ml-2 mt-2">Research papers</span>
            </div>
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">{downloadTrend < 1 ? downloadTrend :` ${downloadTrend - 1}+`}</p>
              <span className="ml-2 mt-2">Downloads</span>
            </div>
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">{citationTrend < 1 ? citationTrend :` ${citationTrend - 1}+`}</p>
              <span className="ml-2 mt-2">Citations</span>
            </div>
          </div>
        </div>
      </div>
     
          
      <div className='relative grid md:grid-cols-2 gap-10'>
        <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
        <div className='relative lg:min-h-[60vh] flex flex-col justify-between p-10 rounded-3xl bg-blue-100'>
            <div className='space-y-5'>
                <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Research</Badge>
                <h2 className='text-3xl max-w-md font-bold text-gray-800'>
                  Unlock Exceptional Research Opportunities with Kuhesmedlab
                  Powered by AI
                  </h2>
            </div>
            <IconWrapper  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <SearchIcon size={iconSize} color={iconColor} strokeWidth={1.5} />
        </IconWrapper>
           
            <Link href={'/mw/research'}
              className="absolute hover:bg-blue-300 bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
    
            >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </Link>
        </div>

        <div className='relative lg:min-h-[60vh] flex flex-col justify-between p-10 rounded-3xl bg-blue-100'>
            <div className='space-y-5'>
                <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Survey</Badge>
                <h2 className='text-3xl max-w-md font-bold text-gray-800'>Contribute to Medical Laboratory Science: Participate in Survey</h2>
            </div>
            <IconWrapper  gradient="linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)">
          <ClipboardListIcon size={iconSize} color={iconColor} strokeWidth={1.5} />
        </IconWrapper>
           
            <Link href={'/survey'}
              className="absolute hover:bg-blue-300 bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
    
            >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </Link>
        </div>

        <div className='relative lg:min-h-[60vh] flex flex-col justify-between p-10 rounded-3xl bg-blue-100'>
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
          
            <div className='space-y-5'>
                <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Data Analysis</Badge>
                <h2 className='text-3xl max-w-md font-bold text-gray-800'>Unlocking Insights: Data Analysis in Survey and Research</h2>
            </div>
            <IconWrapper gradient="linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)">
              <BarChart2Icon size={iconSize} color={iconColor} strokeWidth={1.5} />
            </IconWrapper>
           
            <Link href={'/mw/research'}
              className="absolute hover:bg-blue-300 bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
    
            >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </Link>
        </div>

        <div className='relative lg:min-h-[60vh] flex flex-col justify-between p-10 rounded-3xl bg-blue-100'>
            <div className='space-y-5'>
                <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Chatbot</Badge>
                <h2 className='text-3xl max-w-md font-bold text-gray-800'>Smart Support from Kuhesmedlab ai chatbot.</h2>
            </div>
            <IconWrapper  gradient="linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)">
          <MessageCircleIcon size={iconSize} color={iconColor} strokeWidth={1.5} />
        </IconWrapper>
           
            <Link href={'/mw/dashboard'}
              className="absolute hover:bg-blue-300 bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
    
            >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </div>
    </div>
   
  )
}
