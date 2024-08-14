import React from 'react'

export default function CNBICards() {
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-2'>
            <div className='space-y-5 text-center'>
                <h2 className='font-bold text-[#985755]'>
                    Submit
                </h2>
                <p className='text-[#642a8f]'>Deposit data or manustrip into Kuhesmedlab database</p>
                <div className='flex justify-center'>
                    <img alt='' src='/svg/submit.svg' className='opacity-30' />
                </div>
                
            </div>

            <div className='space-y-5 text-center'>
                <h2 className='font-bold text-[#985755]'>
                    Download
                </h2>
                <p className='text-[#642a8f]'>Transfer cbin data to you computer.</p>
                <div className='flex justify-center'>
                    <img alt='' src='/svg/download.svg' className='opacity-30' />
                </div>
                
            </div>

            <div className='space-y-5 text-center'>
                <h2 className='font-bold text-[#985755]'>
                    Learn
                </h2>
                <p className='text-[#642a8f]'>Find help documents, attend classes, or watch tutorials.</p>
                <div className='flex justify-center'>
                    <img alt='' src='/svg/learn.svg' className='opacity-30' />
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
  )
}
