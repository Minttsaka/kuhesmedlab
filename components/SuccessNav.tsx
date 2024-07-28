import React from 'react'
import { Button } from './ui/button'

export default function SuccessNav() {
  return (
    <div className='bg-black bg-opacity-80 text-white py-5'>
      <div className='container mx-atuo flex justify-between items-center '>
        <ul className='flex gap-5'>
            <li className="text-sm">Introduction</li>
            <li className="text-sm">Use case</li>
            <li className="text-sm">Success stories</li>
            <li className="text-sm">News and events</li>
        </ul>
        <Button className='bg-[green] rounded-none'>
            Get started
        </Button>
      </div>
    </div>
  )
}
