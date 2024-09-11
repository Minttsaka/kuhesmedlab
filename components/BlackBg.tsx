

'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'

const StatCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-none p-6 rounded-xl">
    <motion.h3 
      className="text-3xl font-bold text-blue-300 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {description}
    </motion.p>
  </Card>
)

export default function BlackBg() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-blue-300 bg-blue-900 bg-opacity-50 rounded-full uppercase tracking-wide">
            AI for Data Analysis
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            AI-Driven Discovery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Unleash the power of AI to transform research, analyze complex data, and uncover groundbreaking insights in medical laboratory science.
          </p>
          <Link href={'/about/technology'}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Explore AI Solutions
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 }
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transforming Research with AI
            </h2>
            <p className="text-blue-100 mb-8">
              AI is the key to unlocking new possibilities. Analyze vast amounts of complex data, 
              identify hidden patterns, and uncover new research opportunities in medical laboratory science.
               With AI-driven discovery, we are accelerating the journey to life-changing innovations,
                empowering researchers to transform healthcare outcomes and improve lives in Malawi and beyond.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-30" />
            <img 
              src="/img/lady.jpeg" 
              alt="AI Data Analysis Visualization" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StatCard 
            title="60%+" 
            description="of medical decisions depend on laboratory test results, highlighting the critical role of accurate data analysis."
          />
          <StatCard 
            title="5k+" 
            description="global professionals are leveraging AI to provide comprehensive care and evidence collection for victims of crime, abuse, or trauma."
          />
          <StatCard 
            title="Vast" 
            description="amount of survey data are being analysed by ai."
          />
        </div>
      </div>
      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 5s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
