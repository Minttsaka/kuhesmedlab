"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, ArrowDown, MessageSquare, Tag, Search, Filter, Loader2 } from 'lucide-react'
import { Plus, X, Check, Trash2 } from "lucide-react"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Prisma } from '@prisma/client'
import { stripHtml } from '@/lib/stripHtml'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'


const categories =[
  "mint", "greatness"
]

type  PostWithRelations = {
  post: Prisma.PostGetPayload<{
    include:{
      likes:true,
      user:true,
      comment:{
        include:{
          likes:true
         }
        },

     }
 
}>[],
totalPages:number
}

type Post = Prisma.PostGetPayload<{
  include:{
    likes:true,
    user:true,
    comment:{
      include:{
        likes:true
       }
      },

   }

}>

const fetcher = async ([url, page, limit]: [string, number, number]) => {
  const res = await axios.post(url,{
    page,
    limit
  })
  return res.data
}


export default function Community() {

  const observerTarget = useRef(null)

const limit = 10;

  const [page, setPage] = useState(1);
  const { data, error,isLoading, mutate } = useSWR(['/api/post', page, limit], fetcher);
  const [postsList, setPostList] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {

    
    if (data) {
      setPostList(prevPosts => [...prevPosts, ...(data || [])]);

      if (data.length < limit) {
        setHasMore(false); 
      }
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [data, page, hasMore]);

  if (error) return <div>Failed to load posts</div>;
  if (!data && postsList.length === 0) return <div>Loading...</div>;

  if(isLoading) {
    return  <div className="fixed inset-0 flex items-center justify-center bg-purple-500 bg-opacity-50 backdrop-blur-md z-50">
    <div className="relative">
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Loader2 className="w-16 h-16 text-purple-500 animate-spin" />
      </motion.div>
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-white text-xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        Collecting data...
      </motion.div>
    </div>
  </div>
  }


  return (
    <div className={`min-h-screen bg-gray-100 text-gray-900`}>
      <div className="max-w-4xl mx-auto pt-20 px-1">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Where researchers discuss</h1>
        
      </div>

      <div className="space-y-1">
        {postsList.map((post) => (
          <div key={post.id} className="bg-white shadow dark:bg-gray-800 rounded-lg  p-6">
            <div className="md:flex space-y-2 items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img src={post.user.image!} alt={post.user.name} className="w-10 h-10 object-cover rounded-full" />
                <div>
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toDateString()}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 space-x-2">
                {JSON.parse(post.tag).map((tag:string) => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="mb-4 line-clamp-2">{stripHtml(post.body)}</p>
              {post.img && 
               <div className="w-full">
                  <img src={post.img} className='object-center w-full h-[30vh] rounded-lg object-contain'/>
                </div>
              }  
                  
            <div className="mt-4 text-xs flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Link href={`/community/post/${post.slug}`}>
                    <button className={`${post.likes.length! > 0 ? "text-[red]" :"text-gray-500"} hover:text-blue-500`}>
                      <ArrowUp size={20} />
                    </button>
                  </Link>
                  <span className="font-semibold">{post.likes.length!}</span>
                </div>
                <Link className="flex items-center space-x-1 text-gray-500" href={`/community/post/${post.slug}`}>
                  <MessageSquare size={20} />
                  <span>{post.comment.length} comments</span>
                </Link>
              </div>
              <Link href={`/community/post/${post.slug}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
     
      <div ref={observerTarget} className="h-10" />
    </div>
  )
}