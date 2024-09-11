"use client"

import React, { KeyboardEvent, useEffect, useState } from 'react'
import { Moon, Sun, Home, Users,Search, MessageSquare, Bell, ChevronLeft, ChevronRight, Settings, LogInIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import CommunityNotifications from './CommunityNotification'
import { Avatar, AvatarImage } from './ui/avatar'

export default function CommunitySidebar() {

  const {data:session} = useSession()

  const user = session?.user

  const [isExpanded, setIsExpanded] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebar, setIsSideBar] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleSidebar = () => setIsExpanded(!isExpanded)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const router = useRouter()

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/community/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }


  const navItems = [
    { icon: Home, label: 'Feed' ,link:"/community/feed" },
    { icon: Users, label: 'Communities',link:"/404" },
    { icon: Settings, label: 'Settings',link:"/community/settings" }
  ]

  return (
    <motion.aside
      className={` md:w-[240px] h-screen ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-white'
      } text-gray-800 dark:text-white shadow overflow-hidden z-50`}
      initial="expanded"
      animate={!isMobile ? 'expanded' : 'collapsed'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex flex-col h-full">
              <motion.div
                className="text-2xl my-5 ml-1 md:hidden font-bold"
                initial={{ opacity: 1 }}
                animate={{ opacity: isMobile ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Avatar>
                    <AvatarImage src='/img/official-logo.png' className="object-cover" />
                </Avatar>
                </motion.div>
        <div className="hidden md:flex items-center justify-between md:p-4">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: !isMobile ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Community
          </motion.h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2  text-xs md:p-4">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={item.link}
                  className={`flex items-center space-x-4 p-2 rounded-lg ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  } transition-colors`}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="md:w-6 md:h-6" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: !isMobile ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${isMobile ? "hidden" : "block"}`}
                  >
                    {item.label}
                  </motion.span>
                </a>
              </motion.li>
            ))}
             <motion.li onClick={() => setIsSideBar((prev)=>!prev)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div
                 
                  className={`md:flex cursor-pointer items-center space-x-4 p-2 rounded-lg ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  } transition-colors`}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                        className="absolute -top-1 left-1 w-3 h-3 bg-red-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    <Bell className="md:w-6 md:h-6" />
                   
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${isMobile ? "hidden" : "block"}`}
                  >
                    Notification
                  </motion.span>
                </div>
              </motion.li>
             <motion.li onClick={() => setIsOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div
                 
                  className={`md:flex cursor-pointer items-center space-x-4 p-2 rounded-lg ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  } transition-colors`}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Search className="md:w-6 md:h-6" />
                   
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${isMobile ? "hidden" : "block"}`}
                  >
                    Search
                  </motion.span>
                </div>
              </motion.li>
          </ul>
        </nav>

        {isSidebar && <CommunityNotifications setIsSideBar={setIsSideBar} />}

        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for anything..."
                  className="w-full py-6 px-8 text-2xl bg-transparent outline-none"
                  autoFocus
                />
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{ width: `${(query.length / 50) * 100}%`, maxWidth: '100%', transition: 'width 0.3s ease-out' }}
                />
              </div>
              <div className="p-8 bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Trending Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Innovation in medical lab', 'AI in medical lab', 'HIV and aids cure', 'Future of medical lab with dctfusion'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close search"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

        

        <div className="p-1">
        {user ?  
        <motion.div
            className={`md:flex items-center space-x-4 p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={user.image! ?? "/img/avatar.png"}
              alt="User avatar"
              className="w-10 object-cover h-10 rounded-full"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className={`text-xs ${isMobile ? "hidden" : "block"}`}>{user.name}</p>
            </motion.div>
          </motion.div>
          :
          <>
            <p className='hidden md:block'>Login to have full access</p>
            <LogInIcon onClick={()=>signIn()} />
          </>
          }
        </div>
      </div>
    </motion.aside>
  )
}