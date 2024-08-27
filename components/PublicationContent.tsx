"use client"
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PDFViewer from './PdfViewer'
import { Prisma } from '@prisma/client'
import { loadPdf } from '@/lib/pageNum'

export type ResearchWithAllRelations = Prisma.ResearchGetPayload<{
  include: {
    files: true;

  };
}>;

export default function PublicationContent({research}:{research:ResearchWithAllRelations}) {
  return (
    <div className="container max-w-5xl mx-auto p-4 space-y-4">
    <header className="space-y-2">
      <h1 className="text-3xl font-bold max-w-xl">{research.title}</h1>
      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
        <span>{research.creatorName}, PhD</span>
        <span>•</span>
        <span>Jane Smith, MSc</span>
        <span>•</span>
        <span>{research.affiliation}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Published:</span>
        <span>{research.createdAt.toDateString()}</span>
        {research.doi && <span className="font-semibold ml-4">DOI:</span>}
        <a href="#" className="text-blue-600 hover:underline">{research.doi}</a>
      </div>
    </header>

    <Card>
      <CardHeader>
        <CardTitle>Abstract</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col md:flex-row items-start gap-2'>
        <p>
          {research.abstract}
        </p>
        <img alt='' className='h-80 w-80' src={research.image! ?? 'https://media.istockphoto.com/id/1132372790/photo/stacks-of-papers-documents-files-information-business-report-papers-with-color-clips-paper.webp?b=1&s=612x612&w=0&k=20&c=uW31TbpDUV2AzmM7sQdAJDtAfPTqmyYLAM5cEoBzorQ='} />
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-[3fr,1fr] gap-4">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <PDFViewer url={research.files?.find(file=>file.fileType==="pdf")?.url!} />
      </ScrollArea>

      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Article Info</CardTitle>
        </CardHeader>ffewwweee
        <CardContent>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Journal:</span> {research.journal}
            </div>
            <div>
             {research.volume && <span className="font-semibold">Volume: {research.volume}</span>}
            </div>
            <div>
              {research.issue && <span className="font-semibold">Issue: {research.issue}</span>}
            </div>
            <div>
              <span className="font-semibold">Pages: {loadPdf('https://dct4life-files.s3.af-south-1.amazonaws.com/uploads/1716053113220jslesson.pdf')}</span>
            </div>
            <Separator />
            <div>
              <span className="font-semibold">Citations: {research.citationCount}</span>
            </div>
            <div>
              <span className="font-semibold">Downloads: {research.downloadCount}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Download PDF</Button>
          <Button variant="outline" className="w-full">Cite This Paper</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  )
}
