"use client"

import { aiGeneratedQuestion, deleteQuestion } from '@/lib/actions'
import { Prisma } from '@prisma/client'
import { PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import { BotIcon, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { KeyedMutator } from 'swr'

type Form = Prisma.SurveyFormQuestionGetPayload<{
  include:{
      choices:true,
    options:true
   }
}>;


const Edit = ({ handleAdd, handleDelete, show , id, mutate}: {handleAdd:()=>void, handleDelete:()=>void, show:any , id:string, mutate:KeyedMutator<Form[]>}) => {

  const [isGenerating, setIsGenerating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const aiGen = async()=>{
    try {
      setIsGenerating(true)
      await aiGeneratedQuestion(id)
      mutate()
     
  
    } catch (error) {
      
    }finally{
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-gray-50/80 shadow p-4 md:p-2 ml-2 rounded-md flex md:flex-col gap-4 justify-center items-center">
      <div
        onClick={handleAdd}
        className="md:border-b md:border-r-0 border-r pr-4 md:px-0 py-2 border-gray-400 cursor-pointer hover:text-[#29A0B1]"
      >
        <PlusCircledIcon />
      </div>
      <div
        
        className="md:border-b md:border-r-0 border-r pr-4 md:px-0 py-2 border-gray-400 cursor-pointer hover:text-[#29A0B1]"
      >
        {isGenerating ? <Loader2 className='animate-spin' /> : <BotIcon onClick={aiGen} className='font-light h-4 w-4' />}
      </div>
      {show && (
        <div
          onClick={handleDelete}
          className="cursor-pointer py-2 hover:text-red-400"
        >
          {isDeleting ? <Loader2 className='animate-spin' /> : <TrashIcon />}
          
        </div>
      )}
    </div>
  )
}

export default Edit
