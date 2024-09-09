"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import confetti from 'canvas-confetti'
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from './ui/textarea'
import axios from 'axios'
import { z } from 'zod';
import { toast } from 'sonner'

const FormSchema = z.object({
  bio: z.string(),
  
});

type InputType = z.infer<typeof FormSchema>;

const messages = [
  "Hello there! 👋 I'm kuhesmedlab ai assistance, your adorable health companion!",
  "Welcome to Kuhesmedlab, where we make research fun and easy! 🌈",
  "💊 Get your first start by describing who you are. (Your Biography!)",
  "🏃‍♀️ Track your research, survey and More events!",
  "🍎 Learn , collaborate, and make your research journey more good for you!",
  "🎉 Are you excited to start your health adventure?",
  "Before we begin, let's get to know you better!",
  "Tell me about yourself, future health hero? 😊"
]

const bubbleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const characterVariants = {
  idle: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 2 } },
  excited: { rotate: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
}

export default function BioPractice() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [userName, setUserName] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo(0, scrollAreaRef.current.scrollHeight)
    }
  }, [currentMessageIndex])

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const router=useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {

    const {bio} = data
    const result = await axios.post("/api/bio", {
      bio
    });
    if (result.data==="success") {
      toast.success("Thank you.");
      router.refresh()
      return;
    }

    
  };

  return (
    <div className="flex fixed inset-0 flex-col justify-center items-center z-50 bg-opacity-80 bg-pink-100 ">
      <ScrollArea className=" pr-4" ref={scrollAreaRef}>
        <AnimatePresence>
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
        </AnimatePresence>
      </ScrollArea>
      {currentMessageIndex === messages.length - 1 && (
        <motion.form
          onSubmit={handleSubmit(onSubmit)} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 max-w-lg mx-auto w-full"
        >
          <Textarea
            placeholder="How do you describe yourself"
            {...register("bio")} 
            className="mb-2 w-full  bg-white border-2 border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          />
          <Button
          type='submit'
            onClick={handleConfetti}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            disabled={isSubmitting}
          >
            { isSubmitting ? <LoadingSpinner /> :'Lets Go! 🚀'}
          </Button>
        </motion.form>
      )}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
        body {
          font-family: 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  )
}

const LoadingSpinner: React.FC = () => {
  return (
    <svg
      className="animate-spin h-6 w-6 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );
};
