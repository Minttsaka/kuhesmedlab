"use client"

import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Prisma, User } from '@prisma/client'
import { BookOpenIcon, Clock, Loader2, Locate, Paperclip, User2 } from 'lucide-react'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { GroupMembers } from './GroupMembers'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Star, Zap, MessageCircle, Heart, Award, Trash2, CheckCircle, X,Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import axios from 'axios'
import { updateUser } from '@/lib/actions'
import { toast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import { uploadToS3 } from '@/lib/s3'


type UserWithAllRelations = Prisma.UserGetPayload<{
  include:{
    research:{
      include:{
        collaborator:{
          include:{
            user:true
          }
        },
        surveys:{
          include:{
            surveyForm:{
              include:{
                questions:true
              }
            }
          }
        }
      }
    },
  }
}>;

type UserProfile = {
  name: string;
  bio: string;
  image: string | null;
}

export default function UserFirstSec({ user }:{ user:UserWithAllRelations }) {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    bio: "",
    image:null
  });

  const router = useRouter()

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setIsUpdating(true)
    const data={
      name: formData.get('name') as string,
      bio: formData.get('bio') as string,
      image: userProfile.image
    }
    try {
      const updateStatus = await updateUser(user.id, data)
      toast({
        title:"Update status",
        description:updateStatus
      })
      setIsUpdating(false)
      setIsProfileOpen(false);
      router.refresh()
      
    } catch (error) {
      
    }
   
  };

  const handleimageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const data = await uploadToS3(file)
      setUserProfile(prev => ({ ...prev, image: data?.fileKey as string }));
    }
  };

  function calculateDaysSinceSignup(signupDate: Date): number {
    
    const today = new Date();
    const timeDifference = today.getTime() - signupDate.getTime();
    
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)); 
    
    return daysDifference;
  }

  const signupDate = new Date(user.createdAt);
  const daysSinceSignup = calculateDaysSinceSignup(signupDate);

  const totalSurveyForms = user?.research.reduce((total, research) => {
    return total + research.surveys.reduce((surveyTotal, survey) => {
      return surveyTotal + survey.surveyForm.length;
    }, 0);
  }, 0);
  

  return (
    <div className="relative grid lg:grid-cols-2 gap-3 text-white mt-5 p-6 rounded-2xl">
      <div className='bg-white shadow p-5 rounded-2xl'>
  
        <div className='md:flex gap-5'>
        <Avatar className="w-24 h-24 ring-2 ring-purple-300">
          <AvatarImage src={user.image! ?? userProfile.image ?? "/img/avatar.png"} className='object-center object-cover'/>
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <div className='space-y-5'>
          <div className='md:flex mb-2 md:mb-0 gap-2'>
          <h2 className='text-xl text-black'>
            {user.name}
          </h2>
          <div className='flex gap-2 items-center'>
            <Button
             onClick={() => setIsProfileOpen(true)}
             className='rounded-full flex gap-2 items-center bg-blue-300'>
              <User2 className="mr-2 h-4 w-4" /> Edit profile
            </Button>
          </div>
          </div>
          <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-3xl bg-gradient-to-br from-purple-50 to-pink-50">
          <DialogHeader>
            <DialogTitle className="text-purple-800">Update Your Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Profile Picture
              </Label>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={userProfile.image  ?? user.image! ?? "/img/avatar.png"}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <label
                    htmlFor="image"
                    className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-1 cursor-pointer"
                  >
                    <Camera className="h-4 w-4 text-white" />
                  </label>
                </div>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleimageChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </Label>
              <Input id="name" name="name" defaultValue={user.name} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input id="email" type="email" defaultValue={user.email} required disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </Label>
              <Textarea id="bio" name="bio" defaultValue={user.bio!} />
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsProfileOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white" disabled={isUpdating}>
                {isUpdating ? <Loader2 className='animate-spin' /> : "Save Changes"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
          <p className='flex items-center text-sm text-gray-500'><Locate className='h-4 w-4' />{user.country}</p>
          <p className='flex items-center text-sm text-gray-500'>{user.bio}</p>

        </div>
        </div>
        <div className='grid space-y-3 md:grid-cols-3 mt-5'>
          <div className='flex items-center gap-2'>
            <Clock className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>{daysSinceSignup}</p>
              <p className='text-gray-500 text-xs'>days with us</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Paperclip className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>{user.research.length}</p>
              <p className='text-gray-500 text-xs'>Research</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <QuestionMarkCircledIcon className='h-6 w-6 text-black' />
            <div>
              <p className='text-gray-700 font-bold'>{totalSurveyForms}</p>
              <p className='text-gray-500 text-xs'>Survey Forms</p>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollArea className="w-full flex gap-2 pr-4">
      <div className='bg-white shadow flex gap-2 p-5 rounded-2xl'>
        {user.research.map(research=>(
           <Card key={research.id} className="w-80 shrink-0 p-6 flex border-none bg-gradient-to-t from-blue-100 to-purple-300 rounded-3xl flex-col gap-4">
           <div className="flex items-center gap-4">
             <div className="bg-primary rounded-md p-3 flex items-center justify-center">
               <BookOpenIcon className="w-6 h-6 text-primary-foreground" />
             </div>
             <h3 className="font-semibold line-clamp-2">{research.title}</h3>
           </div>
           <p className="text-muted-foreground line-clamp-2">
            {research.abstract}
           </p>
           <div className="flex items-center gap-2 text-muted-foreground text-sm">
            {user.research.map(research=><GroupMembers key={research.id} collaborator={research.collaborator.map(collab=>collab.user)} />)}
           </div>
           <Link href={`/mw/publication/${research.id}`}>
            <Button
                type="submit"
                className="w-full mt-2"
                color="primary"
              >
            View
          </Button>
        </Link>
         </Card>
        ))}
        {user.research.length===0 &&  
        <Card className="w-80 shrink-0 p-6 flex border-none bg-gradient-to-t from-blue-100 to-purple-300 rounded-3xl flex-col gap-4">
           <div className="flex items-center gap-4">
             <div className="bg-primary rounded-md p-3 flex items-center justify-center">
               <BookOpenIcon className="w-6 h-6 text-primary-foreground" />
             </div>
             <h3 className="font-semibold line-clamp-2">Havent created your research workspace</h3>
           </div>
           <p className="text-muted-foreground line-clamp-2">
            
           </p>
         
           <Link href={`/mw/research`}>
            <Button
                type="submit"
                className="w-full mt-2"
                color="primary"
              >
            Create
          </Button>
        </Link>
         </Card>}
         </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
      
       
</div>


  )
}
