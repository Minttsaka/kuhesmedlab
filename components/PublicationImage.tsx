import React from 'react'

export default function PublicationImage({image}:{image:string}) {
  return (
    <div className='w-full'>
      <img alt='' className='h-[20vh] object-cover w-full' src={image!} />
    </div>
  )
}
