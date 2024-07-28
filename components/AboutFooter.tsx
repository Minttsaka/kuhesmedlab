import React from 'react'
import { Button } from './ui/button'
import { Facebook } from 'lucide-react'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function AboutFooter() {
  return (
    <div className='py-20'>
      <div className='container mx-auto grid grid-cols-4'>
        <div>
            <h2 className='font-bold'>Emerging tech</h2>
            <ul className='space-y-2 mt-2'>
                <li className="text-xs">Data science</li>
                <li className="text-xs">Ai and Ml</li>
                <li className="text-xs">Blockchain</li>
                <li className="text-xs">interet of things</li>
                <li className="text-xs">geneatative ai</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold'>Emerging tech</h2>
            <ul className='space-y-2 mt-2'>
                <li className="text-xs">Data science</li>
                <li className="text-xs">Ai and Ml</li>
                <li className="text-xs">Blockchain</li>
                <li className="text-xs">interet of things</li>
                <li className="text-xs">geneatative ai</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold'>Emerging tech</h2>
            <ul className='space-y-2 mt-2'>
                <li className="text-xs">Data science</li>
                <li className="text-xs">Ai and Ml</li>
                <li className="text-xs">Blockchain</li>
                <li className="text-xs">interet of things</li>
                <li className="text-xs">geneatative ai</li>
            </ul>
        </div>

        <div className='space-y-3'>
            <h3 className='font-bold'>Get in touch</h3>
            <div className='flex gap-5'>
                <Button>Contact us</Button>
                <Button className='bg-transparent border text-black'>Contact us</Button>
            </div>
            <div>
                <p className="font-light">0998970102</p>
                <p className="font-light">sales@kuhes.com</p>
                <p className="font-light">36 juluy cental islip ny 11722</p>
            </div>
            <div>
                <h3 className='font-bold'>Follow us:</h3>
                <ul className='flex gap-3 mt-2'>
                    <li className="font-bold">
                        <Facebook className='h-4 w-4' />
                    </li>
                    <li className="font-bold">
                    <InstagramLogoIcon className='h-4 w-4' />
                    </li>
                    <li className="font-bold">
                    <TwitterLogoIcon className='h-4 w-4' />
                    </li>

                </ul>
            </div>

        </div>
            
      </div>
    </div>
  )
}
