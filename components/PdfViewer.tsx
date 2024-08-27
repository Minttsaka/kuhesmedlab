"use client"

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const PDFViewer = ({url}:{url:string}) => {
 // const pdfUrl = 'https://dct4life-files.s3.af-south-1.amazonaws.com/uploads/1716053113220jslesson.pdf';

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={url ?? 'https://dct4life-files.s3.af-south-1.amazonaws.com/uploads/1716053113220jslesson.pdf'} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
