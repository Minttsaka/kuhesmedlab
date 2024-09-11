"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Prisma } from "@prisma/client"
import Link from "next/link"

type Post = Prisma.PostGetPayload<{
  include:{
    user:true,
    likes:true
  }
}>

export default function RelatedPosts({otherPost}:{otherPost:Post[]}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full bg-gray-100 p-6 shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Related Posts</h2>
      <div className="relative">
        <ScrollArea className="w-full " ref={scrollRef} onScroll={checkScroll}>
          <div className="flex space-x-4 p-4">
            {otherPost.map((post) => (
              <motion.div
              key={post.id}
              className="flex-none w-72"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-white shadow hover:shadow-xl transition-shadow duration-300">
                <img src={post.img!} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
                <CardContent className="p-4">
                  <Link href={`/community/post/${post.slug}`} className="font-semibold hover:underline text-lg text-blue-800 line-clamp-2">{post.title}</Link>
                  <div className="flex items-center mt-2 space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={post.user.image! ?? "/img/avatar.png"} alt={post.user.name} className="object-cover" />
                      <AvatarFallback>{post.user.name}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{post.user.name}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-1 justify-between items-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {JSON.parse(post.tag)[0]}
                  </Badge>
                  <Link href={`/community/post/${post.slug}`} className="flex items-center space-x-1 text-red-500">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm">{post.likes.length}</span>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button
          variant="outline"
          size="icon"
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white ${
            canScrollLeft ? 'visible' : 'invisible'
          }`}
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white ${
            canScrollRight ? 'visible' : 'invisible'
          }`}
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}