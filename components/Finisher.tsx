'use client'

import React, { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

interface RatingProps {
  averageRating: number
  totalRatings: number
}

export default function Finisher({ averageRating, totalRatings }: RatingProps) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)
  const controls = useAnimation()
  const containerControls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 }
    })
    containerControls.start({
      background: [
        'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
      ],
      transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
    })
  }, [averageRating, controls, containerControls])

  const starVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: [0, 15, -15, 0], transition: { duration: 0.3 } },
    tap: { scale: 0.8, rotate: 0, transition: { duration: 0.1 } }
  }

  const filledStars = Math.floor(averageRating)
  const hasHalfStar = averageRating % 1 !== 0

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white">
      <motion.div 
        className="flex items-center justify-center w-64 h-24 rounded-full overflow-hidden"
        animate={containerControls}
      >
        <div className="flex items-center space-x-1 bg-white bg-opacity-50 backdrop-blur-sm p-3 rounded-full" role="img" aria-label={`${averageRating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              variants={starVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setHoveredStar(star)}
              onHoverEnd={() => setHoveredStar(null)}
            >
              <Star
                className={`w-8 h-8 ${
                  star <= filledStars
                    ? 'text-yellow-400 fill-yellow-400'
                    : star === filledStars + 1 && hasHalfStar
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                } ${hoveredStar && star <= hoveredStar ? 'text-yellow-500' : ''} transition-colors duration-200`}
                strokeWidth={1.5}
              />
              
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-gray-800"
        animate={controls}
      >
        {averageRating?.toFixed(1)}
      </motion.div>
      <div className="text-sm text-gray-600">Based on {totalRatings} ratings</div>
      <motion.div
        className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(averageRating / 5) * 100}%` }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}