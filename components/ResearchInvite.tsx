import React, { Children, ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, X, UserPlus, ListPlus, XIcon } from 'lucide-react'
import { GroupMembers } from './GroupMembers'

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--duration': `${Math.random() * 20 + 10}s`,
          '--delay': `${Math.random() * 5}s`,
        }as React.CSSProperties}
      />
    ))}
  </div>
)

export default function ResearchInvite() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<{
    id: string;
    name: string;
    email: string;
    avatar: string;
}[]>([])

const [isOPen, setIsOpen] = useState(false)

  const users = [
    { id: "a", name: 'Alice Johnson', email: 'alice@example.com', avatar: '/placeholder.svg?height=40&width=40' },
    { id: "b", name: 'Bob Smith', email: 'bob@example.com', avatar: '/placeholder.svg?height=40&width=40' },
    { id: "c", name: 'Charlie Brown', email: 'charlie@example.com', avatar: '/placeholder.svg?height=40&width=40' },
    { id: "c", name: 'Diana Ross', email: 'diana@example.com', avatar: '/placeholder.svg?height=40&width=40' },
    { id: "d", name: 'Ethan Hunt', email: 'ethan@example.com', avatar: '/placeholder.svg?height=40&width=40' },
  ]

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleUser = (user:{
    id: string;
    name: string;
    email: string;
    avatar: string;
}) => {
    setSelectedUsers(prev =>
      prev.some(u => u.id === user.id)
        ? prev.filter(u => u.id !== user.id)
        : [...prev, user]
    )
  }

  return (
    <div className="">
        <ListPlus onClick={()=>setIsOpen((prev)=>!prev)}  />
   
      {isOPen && 
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full fixed inset-0 max-w-md z-50  h-screen overflow-hidden lg:rounded-r-2xl bg-black/70 backdrop-blur-sm shadow-2xl"
      >
         <ParticleBackground />
        <div className="relative backdrop-blur-md bg-white bg-opacity-10 p-8">
            <div className='flex items-center justify-between'>
            <GroupMembers />
            <XIcon onClick={()=>setIsOpen(false)} className='text-white'/>
            </div>
          
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-white border-opacity-50 rounded-lg focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-white placeholder-opacity-75"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-75" />
          </div>
          <div className="h-full overflow-y-auto custom-scrollbar mb-6">
            {filteredUsers.map(user => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 mb-2"
              >
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="text-white font-semibold">{user.name}</h3>
                    <p className="text-white text-opacity-75 text-sm">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleUser(user)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    selectedUsers.some(u => u.id === user.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-white bg-opacity-20 text-white'
                  }`}
                >
                  <UserPlus size={20} />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white">
              {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
            </p>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
              Invite
            </button>
          </div>
        </div>
      </motion.div>}
    </div>
  )
}