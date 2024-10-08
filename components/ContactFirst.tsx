'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Phone, MapPin, Microscope, TrendingUp, Activity, Award, LucideProps } from 'lucide-react'
import axios from 'axios'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

const AnimatedSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M10,50 Q50,10 90,50 T90,50"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
    <motion.path
      d="M20,20 L80,80 M80,20 L20,80"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </svg>
)

const FadeInSection = ({ children }:{children:React.ReactNode}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

const CompanyFeature = ({ icon: Icon, title, description }:{ icon:React.FC<LucideProps> , title:string, description:string }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="bg-indigo-100 p-3 rounded-full mb-4">
      <Icon className="h-8 w-8 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-indigo-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function ContactFirst() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {toast} = useToast()
  const router =useRouter()
  const handleSubmit = async() => {

    try {
      setIsSubmitting(true)
      await axios.post('/api/notification',
      { 
        name, 
        comments:message,
        email,
        feedbackType:"GENERAL"
      }
    )
    toast({
      title:'Success',
      description:'Successfully sent the feedback'
    })
    } catch (error) {

      console.log(error)
      
    } finally{
      setIsSubmitting(false)
      router.refresh()
    }
      
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <AnimatedSVG />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <FadeInSection>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center mb-8 text-indigo-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Kuhesmedlab
          </motion.h1>
        </FadeInSection>
        <FadeInSection>
          <motion.p 
            className="text-xl md:text-2xl text-center mb-16 text-indigo-700"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering medical diagnostics for a healthier tomorrow
          </motion.p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <FadeInSection>
            <div className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Send us a message</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button  onClick={handleSubmit} type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-6" disabled={isSubmitting}>
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <Mail className="h-8 w-8 text-indigo-600 mr-4" />
                    <span className="text-lg">info@kuhesmedlab.com</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-8 w-8 text-indigo-600 mr-4" />
                    <span className="text-lg">+256998970102</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-8 w-8 text-indigo-600 mr-4" />
                    <span className="text-lg">kuhes , blantyre</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                <ul className="space-y-4 text-lg">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
             
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">About Kuhesmedlab</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <CompanyFeature
                icon={Microscope}
                title="Cutting-edge Technology"
                description="Our state-of-the-art equipment ensures accurate and timely results for all your medical testing needs."
              />
              <CompanyFeature
                icon={TrendingUp}
                title="Comprehensive Testing"
                description="From routine check-ups to specialized diagnostics, we offer a wide range of medical laboratory services."
              />
              <CompanyFeature
                icon={Activity}
                title="Rapid Turnaround"
                description="We prioritize quick and efficient processing, providing fast results without compromising on quality."
              />
              <CompanyFeature
                icon={Award}
                title="Accredited Excellence"
                description="Our lab is nationally accredited, adhering to the highest standards of quality research."
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-indigo-900">Why Choose Kuhesmedlab?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team at KUHESMedLab is comprised of highly trained professionals with extensive
              experience in the medical laboratory field and well competent tech experts.
            </p>
          </div>
        </FadeInSection>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedLabDrawing />
          <AnimatedMicroscopeDrawing />
          <AnimatedDNADrawing />
        </div>
    </div>
  )
}

function AnimatedLabDrawing() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg className="w-full h-48" viewBox="0 0 200 100">
      <defs>
        <linearGradient id="beakerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M70,90 L90,20 L110,20 L130,90 Z" fill="none" stroke="#3B82F6" strokeWidth="2" />
      <rect x="90" y="20" width="20" height="70" fill="url(#beakerGradient)">
        <animate attributeName="height" values="0;70;0" dur="4s" repeatCount="indefinite" />
      </rect>
      <circle cx="100" cy="15" r="5" fill="#3B82F6" />
    </svg>
  )
}

function AnimatedMicroscopeDrawing() {
  return (
    <svg className="w-full h-48" viewBox="0 0 200 100">
      <path d="M90,90 L110,90 L110,70 L90,70 Z" fill="#3B82F6" />
      <path d="M95,70 L105,70 L105,50 L95,50 Z" fill="#3B82F6" />
      <circle cx="100" cy="45" r="10" fill="none" stroke="#3B82F6" strokeWidth="2">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M85,90 L115,90" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  )
}

function AnimatedDNADrawing() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 20)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg className="w-full h-48" viewBox="0 0 200 100">
      <path
        d={`M50,${50 + offset} Q100,20 150,${50 + offset} T250,${50 + offset}`}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <path
        d={`M50,${70 - offset} Q100,100 150,${70 - offset} T250,${70 - offset}`}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      {[0, 20, 40, 60, 80].map((x) => (
        <line
          key={x}
          x1={60 + x}
          y1={50 + offset + Math.sin((x + offset) / 20) * 20}
          x2={60 + x}
          y2={70 - offset + Math.sin((x + offset) / 20) * 20}
          stroke="#3B82F6"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}