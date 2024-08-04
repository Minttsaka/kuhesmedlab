import { PaperPlaneIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function ProfileSideBar() {
  return (
    <div className='white shadow space-y-20 p-10'>
      <h2 className=' font-bold'>
        Kuhesmedlab
      </h2>
      <ul className='space-y-5 text-nowrap'>
        <li>
          <Link className="text-gray-500 text-sm flex items-center gap-2" href={''}>
          <PaperPlaneIcon className='h-4 w-4' />
          My Research papers
          </Link>
          </li>
          <li>
          <Link className="text-gray-500 text-sm flex items-center gap-2" href={''}>
          <PaperPlaneIcon className='h-4 w-4' />
          My Profile
          </Link>
          </li>
          <li>
          <Link className="text-gray-500 text-sm flex items-center gap-2" href={''}>
          <PaperPlaneIcon className='h-4 w-4' />
          Settings
          </Link>
          </li>
          <li>
          <Link className="text-gray-500 text-sm flex items-center gap-2" href={''}>
          <PaperPlaneIcon className='h-4 w-4' />
          Transactions
          </Link>
          </li>
      </ul>
    </div>
  )
}
