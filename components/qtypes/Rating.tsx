"use client"

import React from 'react'
import { Input } from '../ui/input'
import axios from 'axios'

export default function Rating({id}:{id:string}) {

  const submitData = async(e:any) =>{
    await axios.post('/api/options',{
      rating : e.target.value,
      id
    })
  }

  return (
    <div className='ml-5 mb-5'>
      <Input min={0} onChange={submitData} placeholder='Enter the maximum number of rating' type='number' required/>
    </div>
  )
}
