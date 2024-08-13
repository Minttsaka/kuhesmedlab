import { PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import { BotIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Edit = ({ handleAdd, handleDelete, show }: any) => {
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
        <BotIcon className='font-light' />
      </div>
      {!show && (
        <div
          onClick={handleDelete}
          className="cursor-pointer py-2 hover:text-red-400"
        >
          <TrashIcon />
        </div>
      )}
    </div>
  )
}

export default Edit
