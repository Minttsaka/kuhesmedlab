"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { saveCollaboration } from "@/lib/actions"
import { useRouter } from "next/navigation"

export default function Invite({id}:{id:string}) {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  const router = useRouter()

  const saveCollbo = async()=>{
    
    try {
        const res = await saveCollaboration(id)
        router.push(`/mw/publication/${res}`)
    } catch (error) {
        
    }
  }

  useEffect(() => {
    saveCollbo()
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 3, 100)
        if (newProgress === 100) {
          clearInterval(timer)
        }
        return newProgress
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({
      rotate: progress * 3.6,
      transition: { duration: 0.5, ease: "easeInOut" },
    })
  }, [progress, controls])

  const particleCount = 50
  const particles = Array.from({ length: particleCount }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      initial={{
        x: "50%",
        y: "50%",
        scale: 0,
      }}
      animate={{
        x: `${50 + Math.cos((i / particleCount) * Math.PI * 2) * 40}%`,
        y: `${50 + Math.sin((i / particleCount) * Math.PI * 2) * 40}%`,
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: (i / particleCount) * 2,
      }}
    />
  ))

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        {particles}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            animate={controls}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Research Redirect in Progress
        </motion.h2>
        <motion.p
          className="text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Preparing to transport you through the research workspace...
        </motion.p>
      </div>
    </div>
  )
}