import React from 'react'

export default function BlackBg() {
  return (
    <div className='relative min-h-screen bg-gray-100'>
      <div className='absolute inset-x-0 -skew-y-12 top-40 bottom-0 h-full bg-black origin-top-left ' />
      <div className="container mx-auto z-10 absolute inset-x-0 top-0">
          <div className="my-10 grid md:grid-cols-2">
            <div>
                <p
                    
                    className=" bg-[purple] w-fit rounded-3xl text-gray-100 text-xs font-bold p-2"
                >
                    hidden profession
                </p>
                <h2
                    
                    className="text-4xl md:text-6xl font-bold max-w-lg text-white"
                >
                    Exploring the Hidden Professions for Nurses
                </h2>
                <p
                    
                    className=" text-slate-300 max-w-sm mt-10"
                >
                Leveraging their nursing expertise and advanced training, forensic nurses work closely with law enforcement and the judicial process to ensure that medical findings are properly documented and admissible in court.
              </p>
            </div>
            <div>
            <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </div>
            
            </div>
            <div className='grid md:grid-cols-4 gap-2 text-white'>
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
