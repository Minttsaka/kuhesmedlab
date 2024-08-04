import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import { GroupMembers } from './GroupMembers'
import { Progress } from './ui/progress'

export default function ReseachDashboardFirst() {
  return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='mb-10'>
                    <h2 className='text-3xl font-bold text-green-900'>Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi.</p>
                </div>
                <span className='p-2 rounded-full bg-green-300'>
                    <PlusIcon className='h-7 w-7' />
                </span>
            </div>
           
            <div className='flex gap-4'>
                
            <Card className='bg-white rounded-3xl space-y-0'>
                    <CardHeader className='font-bold text-xl'>
                        Lorem ipsum dolor sit amet.
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae?
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                            <GroupMembers />
                            <Progress value={80} />
                        </CardFooter>
                </Card>
                <Card className='bg-white rounded-3xl space-y-0'>
                    <CardHeader className='font-bold text-xl'>
                        Lorem ipsum dolor sit amet.
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae?
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                            <GroupMembers />
                            <Progress value={80} />
                        </CardFooter>
                </Card>
                <Card className='bg-white rounded-3xl space-y-0'>
                    <CardHeader className='font-bold text-xl'>
                        Lorem ipsum dolor sit amet.
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae?
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                            <GroupMembers />
                            <Progress value={80} />
                        </CardFooter>
                </Card>

                <Card className='bg-white rounded-3xl space-y-0'>
                    <CardHeader className='font-bold text-xl'>
                        Lorem ipsum dolor sit amet.
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae?
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                            <GroupMembers />
                            <Progress value={80} />
                        </CardFooter>
                </Card>

                <Card className='bg-white rounded-3xl space-y-0'>
                    <CardHeader className='font-bold text-xl'>
                        Lorem ipsum dolor sit amet.
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae?
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between'>
                            <GroupMembers />
                            <Progress value={80} />
                        </CardFooter>
                </Card>
            </div>
        </div>
  )
}
