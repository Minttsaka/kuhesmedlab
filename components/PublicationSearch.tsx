
"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Research } from '@prisma/client'
import Link from 'next/link'
//.join(", ")

export default function PublicationSearch({researchList}:{researchList:Research[]}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 3

  const keywordsParse = (keywords:string):string[] =>{
    return keywords.split(',').map(word => word.trim())
  }

  const filteredArticles = researchList.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article?.abstract?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    keywordsParse(article.keyWords).some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  return (
    <div className="">
      <div className='h-[50vh] bg-blue-500 flex items-center justify-center text-white' >
      <div className='container text-center max-w-3xl space-y-5 mx-auto'>
            <h1 className="text-3xl font-bold mb-8">Article Journal Search</h1>
            <p>With 160+ million publication pages, 25+ million researchers and 1+ million questions, this is where everyone can access science</p>
            <div className="flex mb-6">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow text-black rounded-none"
        />
        <Button className="ml-2">
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
        </div>
        
      </div>
        

        <div className='max-w-4xl mx-auto'>
        
      <div className="space-y-6 max-w-2xl mx-auto">
        {currentArticles.map((article) => (
          <Card className='border-b' key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {article.creatorName} | {article.journal} | Published: {article.createdAt.toDateString()}
              </p>
              <p className="text-sm mb-4">DOI: {article.doi}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {keywordsParse(article.keyWords).map((keyword, index) => (
                  <Badge key={index} variant="secondary">{keyword}</Badge>
                ))}
              </div>
              <p className="text-sm">{article.abstract}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/publications/${article.id}`}>
                <Button variant="outline">Read Full Article</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      {filteredArticles.length > articlesPerPage && (
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}

        </div>
      
      
    </div>
  )
}