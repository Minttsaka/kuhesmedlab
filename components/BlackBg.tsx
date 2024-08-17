import React from 'react'

export default function BlackBg() {
  return (
    <div className='relative my-40'>
      <div className='absolute inset-x-0 skew-y-12 top-60 bottom-20 md:bottom-0 h-full bg-[#2a2e7c] origin-bottom-right ' />
      <div className='absolute inset-x-0  md:top-60 bottom-0 h-full bg-[#2a2e7c] origin-bottom-right ' />
      <div className="container mx-auto z-10 py-10 ">
          <div className="relative w-fit mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-gradient-to-r from-blue-300 to-purple-400 text-white rounded-full px-4 py-2">
                <span>AI for data analysis
                </span>
              </div>
          <div className="relative my-10 grid md:grid-cols-2 ">
          
              <div>
                <h2
                      
                      className="text-4xl md:text-6xl font-bold max-w-lg text-white"
                  >
                      AI-Driven Discovery, Transforming Research
                  </h2>
                  <p
                      
                      className=" text-slate-300 max-w-sm mt-10"
                  >
                  AI is the key to unlocking new possibilities. Imagine being able to analyze vast amounts of complex data, identify hidden patterns, and uncover new research opportunities in medical laboratory science. With AI-driven discovery, the journey to life-changing innovations has never been faster, empowering researchers to transform healthcare outcomes and improve lives in Malawi and beyond.
                </p>

              </div>
              <img src='/img/lady.jpeg' className='rounded-2xl w-full h-full' alt='this is good' />
               
            </div>
            <div className='relative grid md:grid-cols-4 gap-2 text-white'>
              <div className='border-s border-[blue] pl-5'>
                <h1 className='text-2xl font-bold'>
                  60%+
                </h1>
                <p className='max-w-sm'>
                of medical decisions depend
                on laboratory test results.
                </p>
              </div>
              <div className='border-s border-[blue] pl-5'>
                <h1 className='text-2xl font-bold'>
                  5k+
                </h1>
                <p className='max-w-sm'>
                 are learning provide comprehensive care and evidence collection for victims of crime, abuse, or trauma
                </p>
              </div>
              <div className='border-s border-[blue] pl-5'>
                <h1 className='text-2xl font-bold '>
                  100+
                </h1>
                <p className='max-w-sm'>
                  started their own businesses to provide specialized services, develop new products, or offer consulting expertise
                </p>
              </div>

            </div>
        </div>       
    </div>
  )
}
