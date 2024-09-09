"use client"

import React from 'react'
import { Input } from '../ui/input'
import axios from 'axios'
import { updateFields } from '@/lib/actions'
import { KeyedMutator } from 'swr'
import { Prisma } from '@prisma/client'

type Form = Prisma.SurveyFormQuestionGetPayload<{
  include:{
      choices:true,
    options:true
   }
}>;

export default function Rating({id, mutate, value}:{id:string, mutate:KeyedMutator<Form[]>, value:number}) {

  const submitData = async(e:React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()

    const data={
      rating : Number(e.target.value),
    }
    await updateFields(id,data)
    mutate()

  }

  return (
    <div className='ml-5 mb-5'>
      <Input min={0} max={7} defaultValue={value} onChange={submitData} placeholder='Number of stars' type='number' className='w-36' required/>
    </div>
  )
}
