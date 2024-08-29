"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Plus } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  const [particles, setParticles] = useState<
  {
    id: number,
    x: number,
    y: number,
    size: number,
  }[]>([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
      }))
    }

    setParticles(generateParticles())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-200 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: ['-20%', '20%'],
              y: ['-20%', '20%'],
            }}
            transition={{
              x: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
              y: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-md w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <AlertCircle className="w-10 h-10 text-blue-500" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">Request not found</h2>
          <p className="text-center text-gray-600 mb-6">
            We are still working on this page.
          </p>
          <Link href={'/mw/dashboard'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center"
            >
              Go back
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}