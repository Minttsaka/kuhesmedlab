"use client"

import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { surveyAnalysis } from '@/lib/actions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface SurveyMetrics {
  totalResponses: number
  completionRate: number
  averageTimeTakenInMinutes: string
}

const SurveyBarAnalysis: React.FC<{surveyId:string}> = ({surveyId}) => {

  const [datas, setDatas] = useState<SurveyMetrics>()

  useEffect(()=>{

    const fetchData = async () => {
    const {
    completionRate,
    totalResponses,
    averageTimeTakenInMinutes
  } = await surveyAnalysis(surveyId)

  const allInfo = {
    completionRate,
    totalResponses,
    averageTimeTakenInMinutes
  }

  setDatas(allInfo)

}

fetchData()
  },[])


  const data = {
    labels: [
      'Total Responses',
      'Completion Rate (%)',
      'Avg. Time to Complete (min)',
    ],
    datasets: [
      {
        label: 'Survey Metrics',
        data: [
          datas?.totalResponses,
          datas?.completionRate,
          datas?.averageTimeTakenInMinutes,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Overall Survey Analysis',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Metrics'
        }
      }
    }
  }

  return (
    <Card className="w-full" id='overall'>
      <CardHeader>
        <CardTitle>Survey Overall Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:h-[400px] w-full">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}

export default SurveyBarAnalysis