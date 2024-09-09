'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Video } from 'lucide-react'

export default function VideoPlayer({url}:{url:string}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="w-12 h-12 rounded-full">
            <Video className="h-8 w-8 text-blue-500" />
            <span className="sr-only">Open video</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Video Player</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video">
            <video
              className="w-full h-full"
              src={url}
              controls={false}
              ref={(videoRef) => {
                if (videoRef) {
                  isPlaying ? videoRef.play() : videoRef.pause()
                }
              }}
            >
              Your browser does not support the video tag.
            </video>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 hover:bg-black/70"
              onClick={handlePlayPause}
            >
              <Play className={`h-8 w-8 text-white ${isPlaying ? 'hidden' : ''}`} />
              <span className={`text-white text-2xl ${!isPlaying ? 'hidden' : ''}`}>II</span>
              <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
  )
}