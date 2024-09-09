import Invite from '@/components/Invite'
import React from 'react'

export default function page({params:{id}}:{params:{id:string}}) {
  return (
    <div>
      <Invite id={id} />
    </div>
  )
}
