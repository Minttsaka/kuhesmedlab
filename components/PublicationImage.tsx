import React from 'react'

export default function PublicationImage({image}:{image:string}) {
  return (
    <div className='w-full'>
      <img alt='' className='h-[20vh] object-cover w-full' src={image! ?? 'https://media.istockphoto.com/id/1132372790/photo/stacks-of-papers-documents-files-information-business-report-papers-with-color-clips-paper.webp?b=1&s=612x612&w=0&k=20&c=uW31TbpDUV2AzmM7sQdAJDtAfPTqmyYLAM5cEoBzorQ='} />
    </div>
  )
}
