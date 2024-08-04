import React from 'react'

export default function BlackBg() {
  return (
    <div className='relative min-h-screen bg-gray-100'>
      <div className='absolute inset-x-0 skew-y-12 top-40 bottom-0 h-full bg-black origin-bottom-right ' />
      <div className="container mx-auto z-10 md:absolute inset-x-0 top-0">
          <div className="relative w-fit mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-gradient-to-r from-blue-300 to-purple-400 text-white rounded-full px-4 py-2">
                <span>AI for data analysis
                </span>
              </div>
          <div className="relative my-10 grid md:grid-cols-2 gap-5">
          
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
              <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
               
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
