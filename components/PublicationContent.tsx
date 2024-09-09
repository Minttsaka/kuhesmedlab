"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import PdfViewer from "./PdfViewer";
import { citation, download } from "@/lib/actions";
import VideoPlayer from "./PublicationVideoPlayer";

type ResearchWithAllRelations = Prisma.ResearchGetPayload<{
  include:{
    files:true,
    reference:true,
    citationTrend:true,
    downloadTrend:true
  }
}>;

export default function PublicationContent({ research, pageNum }: { research: ResearchWithAllRelations , pageNum:number}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async() => {
    setLoading(true);
    try {
      await download(research.id)
    } catch (error) {
      console.error("Error tracking download:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCitation = () => {
    const reference = "Sample Citation";
    navigator.clipboard.writeText(reference).then(async() => {
      await citation(research.id)
    }).catch((err) => {
      console.error("Failed to copy citation: ", err);
    });
  };

  const totalCitations = research.citationTrend?.reduce((sum, citation) => sum + citation.citations, 0) || 0;
  const totalDownloads = research.downloadTrend?.reduce((sum, download) => sum + download.downloads, 0) || 0;

  return (
    <div className="container max-w-5xl mx-auto p-4 space-y-4">
      <header className="space-y-2">
        <h1 className="text-lg md:text-3xl font-bold max-w-xl">{research.title}</h1>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>{research.creatorName}</span>
          <span>•</span>
          <span>{research.affiliation}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Published:</span>
          <span>{new Date(research.createdAt).toDateString()}</span>
          {research.doi && (
            <>
              <span className="font-semibold ml-4">DOI:</span>
              <a href="#" className="text-blue-600 hover:underline">{research.doi}</a>
            </>
          )}
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Abstract</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start gap-2">
          <div className="space-y-2">
            <p>{research.abstract}</p>
              {research?.files.find(file => file.fileType === "video")?.url! && 
              <>
              <VideoPlayer url={research?.files.find(file => file.fileType === "video")?.url!} /> 
                <span className="text-xs ml-2">Video is available. Click the icon to play.</span>
                </>}
          </div>
          
          <img
            alt=""
            className="h-80 w-80"
            src={research?.files.find(file => file.fileType === "image")?.url! ??
              'https://media.istockphoto.com/id/1132372790/photo/stacks-of-papers-documents-files-information-business-report-papers-with-color-clips-paper.webp?b=1&s=612x612&w=0&k=20&c=uW31TbpDUV2AzmM7sQdAJDtAfPTqmyYLAM5cEoBzorQ='}
          />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-[3fr,1fr] gap-4">
        <PdfViewer url={research?.files.find(file => file.fileType === "pdf")?.url!} />
          <div>
          <div className="font-semibold">Article Info</div>
          <div className="space-y-2 text-sm">
            {research.journal && <div>Journal: {research.journal}</div>}
            {research.volume && <div>Volume: {research.volume}</div>}
            {research.issue && <div>Issue: {research.issue}</div>}
            <Separator />
            <div>Views: {research.views}</div>
            <div>Pages: {pageNum}</div>
            <div>Citations: {totalCitations}</div>
            <div>Downloads: {totalDownloads}</div>
            <div className="flex flex-col gap-2">
          <Link className="w-full" onClick={handleDownload} href={research.files?.find(file => file.fileType === "pdf")?.url!} download>
            <Button className="w-full" disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : "Download PDF"}</Button>
          </Link>
          <Button variant="outline" className="w-full" onClick={handleCopyCitation}>
            Cite This Paper
          </Button>
        </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
