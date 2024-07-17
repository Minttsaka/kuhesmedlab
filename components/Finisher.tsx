import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Book, Hospital, Leaf } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import Link from 'next/link'

export default function Finisher() {
  return (
    <div className='bg-white py-40'>
    <div className="container mx-auto flex flex-col gap-5 border-x border-dotted">
      <h2 className="text-[purple] font-bold text-2xl">KUHESMEDLAB</h2>
      <h1 className="text-4xl font-bold max-w-md">Develop innovative solutions to healthcare challenges</h1>
      <p className='max-w-md'>
      Together, we can break free from the constraints of limited
        resources and achieve greatness. Let us embrace our collective
        power and shape the future of Medical Laboratory Science in
        Malawi.
      </p>
        <Button className="w-fit rounded-3xl">
          Explore how<ArrowRight className="h-3 w-3"/>
        </Button>
    </div>
    <div className='container mx-auto grid md:grid-cols-3 gap-5 mt-10 border-x'>
      <Card className='shadow-2xl'>
          <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
              <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
          </CardHeader>
          <CardContent>
              
              <div className='flex flex-col gap-10 mt-5'>
                  <Badge className='p-5 rounded-xl bg-gray-100 text-gray-800 w-fit'>
                    Detective Sarah Williamson
                  </Badge>
                  <h2 className=' text-xs font-bold'>City police</h2>
                  <p className='text-xs'>
                  As a detective, working with the forensic nurses has been invaluable. 
                  Their expertise in evidence collection and medical testimony has been crucial
                   in securing convictions and getting justice for victims. Highly recommend their services.
                  </p>
              </div>
          </CardContent>
      </Card>
      <Card className='shadow-2xl'>
          <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
              <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
          </CardHeader>
          <CardContent>
              
              <div className='flex flex-col gap-10 mt-5'>
                  <Badge className='p-5 rounded-xl bg-gray-100 text-gray-800 w-fit'>
                  Emily Thompson
                  </Badge>
                  <h2 className='text-xs font-bold'>Nurse</h2>
                  <p className='text-xs'>
                  As a busy nurse, I was really struggling with the previous EMR system. But the nurse informaticist listened to our concerns and implemented changes that have made my job so much easier. I can now spend more time with patients instead of fighting with the technology.
                  </p>
              </div>
          </CardContent>
      </Card>
      <Card className='shadow-2xl'>
          <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
              <img src='https://images.unsplash.com/photo-1563969105292-818af62ac5e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
          </CardHeader>
          <CardContent>
              
              <div className='flex flex-col gap-10 mt-5'>
                  <Badge className='p-5 rounded-xl bg-gray-100 text-gray-800 w-fit'>
                  Sophia Ramirez
                  </Badge>
                  <h2 className='text-xs font-bold'>Student</h2>
                  <p className='text-xs'>
                  Going into nursing, I never would have imagined myself working in the field of informatics.
                   But this program has opened my eyes to the critical role nurses play in shaping the future of healthcare technology. 
                  The hands-on projects and industry partnerships have given me invaluable real-world experience.
                  </p>
              </div>
          </CardContent>
      </Card>
  
    </div>
  </div>
  )
}
