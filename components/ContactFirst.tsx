'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Phone, MapPin, Microscope, TrendingUp, Activity, Award, LucideProps } from 'lucide-react'

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

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
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
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl">
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
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-6">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
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
                    <span className="text-lg">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-8 w-8 text-indigo-600 mr-4" />
                    <span className="text-lg">123 Medical Center Dr, Health City, HC 12345</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Business Hours</h3>
                <ul className="space-y-4 text-lg">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <motion.div
                className="bg-indigo-600 text-white p-8 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
                <p className="text-lg mb-4">
                  For urgent medical tests and results, please call our 24/7 emergency hotline:
                </p>
                <p className="text-3xl font-bold">+1 (555) 911-LABS</p>
              </motion.div>
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
                description="Our lab is nationally accredited, adhering to the highest standards of quality and patient care."
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-indigo-900">Why Choose Kuhesmedlab?</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Kuhesmedlab, we are committed to advancing healthcare through precision diagnostics. Our team of expert pathologists, technicians, and medical professionals work tirelessly to provide you with accurate, timely, and comprehensive medical laboratory services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We understand that behind every test is a person anxiously awaiting results. Thats why we combine our technical expertise with a compassionate approach, ensuring that you receive not just numbers, but clarity and peace of mind.
            </p>
            <p className="text-lg text-gray-700">
              From routine blood work to complex genetic testing, Kuhesmedlab is your trusted partner in health. Experience the difference of a lab that cares as much about your health as you do.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}