import CreateResearch from '@/components/CreateResearch'
import CreateResearchWorkspace from '@/components/CreateResearchWorkspace'
import ResearchWorkspaceForm from '@/components/WorkspaceForm'
import React from 'react'

export default function page() {
  return (
    <div>
      <CreateResearch />
      <ResearchWorkspaceForm />
      {/* <CreateResearchWorkspace /> */}
    </div>
  )
}
