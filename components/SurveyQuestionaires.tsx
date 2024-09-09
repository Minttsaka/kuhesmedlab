"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, Edit, Trash2, Download, Eye } from 'lucide-react'
import { Button } from './ui/button'
import { SurveyForm } from '@prisma/client'
import Link from 'next/link'


const tokenize = (text:string) => text.toLowerCase().split(/\W+/).filter(token => token.length > 2)
const removeStopWords = (tokens:string[]) => {
  const stopWords = new Set(['the', 'a', 'an', 'in', 'on', 'at', 'for', 'to', 'of', 'and', 'or', 'but'])
  return tokens.filter(token => !stopWords.has(token))
}

const stemWord = (word:string) => {
  // Very basic stemming (for demonstration purposes)
  return word.replace(/ing$|s$|ed$/, '')
}

export default function SurveyQuestionnaire({relatedSurvey, title}:{relatedSurvey:SurveyForm[], title:string}) {

  const [searchResults, setSearchResults] = useState<any>([])

  useEffect(()=>{
    const results = semanticSearch(title)
    setSearchResults(results)
  },[])

  // Simulated semantic search function
  const semanticSearch = useCallback((query:string) => {
    const queryTokens = removeStopWords(tokenize(query)).map(stemWord)
    
    return relatedSurvey.map(survey => {
      const concepts = survey.title.split(" ")
      const titleTokens = removeStopWords(tokenize(survey.title)).map(stemWord)
      const descriptionTokens = removeStopWords(tokenize(survey.description)).map(stemWord)
      const conceptTokens = removeStopWords(tokenize(concepts.join(' '))).map(stemWord)
      
      let score = 0
      let matchedTerms = new Set()
      let excerpts:string[] = []

      // Check title
      queryTokens.forEach(queryToken => {
        titleTokens.forEach(titleToken => {
          if (titleToken.includes(queryToken) || queryToken.includes(titleToken)) {
            score += 3
            matchedTerms.add(titleToken)
          }
        })
      })


      // Check description
      queryTokens.forEach(queryToken => {
        descriptionTokens.forEach((descToken, index) => {
          if (descToken.includes(queryToken) || queryToken.includes(descToken)) {
            score += 2
            matchedTerms.add(descToken)
            // Extract a brief excerpt around the matched term
            const start = Math.max(0, index - 3)
            const end = Math.min(descriptionTokens.length, index + 4)
            excerpts.push(descriptionTokens.slice(start, end).join(' '))
          }
        })
      })

      // Check concepts
      queryTokens.forEach(queryToken => {
        conceptTokens.forEach(conceptToken => {
          if (conceptToken.includes(queryToken) || queryToken.includes(conceptToken)) {
            score += 1
            matchedTerms.add(conceptToken)
          }
        })
      })

      return { 
        ...survey, 
        score, 
        matchedTerms: Array.from(matchedTerms), 
        excerpts: excerpts.slice(0, 2) // Limit to 2 excerpts for brevity
      }
    }).filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
  }, [])


  const highlightMatches = (text:string, matches:string[]) => {
    let highlightedText = text
    matches.forEach(match => {
      const regex = new RegExp(`\\b${match}\\b`, 'gi')
      highlightedText = highlightedText.replace(regex, `<mark class="bg-yellow-200 rounded px-1">$&</mark>`)
    })
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
  }

  return (
    <div className={`flex flex-col py-10  text-white bg-gray-100 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="lg:text-4xl font-bold text-gray-800 mb-8">Related Questionnaires</h1>        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.length ===0 && <p className="text-gray-500">No related survey found.</p>}
          {searchResults?.map((questionnaire:any) => (
            <motion.div
              key={questionnaire.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{highlightMatches(questionnaire.title, questionnaire.matchedTerms)}</h2>
                  <StatusBadge status={questionnaire.status} />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <ImportanceDot importance={questionnaire.importance} />
                  <span>{questionnaire.importance} importance</span>
                </div>
                <div className="flex justify-between items-center">
                  <Link href={`/survey/${questionnaire.id}`} className="space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit size={16} className="mr-1" />
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function StatusBadge({ status }:{status:string}) {
  const colors = {
    active: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800'
  }
  

  const selectedColor = colors[status as keyof typeof colors];
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedColor}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

function ImportanceDot({ importance }:{ importance:string }) {
  const colors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  }

  const selectedColor = colors[importance as keyof typeof colors];

  return (
    <span className={`w-2 h-2 rounded-full ${selectedColor}`} />
  )
}