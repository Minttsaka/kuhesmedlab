"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, ChevronUp, Eye, Star } from 'lucide-react'
import { Option, Prisma, QuestionType } from '@prisma/client'
import { Button } from './ui/button'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

type Question = Prisma.SurveyFormQuestionGetPayload<{
  include:{
    options:true,
    choices:{
      include:{
        user:true
      }
    }
  }
}>

const SurveyAnswerDisplay: React.FC<{ question: Question, index:number, identity:boolean }> = ({ question , index, identity}) => {

  const dataLabels = question.choices.map(choice => choice.answer)

  const uniqueAnswers = Array.from(new Set(question.choices.map(choice => choice.answer)));

  const labelling = uniqueAnswers.map(answer => {
    return question.choices.filter(choice => choice.answer === answer).length;
  });

  const renderAnswers = () => {
    switch (question.type) {
      case QuestionType.Rating:
        const totalResponses = question.choices.reduce((acc, curr) => acc + curr.answer.length, 0);
        const averageRating = question.choices.reduce((acc, curr) => acc + (parseInt(curr.answer) * curr.answer.length), 0) / totalResponses;
        
        const chartData = {
          labels:labelling,
          datasets: [
            {
              label: 'Rating',
              data:dataLabels,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };

        const chartOptions = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Rating Distribution',
            },
          },
        };

        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{index + 1} . {question.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Rating Analysis</h3>
              <p className="text-lg mb-2">Average Rating: <span className="font-bold">{averageRating.toFixed(2)}</span></p>
              <p className="text-lg mb-4">Total Responses: <span className="font-bold">{totalResponses}</span></p>
              <div className="h-64">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Detailed Breakdown</h3>
              <div className="space-y-2">
                {question.choices.map((choice, index) => (
                  <div key={index}>
                    {identity && 
                      <div className='flex text-xs text-blue-900 items-center gap-2'>
                      <Avatar>
                        <AvatarImage src={choice.user?.image! ?? "/img/avatar.png"} alt={choice.user?.name} className='object-cover' />
                        <AvatarFallback>{choice.user?.name}</AvatarFallback>
                      </Avatar>
                      <p>{choice.user?.name}</p>
                    </div>
                    }
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Rating {choice.answer}:</span>
                      <span className="text-lg font-semibold">{choice.answer.length} ({((choice.answer.length / totalResponses) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case QuestionType.Multiple_Choice:
        const totalMCResponses = question.choices.length;

        const labels = question.choices.map(choice => choice.answer)
        const countArray = labels.map(answer => {
          return question.choices.filter(choice => choice.answer === answer).length;
        });
        
        
        const mcChartData = {
          labels,
          datasets: [
            {
              label: 'Number of Responses',
              data: countArray,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

        const mcChartOptions = {
          responsive: true,
          plugins: {
            legend: {
              position: 'right' as const,
            },
            title: {
              display: true,
              text: 'Response Distribution',
            },
          },
        };

        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{question.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Multiple Choice Analysis</h3>
              <p className="text-lg mb-4">Total Responses: <span className="font-bold">{totalMCResponses}</span></p>
              <div className="h-64">
                <Doughnut data={mcChartData} options={mcChartOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Detailed Breakdown</h3>
              <div className="space-y-2">
                {question.choices.map((choice, index) => (
                  <div key={index}>
                  {identity && 
                    <div className='flex text-xs text-blue-900 items-center gap-2'>
                    <Avatar>
                      <AvatarImage src={choice.user?.image! ?? "/img/avatar.png"} alt={choice.user?.name} className='object-cover' />
                      <AvatarFallback>{choice.user?.name}</AvatarFallback>
                    </Avatar>
                    <p>{choice.user?.name}</p>
                  </div>
                  }
                    <div className="flex justify-between items-center">
                      <span className="text-lg">{choice.answer}:</span>
                      <span className="text-lg font-semibold">{question.choices.filter(choice => choice.answer === choice.answer).length} ({((question.choices.filter(choice => choice.answer === choice.answer).length / totalMCResponses) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case QuestionType.Paragraph:
      case QuestionType.Short_Answer:
        const totalTextResponses = question.choices.length;
        const averageLength = question.choices.reduce((acc, curr) => acc + curr.answer.length, 0) / totalTextResponses;
        
        const wordFrequency = question.choices.reduce((acc, curr) => {
          const words = curr.answer.toLowerCase().split(/\s+/);
          words.forEach(word => {
            if (word.length > 3) {  // Only count words longer than 3 characters
              acc[word] = (acc[word] || 0) + 1;
            }
          });
          return acc;
        }, {} as Record<string, number>);

        const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]).slice(0, 10);

        const wordCloudData = {
          labels: sortedWords.map(([word]) => word),
          datasets: [{
            data: sortedWords.map(([, count]) => count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(201, 203, 207, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ],
          }]
        };

        const wordCloudOptions = {
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Most Frequent Words',
            },
          },
        };

        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{question.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Text Response Analysis</h3>
              <p className="text-lg mb-2">Total Responses: <span className="font-bold">{totalTextResponses}</span></p>
              <p className="text-lg mb-4">Average Response Length: <span className="font-bold">{averageLength.toFixed(1)} characters</span></p>
              <div className="h-64">
                <Doughnut data={wordCloudData} options={wordCloudOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Response Samples</h3>
              <ScrollArea className="h-64">
                {question.choices.slice(0, 5).map((choice, index) => (
                  <div key={index}>
             
                  {identity && 
                    <div className='text-xs text-blue-900 flex items-center gap-2'>
                    <Avatar>
                      <AvatarImage src={choice.user?.image! ?? "/img/avatar.png"} alt={choice.user?.name} className='object-cover' />
                      <AvatarFallback>{choice.user?.name}</AvatarFallback>
                    </Avatar>
                    <p>{choice.user?.name}</p>
                  </div>
                  }
                  <div className="mb-4 p-3 bg-gray-100 rounded">
                    <p className="text-sm text-gray-600">Response {index + 1}:</p>
                    <p className="text-base">{choice.answer}</p>
                  </div>
                  </div>
                  
                ))}
              </ScrollArea>
            </div>
          </div>
        );

      default:
        return <p>Unsupported question type</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      {renderAnswers()}
    </div>
  );
};

interface SurveyPreviewModalProps {
  title:string,
   description:string
   identity:boolean
  survey:Prisma.SurveyFormQuestionGetPayload<{
        include:{
          options:true,
          choices:{
            include:{
              user:true
            }
          }
        }
    }
     >[]
}



export default function SurveyPreviewModal({survey , title, description, identity}: SurveyPreviewModalProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Eye size={16} className="mr-1" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-6 max-h-[60vh]">
          <AnimatePresence>
            <motion.div
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            {survey?.map((question, index) => (
              <SurveyAnswerDisplay key={question.id} index={index} identity={identity} question={question} />
            ))}
             </motion.div>
          </AnimatePresence>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}