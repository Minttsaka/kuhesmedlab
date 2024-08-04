import React from 'react'
import { Badge } from './ui/badge'
import { Plus } from 'lucide-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

export default function ResearchFIrst() {
  return (
    <div className='relative'>
      <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
      <div className='relative container  mx-auto space-y-20 mt-40'>

       <h2 className='text-4xl md:text-7xl font-bold max-w-5xl mx-auto text-center'>Supercharge your research with ai built right in</h2>
       <div>
        <div className="stats-container">
          <div className="shadow-md bg-white max-w-2xl flex flex-col items-start sm:flex-row justify-between rounded-md mx-auto p-8">
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">100+</p>
              <span className="ml-2 mt-2">Components</span>
            </div>
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">25+</p>
              <span className="ml-2 mt-2">Categories</span>
            </div>
            <div className="flex flex-col my-2">
              <p className="text-6xl font-extrabold">15</p>
              <span className="ml-2 mt-2">Monthly Updates</span>
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
            <img className='rounded-3xl w-1/2' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn-VoXd2K3v9zpcST3ykSeSoMAFbS-qJ0g&s' />
           
            <Link href={'/mw/r-for-researcher'}
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
            <img className='rounded-3xl w-1/2' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn-VoXd2K3v9zpcST3ykSeSoMAFbS-qJ0g&s' />
           
            <button
            className="absolute bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
  
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </button>
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
            <img className='rounded-3xl w-1/2' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn-VoXd2K3v9zpcST3ykSeSoMAFbS-qJ0g&s' />
           
            <button
            className="absolute bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
  
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className='relative lg:min-h-[60vh] flex flex-col justify-between p-10 rounded-3xl bg-blue-100'>
            <div className='space-y-5'>
                <Badge className='text-gray-100 bg-gradient-to-r from-blue-400 to-purple-500 uppercase'>Chatbot</Badge>
                <h2 className='text-3xl max-w-md font-bold text-gray-800'>Smart Survey Solutions: Chatbot-Enabled Data Collection and Analysis</h2>
            </div>
            <img className='rounded-3xl w-1/2' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Dn-VoXd2K3v9zpcST3ykSeSoMAFbS-qJ0g&s' />
           
            <button
            className="absolute bottom-3 right-5 z-40 h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center disabled:opacity-50"
  
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
    </div>
   
  )
}
