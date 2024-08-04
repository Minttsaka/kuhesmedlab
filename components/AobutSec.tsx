import React from 'react'
import { Button } from './ui/button'

export default function AobutSec() {
  return (
    <div className='relative min-h-[50vh] mt-20  py-10 flex items-center bg-gray-100 md:bg-white'>
        <div className="hidden md:block absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#A3CCE5] skew-y-12 origin-bottom-right" />
        <div className="hidden md:block absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#A3CCE5] -skew-y-12 origin-top-right" />
        <div className="hidden md:block absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#A3CCE5] origin-bottom-right" />
      <div className='relative container mx-auto space-y-7 text-gray-600'>
        <h2 className='text-3xl font-bold'>Our Objectives</h2>
        <div className='grid md:grid-cols-3 gap-10 mt-10 '>
            <div className='space-y-5 '>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>1</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Promote Research and Innovation</h3>
                <p className='text-gray-500'>
                We aim to drive progress in medical laboratory science by promoting research and innovation. This involves encouraging novel approaches, exploring new technologies, and supporting cutting-edge projects that address pressing health challenges in Malawi.

                </p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>2</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Provide a Platform for Knowledge Sharing and Collaboration</h3>
                <p className='text-gray-500'>Our platform facilitates the exchange of ideas and expertise among medical laboratory professionals and students. By sharing knowledge and experiences, we can accelerate research, improve practices, and enhance collaboration to achieve common goals.</p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>3</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Foster a Community of Medical Laboratory Professionals and Students</h3>
                <p className='text-gray-500'>
                We strive to build a vibrant community of medical laboratory professionals and students who share a passion for research, innovation, and excellence. By fostering connections and networking opportunities, we can leverage collective expertise to drive progress in the field.
                </p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>4</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Develop Affordable and Effective Therapeutic Techniques and Vaccines</h3>
                <p className='text-gray-500'>
                Our objective is to develop therapeutic techniques and vaccines that are both affordable and effective, addressing the health needs of Malawians. We focus on innovative solutions that can be scaled up for widespread impact.
                </p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>5</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Combat ESKAPE Pathogens and Other Diseases</h3>
                <p className='text-gray-500'>
                We are committed to combating ESKAPE pathogens and other diseases prevalent in Malawi through research, innovation, and collaboration. Our efforts aim to reduce the burden of these diseases and improve public health outcomes.
                </p>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full p-2'>6</div>
          <h3 className='font-bold tracking-[-0.015em] text-balance text-xl'>Promote Evidence-Based Practice</h3>
                <p className='text-gray-500'>
                We promote evidence-based practice in medical laboratory science to ensure the highest standards of quality and accuracy. By adopting best practices and staying updated with the latest research, we can deliver reliable and effective healthcare solutions.
                </p>
            </div>

        </div>
        
      </div>

      
    </div>
  )
}
