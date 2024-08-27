"use client"


import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Wave = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 opacity-50"
    style={{
      background: 'linear-gradient(180deg, #4338ca 0%, #3b82f6 100%)',
    }}
    initial={{ y: '100%' }}
    animate={{
      y: ['-5%', '-15%', '-5%'],
    }}
    transition={{
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
      delay,
    }}
  />
)

export default function HandAnimation() {
  const [isWaving, setIsWaving] = useState(false)

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving((prev) => !prev)
    }, 1000)

    return () => clearInterval(waveInterval)
  }, [])

  return (
    <div className="flex items-center justify-center relative ">
      <div className="absolute rounded-full -z-0 inset-0 overflow-hidden">
        <Wave delay={0} />
        <Wave delay={1} />
        <Wave delay={2} />
      </div>
      <div 
        className={`text-6xl  animate-first`}
        aria-hidden="true"
      >
        👋
      </div>
      <span className="sr-only">Animated waving hand icon</span>
    </div>
  )
}