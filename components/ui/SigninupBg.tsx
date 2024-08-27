'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function SignupBg({children}:{children:React.ReactNode}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
      >
        {/* Animated DNA Helix */}
        <motion.path
          d="M100,300 Q150,200 200,300 T300,300 T400,300 T500,300"
          fill="none"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M100,320 Q150,220 200,320 T300,320 T400,320 T500,320"
          fill="none"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={0.5}
        />
        
        {/* Animated Microscope */}
        <motion.path
          d="M700,800 L750,700 L800,800 Z"
          fill="rgba(99, 102, 241, 0.4)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={1}
        />
        <motion.rect
          x="735" y="680" width="30" height="100"
          fill="rgba(99, 102, 241, 0.4)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={1.5}
        />
        <motion.circle
          cx="750" cy="660" r="20"
          fill="rgba(99, 102, 241, 0.4)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={2}
        />
        
        {/* Animated Flask */}
        <motion.path
          d="M300,700 Q300,750 350,800 L450,800 Q500,750 500,700 L450,600 L350,600 Z"
          fill="none"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={2.5}
        />
        <motion.line
          x1="350" y1="650" x2="450" y2="650"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={3}
        />
        
        {/* Animated Atom */}
        <motion.circle
          cx="800" cy="200" r="60"
          fill="none"
          stroke="rgba(99, 102, 241, 0.4)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={3.5}
        />
        <motion.ellipse
          cx="800" cy="200" rx="100" ry="30"
          fill="none"
          stroke="rgba(99, 102, 241, 0.4)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={4}
        />
        <motion.ellipse
          cx="800" cy="200" rx="100" ry="30"
          fill="none"
          stroke="rgba(99, 102, 241, 0.4)"
          strokeWidth="4"
          transform="rotate(60 800 200)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={4.5}
        />
        <motion.ellipse
          cx="800" cy="200" rx="100" ry="30"
          fill="none"
          stroke="rgba(99, 102, 241, 0.4)"
          strokeWidth="4"
          transform="rotate(-60 800 200)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={5}
        />
        
        {/* Animated Pulse Line */}
        <motion.path
          d="M50,500 L200,500 L250,400 L300,600 L350,500 L1000,500"
          fill="none"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="4"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={5.5}
        />
        
        {/* New Elements */}
        
        {/* Animated Neuron */}
        <motion.path
          d="M100,100 C150,50 200,150 250,100 S300,50 350,100 S400,150 450,100"
          fill="none"
          stroke="rgba(139, 92, 246, 0.4)"
          strokeWidth="3"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          custom={6}
        />
        <motion.circle cx="100" cy="100" r="10" fill="rgba(139, 92, 246, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={6.5} />
        <motion.circle cx="250" cy="100" r="10" fill="rgba(139, 92, 246, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={7} />
        <motion.circle cx="450" cy="100" r="10" fill="rgba(139, 92, 246, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={7.5} />
        
        {/* Animated Molecule */}
        <motion.circle cx="600" cy="400" r="30" fill="rgba(167, 139, 250, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={8} />
        <motion.circle cx="660" cy="460" r="20" fill="rgba(167, 139, 250, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={8.5} />
        <motion.circle cx="540" cy="460" r="20" fill="rgba(167, 139, 250, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={9} />
        <motion.line x1="600" y1="400" x2="660" y2="460" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="3" variants={drawVariants} initial="hidden" animate={controls} custom={9.5} />
        <motion.line x1="600" y1="400" x2="540" y2="460" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="3" variants={drawVariants} initial="hidden" animate={controls} custom={10} />
        
        {/* Animated Petri Dish */}
        <motion.circle cx="200" cy="800" r="80" fill="none" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="3" variants={drawVariants} initial="hidden" animate={controls} custom={10.5} />
        <motion.circle cx="180" cy="780" r="10" fill="rgba(129, 140, 248, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={11} />
        <motion.circle cx="220" cy="810" r="15" fill="rgba(129, 140, 248, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={11.5} />
        <motion.circle cx="190" cy="830" r="8" fill="rgba(129, 140, 248, 0.4)" variants={drawVariants} initial="hidden" animate={controls} custom={12} />
      </svg>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: { duration: 10 + Math.random() * 20, repeat: Infinity, repeatType: 'reverse' }
            }}
          />
        ))}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}