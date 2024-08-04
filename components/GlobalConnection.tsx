"use client"

import React from 'react'
import { motion } from "framer-motion";
import { GlobeDemo } from './Globe';

export default function GlobalConnection() {
  return (
    <div className='relative min-h-screen'>
      <div className=' -skew-y-12  h-[30rem] bg-[#194866] origin-top-left ' />
      <div className='absolute inset-x-0 top-16   h-[30rem] bg-[#194866] origin-top-left ' />
      <div className='   h-[25rem] bg-[#194866] origin-top-left ' />
      <div className="container mx-auto z-10 absolute inset-x-0 -top-36">
          <div className="my-20">
          <div className="w-fit mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-gradient-to-r from-blue-300 to-purple-400 text-white rounded-full px-4 py-2">
                <span>Global connection
                </span>
              </div>
           
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:  1,
                }}
                className="text-4xl md:text-6xl font-bold max-w-lg text-white"
              >
               Unifying Healthcare: A Global Platform for Collaboration
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:  1,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                The world of medicine is constantly evolving, and groundbreaking discoveries often happen in silos. We offer a massive network for the medical community, connecting researchers, doctors, nurses, and specialists to share knowledge, best practices, and real-world experiences.
              </motion.p>
            </div>
            <motion.div className='grid md:grid-cols-4 gap-2 text-white'>
              <div className='border-s border-[blue] pl-5'>
                <motion.h1 className='text-2xl font-bold'>
                  500+
                </motion.h1>
                <motion.p className='max-w-sm'>
                  Researchers Connected to Advance Their Skills. 
                </motion.p>
              </div>
              <div className='border-s border-[blue] pl-5'>
                <motion.h1 className='text-2xl font-bold'>
                  500M+
                </motion.h1>
                <motion.p className='max-w-sm'>
                Students Unveil Their Research Findings and Save the Nation
                </motion.p>
              </div>
              <div className='border-s border-[blue] pl-5'>
                <motion.h1 className='text-2xl font-bold '>
                  20k+
                </motion.h1>
                <motion.p className='max-w-sm'>
                Healthcare providers and researchers working together to find cures
                </motion.p>
              </div>

            </motion.div>
        </div>
        <div className='absolute top-0 inset-x-0'>
          <GlobeDemo />   
        </div>
         
    </div>
  )
}
