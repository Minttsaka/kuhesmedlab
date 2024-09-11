"use client"

import React, { useState } from 'react'
import { ArrowUp, ArrowDown,Share2, Bookmark, Tag, User, Clock, Loader2 } from 'lucide-react'
import { Like, Prisma } from '@prisma/client'
import { stripHtml } from '@/lib/stripHtml'
import useSWR, { KeyedMutator } from 'swr'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, ThumbsUp } from 'lucide-react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import MindBlowingShareButton from './Share'
import FunctionalShareButton from './Share'

type PostWithRelations = Prisma.PostGetPayload<{
  include:{
    user:true,
    likes:true

  }
}>

type Comment = Prisma.CommentGetPayload<{
  include:{
    user:true,
    likes:true,
    reply:{
        include:{
          likes:true,
          user:true
        }
      }
}
}>


type Post = Prisma.PostGetPayload<{
  include:{
    user:true,
    likes:true,
    comment:{
        include:{
            user:true,
            likes:true,
            reply:{
                include:{
                  likes:true,
                  user:true
                }
              }
        }
    }
   
  }
}>

type Reply = Prisma.ReplyGetPayload<{
  include:{
    user:true,
    likes:true,
  }
}>

const fetcher = async (url:string) => {
  const res = await axios.get(url);

  return res.data;
};



const ReplyItem: React.FC<{ reply: Reply,mutate:KeyedMutator<Post>, level: number }> = ({ reply, level ,mutate}) => {


  
  const handleReplyLike = async(id:string) => {

    try {

      await axios.get(`/api/likes/${id}`)
      mutate()
      
    } catch (error) {
      
    }
    
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="ml-8 relative my-2"
    >
      <div className="absolute left-[-26px] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
      <div className=" dark:bg-gray-750 rounded-lg p-3 transition-all duration-300 hover:shadow-lg relative">
        <div className="absolute left-[-24px] top-4 w-5 h-px bg-gray-300 dark:bg-gray-600" />
        <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8 ring-2 ring-purple-400 transition-all duration-300 hover:ring-3">
            <AvatarImage src={reply.user.image!} alt={reply.user.name} className='object-cover' />
            <AvatarFallback>{reply.user.name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300">{reply.user.name}</h5>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(reply.createdAt).toDateString()}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{reply.reply}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Button size="sm" onClick={()=>handleReplyLike(reply.id)} className="text-pink-600 bg-transparent hover:bg-transparent hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 text-xs py-1 h-6">
                <ThumbsUp className={`h-3 w-3 mr-1 ${reply.likes.length > 0 ? "  fill-[red] text-[red]":" text-gray-600"}` } />
                {reply.likes.length}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const CommentItem: React.FC<{ comment: Comment, mutate:KeyedMutator<Post>, level: number }> = ({ comment, mutate, level }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [likes, setLikes] = useState(comment.likes)
  const [newReply, setNewReply] = useState<string>()

  const handleReply = async() => {
    try {

      await axios.post(`/api/comment/${comment.id}`,{
        reply:newReply
      })
      mutate()
      
    } catch (error) {
      
    }
  }


  const handleCommentLike = async(id:string) => {

    try {

      await axios.post(`/api/likes/${id}`,{
        commentId:id
      })
      mutate()
      
    } catch (error) {
      
    }
    
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`my-1 border-s ${level > 0 ? 'ml-8 relative' : ''}`}
    >
      {level > 0 && (
        <div className="absolute left-[-24px] top-0 bottom-0 w-px  dark:bg-gray-600" />
      )}
      <div className="dark:bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:shadow-xl relative">
        {level > 0 && (
          <div className="absolute left-[-24px] top-6 w-5 h-px bg-gray-300 dark:bg-gray-600" />
        )}
        <div className="flex items-start space-x-4">
          <Avatar className="h-10 w-10 ring-2 ring-purple-500 transition-all duration-300 hover:ring-4">
            <AvatarImage src={comment.user.image!} alt={comment.user.name} className='object-cover' />
            <AvatarFallback>{comment.user.name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
          <div className="flex items-center justify-between">
              <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300">{comment.user.name}</h5>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(comment.createdAt).toDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{comment.comment}</p>
            <div className="flex items-center space-x-4 mt-2">
              <Button size="sm" onClick={() => setIsReplying(!isReplying)} className="bg-transparent  hover:bg-transparent text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                <MessageSquare className="h-4 w-4 mr-1" />
                Reply
              </Button>
              <Button size="sm" onClick={()=>handleCommentLike(comment.id)} className="text-pink-600 bg-transparent hover:bg-transparent hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300">
                <ThumbsUp className={`h-4 w-4 mr-1 ${comment.likes.length > 0 ? "  fill-[red] text-[red]":" text-gray-600"}` } />
                {comment.likes.length}
              </Button>
            </div>
            <AnimatePresence>
              {isReplying && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 flex items-center space-x-2"
                >
                  <Input
                    placeholder="Write a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="flex-1 bg-white dark:bg-gray-700 border-purple-300 dark:border-purple-600 focus:ring-purple-500 dark:focus:ring-purple-400"
                  />
                  <Button size="sm" onClick={handleReply} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Send className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {comment.reply.map((reply) => (
          <ReplyItem key={reply.id} reply={reply} mutate={mutate} level={1} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default function SinglePostCommunity({post}:{post:PostWithRelations}) {

  const [likes, setLikes] =useState<Like[]>()
  const [newComment, setNewComment] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [isCommenting, setIsCommenting] = useState(false)

  const {data:session}= useSession()

  const sessionUser = session?.user


const { data, mutate, isLoading, error } = useSWR<Post>(
  `/api/post/${post?.id}`,
  fetcher
);

  
  

  const handleNewComment = async() => {

    try {

      await axios.post(`/api/comment`,{
        id:post.id,
        comment:newComment
      })
      mutate()
      
    } catch (error) {
      
    } finally{
      setIsCommenting(false)
    }
    
  }

  const handleSave = () => {
    // Implement save functionality here
    alert("Post saved!")
  }

  const handleShare = () => {
    // Implement share functionality here
    alert("Share link copied to clipboard!")
  }

  const handleVote = async(id:string)=>{
    try {

      await axios.post(`/api/likes`,{
        postId:id,
  
      })
      mutate()
      
      
    } catch (error) {
      
    }
  }

  console.log(data,"lists")

  return (
    <div className={` ${darkMode ? 'bg-gray-900 mt-20 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className='max-w-4xl mx-auto p-6 bg-white shadow '>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center text-xs space-x-4">
          <img src={post.user.image!} alt={post.user.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h2 className="font-semibold ">{post.user.name}</h2>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>{new Date(post.createdAt).toDateString()}</span>
            </div>
          </div>
        </div>
        <FunctionalShareButton 
         url={`https://v0.dev/chat/oo98PP_MGPc`}
          title={post?.title}
          description={stripHtml(post?.body)}
          />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-6">
        <div
            dangerouslySetInnerHTML={{ __html: post.body! }}
          />
        {post.img && 
        <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src={post.img}
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>

          }  
      </div>

      <div className="mb-6 text-xs md:flex space-y-2 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <button onClick={() => handleVote(post.id)} className={`${data?.likes?.length! > 0 ? "text-[red]" :"text-gray-500"} hover:text-blue-500`}>
              <ArrowUp size={18} />
            </button>
            <span className="font-semibold text-[red] ">{data?.likes?.length}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <MessageSquare size={18} />
            <span>{data?.comment?.length} comments</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {JSON.parse(post.tag).map((tag:string) => (
            <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {sessionUser && 
         <div className="mb-6">
          <div className="md:flex space-y-2 items-center space-x-4">
            <img src={sessionUser.image!} alt="Current User" className="w-10 h-10 object-cover rounded-full" />
            <input
              type="text"
              name='comment'
              onChange={(e)=>setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              onClick={handleNewComment}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {isCommenting ? <Loader2 className='animate-spin' /> : <Send size={20} />}
              
            </button>
          </div>
        </div>
       }
       
        <div className="space-y-6">
        <AnimatePresence>
        {data?.comment?.map((comment) => (
          <CommentItem key={comment.id}  mutate={mutate} comment={comment} level={0} />
        ))}
      </AnimatePresence>
          
        </div>
      </div>
      </div>
    </div>
  )
}