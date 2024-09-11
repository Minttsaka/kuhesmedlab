'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import confetti from 'canvas-confetti'
import { subscribeNewsletter } from '@/lib/actions'

interface Particle {
  x: number
  y: number
  size: number
  color: string
}

export default function Newsletter() {
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [particles, setParticles] = useState<Particle[]>([])

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const response = await subscribeNewsletter(email)
        if (response==="exist") {
          toast({
            title:'Newsletter',
            description:"The email is already subscribed"
          })
        } else {
            toast({
                title: "You're In!",
                description: "Welcome to our newsletter!",
              })
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              })
              setOpen(false)
              setEmail('')
        }
      } catch (error) {
        toast({
          title:'Newsletter',
          description:"Failed to subscribe"
        })
      }
    
  }

  const createParticles = useCallback((): Particle[] => {
    return Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: ['#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 3)]
    }))
  }, [])

  useEffect(() => {
    setParticles(createParticles())
    const interval = setInterval(() => {
      setParticles(createParticles())
    }, 3000)
    return () => clearInterval(interval)
  }, [createParticles])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#2a2e7c] py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
            Do not miss events
            </span>
            <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-700 via-pink-700 to-red-700 rounded-lg shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative overflow-hidden "
            >
              {particles.map((particle, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full"
                  animate={{
                    x: [particle.x + '%', (particle.x + 10) % 100 + '%'],
                    y: [particle.y + '%', (particle.y + 10) % 100 + '%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                  style={{
                    width: particle.size,
                    height: particle.size,
                    backgroundColor: particle.color,
                  }}
                />
              ))}
              <div className="relative z-10 p-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
                    Join the Event Ever!
                  </DialogTitle>
                  <DialogDescription className="text-white text-lg">
                    Be part of something extraordinary. Enter your email and step into a world of wonder!
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-8 mb-4">
                  <img src="https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg" alt="Event illustration" className="w-32 h-32 rounded-2xl mx-auto animate-bounce" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 text-white bg-white bg-opacity-20 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-30 transition duration-300"
                      placeholder="your@email.com"
                      required
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-white rounded-full pointer-events-none"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                  >
                    Count Me In!
                  </Button>
                </form>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}