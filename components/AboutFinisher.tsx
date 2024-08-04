import React from 'react'

export default function AboutFinisher() {
  return (
    <div className=''>
      <div className='container mx-auto space-y-5 items-center'>
      <div className='container text-start mx-auto rounded-xl  fex items-center  grainy'>
          <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
            <h2 className="text-center text-black text-opacity-70 text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em]">Ready to signup and join the us?</h2>
            <p className="mt-4  text-center mx-auto text-base/6 text-neutral-200">
                <span className='text-gray-500' >Get instant access to our state of the art projects.</span>
                
            </p>
            <div className="relative z-10 mx-auto flex justify-center mt-6">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Join Now
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
        </div>
    </div>

      </div>
      
      </div>
     
    </div>
  )
}
