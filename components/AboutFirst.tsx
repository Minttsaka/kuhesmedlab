import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge, HelpCircle, Link } from 'lucide-react'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function AboutFirst() {
  return (
    <div className='bg-white' id='more'>
        <div className='container mx-auto py-20'>
        <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='/img/official-logo.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                        <HelpCircle className='h-4 w-4' />
                        SUPPORT
                    </Badge>
                    <h2 className='font-bold uppercase '>Who  Are We ?</h2>
                    <p>KUHESMEDLAB is an initiative of the Department of Medical Laboratory Science at Kamuzu University of Health Sciences in Malawi, founded by medical laboratory science students to empower their peers in research, innovation, and critical thinking.</p>
                    
                    <div className='flex gap-2 '>
                    <StarFilledIcon className='h-7 w-7 text-[green]' />
                    <StarFilledIcon className='h-7 w-7 text-[green]' />
                    <StarFilledIcon className='h-7 w-7 text-[green]' />
                    <StarFilledIcon className='h-7 w-7 text-[green]' />
                    <StarFilledIcon className='h-7 w-7 text-[green]' />
                </div>
                </div>
            </CardContent>
        </Card>
            
        </div>
      
    </div>
  )
}
