"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from 'lucide-react'

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      className="relative overflow-hidden mx-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl max-w-4xl "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-10 z-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 mix-blend-multiply"
          animate={{ 
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.5 : 1
          }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <motion.h2 
            className="text-3xl flex md:text-4xl font-extrabold text-white mb-2"
            variants={itemVariants}
          >
            Kuhesmedlab
            <motion.span 
            className="text-sm text-purple-100 mb-4"
            variants={itemVariants}
          >
            Research leader.
          </motion.span>
          </motion.h2>
          
          {/* <motion.div variants={itemVariants}>
            <Button 
              className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
              size="lg"
            >
              Try It Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div> */}
        </div>

        <motion.div 
          className="relative w-48 h-48"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="absolute w-full h-full">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF69B4" />
              </linearGradient>
            </defs>
            <path
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
            />
          </svg>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-24 h-24 text-white" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  )
}