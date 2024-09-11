"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useToast } from './ui/use-toast'
import { subscribeNewsletter } from '@/lib/actions'
import { AvatarImage , Avatar} from './ui/avatar'

export default function Footer() {

  const [email, setEmail] = useState('');

  const {toast} = useToast()

  const handleSubscribe = async () => {
    try {
      const response = await subscribeNewsletter(email)
      if (response==="exist") {
        toast({
          title:'Newsletter',
          description:"The email is already subscribed"
        })
      } else {
        toast({
          title:'Newsletter',
          description:"Successfully subcribed"
        })
      }
    } catch (error) {
      toast({
        title:'Newsletter',
        description:"Failed to subscribe"
      })
    }
  };

  return (
    <footer className="relative text-xs bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
        <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-50"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <Avatar>
                <AvatarImage src='/img/official-logo.png' className="object-cover" />
            </Avatar>
              <span className="ml-2 text-xl font-bold tracking-wide text-blue-800 uppercase">
                Kuhesmedlab
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-xs text-blue-800">
              Empowering medical laboratory profession to drive innovation, collaboration,
               and excellence in healthcare using AI and technology through research, discovery, and data-driven solutions.
              </p>
              <p className="mt-4 text-xs text-blue-800">
              Advancing Medical Laboratory Science
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-blue-900">
                Research
              </p>
              <ul className="mt-2 space-y-2">
              <li>
                  <Link href="/publications" className="footer-link">Publications</Link>
                </li>
                <li>
                  <Link href="/research" className="footer-link">Research</Link>
                </li>
                <li>
                  <Link href="/survey" className="footer-link">Survey</Link>
                </li>
                <li>
                  <Link href="/mw/research" className="footer-link">Cloud Storage</Link>
                </li>
                <li>
                  <Link href="/about/technology" className="footer-link">Artificial Intelligence</Link>
                </li>
                <li>
                  <Link href="/mw/research" className="footer-link">Data Analysis</Link>
                </li>

              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-blue-900">Events</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/events#organizational-events" className="footer-link">Organization Events</Link>
                </li>
                <li>
                  <Link href="/events#general-events" className="footer-link">General Events</Link>
                </li>
                <li>
                  <Link href="/events#institutional-events" className="footer-link">Institutional Events</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-blue-900">Resources</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/blog" className="footer-link">Blog</Link>
                </li>
                <li>
                  <Link href="/#faq" className="footer-link">Faq</Link>
                </li>
                <li>
                  <Link href="/support" className="footer-link">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-blue-900">
                About
              </p>
              <ul className="mt-2 space-y-2">
              <li>
                  <Link href="/about" className="footer-link">About</Link>
                </li>
                <li>
                  <Link href="/about-us" className="footer-link">About us</Link>
                </li>
                
                <li>
                  <Link href="/about-us#team" className="footer-link">About Team</Link>
                </li>
                <li>
                  <Link href="/about/technology" className="footer-link">About Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div className="w-full bg-blue-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none md:mb-0">
              Subscribe to our newsletter
            </h2>
            <div className="flex items-center w-full md:w-auto">
              <Input
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow w-full h-12 px-4 mb-3 text-blue-900 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-blue-50 focus:border-blue-400 focus:outline-none focus:shadow-outline"
              />
              <Button onClick={handleSubscribe} type="button" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                Subscribe
              </Button>
            </div>
          </div>

        </div>
        <div className="container mx-auto flex flex-col justify-between pt-5 pb-10 border-t border-blue-200 sm:flex-row">
          <p className="text-xs text-blue-800">
            © Copyright 2024 Kuhesmedlab Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          @apply text-blue-700 transition-colors duration-300 hover:text-blue-500 relative;
        }
        .footer-link::after {
          content: '';
          @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out;
        }
        .footer-link:hover::after {
          @apply w-full;
        }
      `}</style>
    </footer>
  )
}