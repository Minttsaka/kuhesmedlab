import PublicationContent from '@/components/PublicationContent'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationImage from '@/components/PublicationImage'
import PublicationNav from '@/components/PublicationNav'
import React from 'react'

export default function page() {
  return (
    <div>
        <PublicationNav />
        <PublicationImage />
        <PublicationContent />
        <PublicationsFooter />
    </div>
  )
}
