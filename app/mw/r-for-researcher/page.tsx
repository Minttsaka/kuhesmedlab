import { CreateFirstWorkspace } from '@/components/create-first-workspace'
import CreateResearchForm from '@/components/CreateResearchForm'
import React from 'react'

export default function page() {
  return (
    <div className='px-1 '>
      <CreateResearchForm id={'578'} />
      <CreateFirstWorkspace />
    </div>
  )
}
