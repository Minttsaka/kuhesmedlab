'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { IconBrandWhatsapp } from '@tabler/icons-react'

interface ShareButtonProps {
  url: string
  title: string
  description: string
}

const socialPlatforms = [
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' },
  { name: 'Twitter', icon: Twitter, color: 'bg-sky-500', shareUrl: 'https://twitter.com/intent/tweet?url=' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
  { name: 'Whatsapp', icon: IconBrandWhatsapp, color: 'bg-green-600', shareUrl: `https://wa.me/?text=` },
]

export default function FunctionalShareButton({ url, title, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  React.useEffect(() => {
    setCanNativeShare('share' in navigator)
  }, [])

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2,
      }
    },
  }

  const platformVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  }

  const handleShare = async (platform: string) => {
    const shareData = { url, title, text: description }

    if (platform === 'Native' && canNativeShare) {
      try {
        await navigator.share(shareData)
        console.log('Shared successfully')
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      const platformData = socialPlatforms.find(p => p.name === platform)
      if (platformData && platformData.shareUrl) {
        const shareUrl = `${platformData.shareUrl}${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
        window.open(shareUrl, '_blank', 'noopener,noreferrer')
      } else {
        console.log(`Sharing on ${platform} is not supported`)
      }
    }
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-4 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-80 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">Share on Social Media</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.button
                    key={platform.name}
                    variants={platformVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onClick={() => handleShare(platform.name)}
                    className={`${platform.color} text-white p-3 rounded-lg flex flex-col items-center justify-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${platform.color}`}
                  >
                    <platform.icon className="h-8 w-8 mb-2" />
                    <span className="text-sm font-semibold">{platform.name}</span>
                  </motion.button>
                ))}
              </div>
              {canNativeShare && (
                <motion.button
                  variants={platformVariants}
                  initial="hidden"
                  animate="visible"
                  custom={socialPlatforms.length}
                  onClick={() => handleShare('Native')}
                  className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg flex items-center justify-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                >
                  <Share2 className="h-6 w-6 mr-2" />
                  <span className="text-sm font-semibold">Share via Device</span>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}