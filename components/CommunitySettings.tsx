"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Trash2, Settings, User, FileText, ChevronRight, MessageSquare, Menu } from 'lucide-react'
import { Prisma } from '@prisma/client'
import { deleteUserComment, deleteUserPost, deleteUserReply } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type User = Prisma.UserGetPayload<{
  include:{
    Post:{
      include:{
        comment:true
      }
    },
    comment:{
      include:{
        post:true
      }
    },
    reply:{
      include:{
        comment:{
          include:{
            post:true
          }
        }
      }
    }
  }
}>

interface Post {
  id: number
  title: string
  date: string
  comments: number
}

interface Comment {
  id: number
  postId: number
  postTitle: string
  content: string
  date: string
}


export default function CommunitySettings({user}:{user:User}) {
  const [activeTab, setActiveTab] = useState('account')
  const [pushNotifications, setPushNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [isOpen ,setIsOpen ] =useState(false)

  const router = useRouter()

  const deletePost = async(postId: string) => {

    try {
      await deleteUserPost(postId)
      router.refresh()
    } catch (error) {

      console.log(error)
      
    }
    
  }

  const deleteComment = async(commentId: string) => {

    try {
      await deleteUserComment(commentId)
      router.refresh()
    } catch (error) {

      console.log(error)
      
    }
    
  }

  const deleteReply = async(replyId: string) => {

    try {
      await deleteUserReply(replyId)
      router.refresh()
    } catch (error) {

      console.log(error)
      
    }
    
  }

  const TabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Account Information</h2>
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 ring-4 ring-purple-500 transition-all duration-300 hover:ring-8">
                <AvatarImage src={user.image!} alt="@username" className='object-cover'/>
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
              <Link href={'/mw/profile'}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Edit Profile</Button>
              </Link>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-lg">Username</Label>
              <Input id="username" defaultValue={user.name} className="bg-gray-100 dark:bg-gray-800 border-none text-lg" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input id="email" type="email" defaultValue={user.email} className="bg-gray-100 dark:bg-gray-800 border-none text-lg"  disabled/>
            </div>
          </div>
        )
      case 'posts':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Posts</h2>
            <ScrollArea className="h-[400px] rounded-md">
              <AnimatePresence>
                {user.Post.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4"
                  >
                    <div>
                    <Link href={`/community/post/${post.slug}`} className="font-semibold text-lg">{post.title}</Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Posted on {post.createdAt.toDateString()} • {post.comment.length} comments</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deletePost(post.id)} className="text-red-500 bg-transparent hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
          </div>
        )
      case 'comments':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Comments</h2>
            <ScrollArea className="h-full rounded-md">
              <AnimatePresence>
                {user.comment.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                    <Link href={`/community/post/${comment.post?.slug}`} className="font-semibold text-purple-600 dark:text-purple-400">{comment.post?.title}</Link>
                      <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id)} className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{comment.comment}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Commented on {comment.createdAt.toDateString()}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
          </div>
        )
        case 'reply':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Replies</h2>
            <ScrollArea className="h-full rounded-md">
              <AnimatePresence>
                {user.reply.map((reply) => (
                  <motion.div
                    key={reply.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className='space-y-2'>
                        <h3 className="font-semibold text-purple-600 dark:text-purple-400">Comment: {reply.comment?.comment}</h3>
                        <Link href={`/community/post/${reply.comment?.post?.slug}`} className="font-semibold text-blue-900 text-sm dark:text-blue-900">Post : {reply.comment?.post?.title}</Link>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => deleteReply(reply.id)} className="text-red-500 bg-transparent hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><span className='text-purple-500 font-bold'>Your reply :</span> {reply.reply}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">replied on {reply.createdAt.toDateString()}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
          </div>
        )
      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications" className="text-lg">Push Notifications</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications on your device</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications" className="text-lg">Email Notifications</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Menu className='fixed md:hidden top-3 right-3' onClick={()=>setIsOpen((prev)=>!prev)} />
      {isOpen && 
      <nav className="md:hidden z-50 fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Settings</h1>
      {['account', 'posts', 'comments', 'notifications'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex items-center text-xs w-full p-2 rounded-lg transition-colors ${
            activeTab === tab
              ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {tab === 'account' && <User className="w-5 h-5 mr-2" />}
          {tab === 'posts' && <FileText className="w-5 h-5 mr-2" />}
          {tab === 'comments' && <MessageSquare className="w-5 h-5 mr-2" />}
          {tab === 'Reply' && <MessageSquare className="w-5 h-5 mr-2" />}
          {tab === 'notifications' && <Bell className="w-5 h-5 mr-2" />}
          <span className="capitalize">{tab}</span>
          <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${activeTab === tab ? 'rotate-90' : ''}`} />
        </button>
      ))}
    </nav>}
      <nav className="hidden md:block w-64 bg-white dark:bg-gray-800 p-6 space-y-4">
        <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Settings</h1>
        {['account', 'posts', 'comments','reply', 'notifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center text-xs w-full p-2 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab === 'account' && <User className="w-5 h-5 mr-2" />}
            {tab === 'posts' && <FileText className="w-5 h-5 mr-2" />}
            {tab === 'comments' && <MessageSquare className="w-5 h-5 mr-2" />}
            {tab === 'notifications' && <Bell className="w-5 h-5 mr-2" />}
            <span className="capitalize">{tab}</span>
            <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${activeTab === tab ? 'rotate-90' : ''}`} />
          </button>
        ))}
      </nav>
      <main className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <TabContent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}