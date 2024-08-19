import React, { ReactNode } from 'react'
import { Upload, Download, BookOpen } from "lucide-react"



export default function BestThreeCards() {

  const iconSize = 80
  const iconColor = "white"

  const IconWrapper = ({ children, gradient }:{ children:ReactNode, gradient:string}) => (
    <div 
      className="p-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      style={{
        background: gradient,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(255, 255, 255, 0.2)'
      }}
    >
      {children}
    </div>
  )

  
  return (
    <div className='relative px-5 md:px-0'>
        
        <div className='max-w-5xl min-h-screen mx-auto space-y-20'>
            
            <div className='grid md:grid-cols-2 gap-10 items-center relative '>
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

          <IconWrapper gradient="linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)">
        <Upload size={iconSize} color={iconColor} strokeWidth={1.5} />
      </IconWrapper>
            <div className='max-w-sm'>
                <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                Upload research papers to KUHESMEDLAB DB
                </h2>
                <p className='text-gray-500 font-light'>
                Simplify and accelerate the sharing of medical laboratory research, uploading papers in a centralized
                 hub to facilitate collaboration, innovation, and improved healthcare outcomes in Malawi and beyond.
                </p>
            </div>
            </div>

            <div className='grid md:grid-cols-2 md:hidden gap-10 items-center relative '>
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

          <IconWrapper gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
            <Download size={iconSize} color={iconColor} strokeWidth={1.5} />
          </IconWrapper>
            <div className='max-w-sm'>
                <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-purple-500'>
                Download research papers from KUHESMEDLAB DB
                </h2>
                <p className='text-gray-500 font-light'>
                Explore a vast collection of medical laboratory research,
                 downloading papers to stay updated on the latest findings, advancements,
                and best practices in enhancing healthcare outcomes.
                  </p>
            </div>
            </div>

            <div className='hidden md:grid md:grid-cols-2 gap-10 items-center relative'>
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
            <div className='max-w-sm'>
                <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-300 to-purple-500'>
                Download research papers from KUHESMEDLAB DB
                </h2>
                <p className='text-gray-500 font-light'>
                Explore a vast collection of medical laboratory research, downloading papers to stay updated on the latest findings, advancements,
                 and best practices in enhancing healthcare outcomes.
                </p>
            </div>
            <IconWrapper gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
              <Download size={iconSize} color={iconColor} strokeWidth={1.5} />
            </IconWrapper>
            
            </div>

            <div className='grid md:grid-cols-2 gap-10 items-center relative'>
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

          <IconWrapper gradient="linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)">
            <BookOpen size={iconSize} color={iconColor} strokeWidth={1.5} />
          </IconWrapper>
            <div className='max-w-sm'>
                <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-purple-500'>
                Learn from KUHESMEDLAB Site
                </h2>
                <p className='text-gray-500 font-light'>
                Enhance your knowledge and skills in medical laboratory science, accessing
                 a comprehensive repository of research papers, articles, and resources 
                to stay updated on the latest techniques, methodologies, and innovations in the field.
                </p>
            </div>
            </div>
            

        </div>
        
       
    </div>
  )
}
