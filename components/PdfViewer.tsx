
'use client'

import { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { ScrollArea, ScrollBar } from './ui/scroll-area';


export default function PdfViewer({url}:{url:string}) {


  return (
    <ScrollArea className='h-[80vh]'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={url!} />
      </Worker>
      <ScrollBar />
    </ScrollArea>
  )
}
