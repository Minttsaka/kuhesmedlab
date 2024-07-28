import React from 'react'
import { Button } from './ui/button'

export default function SolutionsFinisher() {
  return (
    <div className='py-20 bg-gray-100'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2'>
            <div className='space-y-6'>
                <h2 className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <img alt='' className='' src='/kuh.png' />
            </div>
            <div className='space-y-6'>
                <p className='text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab eum eius fugiat commodi saepe optio veritatis fugit inventore! Magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda suscipit! Doloremque totam quisquam atque dolores? Dolore soluta quis ipsa?</p>
                <div className='space-y-6'>
                    <ul className='space-y-5'>
                        <li className="font-bold border-s-8 border-s-gray-500 pl-4">Retail and ecommerce</li>
                        <li className="font-bold border-s-8 border-s-gray-500 pl-4">finance and banking</li>
                        <li className="font-bold border-s-8 border-s-gray-500 pl-4">health and fitness</li>
                        <li className="font-bold border-s-8 border-s-gray-500 pl-4">Education and learning</li>
                    </ul>
                    <p className='border-s-4 text-xl font-light border-s-green-500 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente maiores quidem iusto ipsam, voluptas architecto distinctio molestias neque. Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab, quo eveniet pariatur numquam dolore magnam nam odio! Minima, ducimus?</p>
                    <Button className='bg-transparent border text-black'>
                        Get started
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
