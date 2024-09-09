'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot } from 'lucide-react'
import Link from 'next/link'

const GridLine = ({ x, y, isVertical }: { x: number; y: number; isVertical: boolean }) => (
  <motion.line
    x1={isVertical ? x : 0}
    y1={isVertical ? 0 : y}
    x2={isVertical ? x : '100%'}
    y2={isVertical ? '100%' : y}
    stroke="rgba(255, 255, 255, 0.3)"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  />
)

const SnakePath = () => (
  <motion.path
    d="M0,10 Q25,10 25,35 T50,60 T75,85 T100,60"
    fill="none"
    stroke="rgba(255, 255, 255, 0.6)"
    strokeWidth="3"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  />
)

const FloatingBubble = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-white opacity-50"
    style={{
      width: Math.random() * 20 + 10,
      height: Math.random() * 20 + 10,
    }}
    initial={{ y: '100%', x: `${Math.random() * 100}%` }}
    animate={{ y: '-100%' }}
    transition={{
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      delay: delay,
      ease: 'linear',
    }}
  />
)

const bubbleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


const messages = [
  "Hello there! 👋 Welcome to Kuhesmedlab, a research leader!",
  "I'm your friendly AI assistant, here to make your day brighter! ☀️",
  "Feel free to ask me anything - I'm full of helpful tips!",
  "Ready to start our delightful journey together? Let's sign in!"
]

export default function AdorableAIChatWelcome({user}:{user:string}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [chatMessages, setChatMessages] = useState<string[]>([])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1)
      }, 3000)
      return () => clearTimeout(timer)
    }

    return () => window.removeEventListener('resize', updateDimensions)
  }, [currentMessageIndex])

  const gridSize = 50
  const horizontalLines = Math.ceil(dimensions.height / gridSize)
  const verticalLines = Math.ceil(dimensions.width / gridSize)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200" ref={containerRef}>
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(horizontalLines)].map((_, i) => (
          <GridLine key={`h${i}`} x={0} y={i * gridSize} isVertical={false} />
        ))}
        {[...Array(verticalLines)].map((_, i) => (
          <GridLine key={`v${i}`} x={i * gridSize} y={0} isVertical={true} />
        ))}
        <motion.g
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SnakePath />
        </motion.g>
      </svg>

      {[...Array(10)].map((_, i) => (
        <FloatingBubble key={i} delay={i * 0.5} />
      ))}

      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <Card className="w-full max-w-md bg-opacity-80 backdrop-blur-md">
          <CardContent className="flex flex-col items-start space-y-4 p-6">
            <motion.div
              className="w-16 h-16 text-6xl animate-first bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
                  👋
            </motion.div>
            {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
            <motion.div
              key={index}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              className="mb-4"
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg max-w-lg mx-auto relative">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                <p className="text-gray-800">{message}</p>
              </div>
            </motion.div>
          ))}
            {currentMessageIndex === messages.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-full mt-4"
              >
                <Link href={'/mw/dashboard'}>
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}