import { Sun } from 'lucide-react'
import React from 'react'

export default function ResearchSideBar() {
  return (
    <div className='bg-white p-5 rounded-s-3xl'>
        <div className='flex flex-col gap-5'>
            <span className='p-2 h-7 w-7 flex items-center justify-center rounded-full shadow-xl shadow-slate-300'>
                <Sun />
            </span>

            <span className='p-2 h-7 w-7 flex items-center justify-center rounded-full shadow-xl shadow-slate-300'>
                <Sun />
            </span>

            <span className='p-2 h-7 w-7 flex items-center justify-center rounded-full shadow-xl shadow-slate-300'>
                <Sun />
            </span>

            <span className='p-2 h-7 w-7 flex items-center justify-center rounded-full shadow-xl shadow-slate-300'>
                <Sun />
            </span>

        </div>
      
    </div>
  )
}
