"use client"

import { useState } from "react"
import { Heart, Loader2, MessageCircle, Send, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Content, Prisma, User } from "@prisma/client"
import useSWR from "swr"
import axios from "axios"
import { useSession } from "next-auth/react"

type Contents = Prisma.ContentGetPayload<{
 include:{
          likes:true,
          comment:{
              include:{
                  user:true,
              }
          }
         
        }
}>

const fetcher = async (url:string) => {
  const res = await axios.get(url);

  return res.data;
};

export default function ReadBlog({content, user}:{content:Content, user:User}) {

  const [newComment, setNewComment] = useState("")
  const [isCommenting, setIsCommenting] = useState(false)

  const {data:session}= useSession()

  const sessionUser = session?.user


  const { data, mutate, isLoading, error } = useSWR<Contents>(
  `/api/content/${content.id}`,
  fetcher
);


  const handleLike = async()=>{
    try {

      await axios.post(`/api/content/${content.id}`,{
        contentId:content.id,
  
      })
      mutate()
      
      
    } catch (error) {
      
    }
  }


  const handleNewComment = async() => {

    try {

      await axios.post(`/api/content`,{
        id:content.id,
        comment:newComment
      })
      mutate()
      
    } catch (error) {
      
    } finally{
      setIsCommenting(false)
    }
    
  }

  const isLiked = data?.likes.map(like=>like.userId===user?.id)
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20 font-sans text-sm">
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">{content.title}</h1>
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <time dateTime="2023-05-15">{content.createdAt.toDateString()}</time>
            <span>•</span>
            <span>{content.category}</span>
          </div>
        </header>

        <figure className="relative w-full overflow-hidden rounded-lg">
          <Image
            alt="AI-assisted coding illustration"
            className="object-cover"
            height={400}
            src={content.image!}
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width={800}
          />
        </figure>

        <div className=" max-w-none">
            <div
            className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: content.body }}
                />
        </div>

        <div className="flex items-center space-x-4 border-t border-b py-4">
          <Avatar>
            <AvatarImage alt={content.creatorName} src={content.creatorImage!} />
            <AvatarFallback>{content.creatorName}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{content.creatorName}</p>
            <p className="text-xs text-gray-500">{content.creatorRole}</p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Button
              variant={isLiked ? "default" : "outline"}
              size="sm"
              className={`space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isLiked ? "bg-red-500 text-white" : "bg-white text-gray-700"
              }`}
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="text-xs">{data?.likes.length}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="space-x-2 bg-white text-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{data?.comment.length}</span>
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="space-x-2 bg-white text-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Share2 className="h-4 w-4" />
            <span className="text-xs">Share</span>
          </Button>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {
            sessionUser &&
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <img src={sessionUser.image! ?? '/img/avatar.png'} alt="Current User" className="w-10 h-10 rounded-full" />
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
        
          {
            data?.comment.map(comment=>( 
            <Card key={comment.id} className="overflow-hidden">
            <CardContent className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage alt="Alice Smith" src={comment.user.image!} />
                  <AvatarFallback>{comment.user.name}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-sm">{comment.user.name}</h3>
                    <span className="text-xs text-gray-500">{new Date(comment.createdAt).toDateString()}</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>))
          }
         
          {/* More comments would go here */}
        </section>
      </article>
    </div>
  )
}