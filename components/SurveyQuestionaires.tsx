"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, Edit, Trash2, Download, Eye } from 'lucide-react'
import { Button } from './ui/button'

export default function SurveyQuestionnaire() {
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [filter, setFilter] = useState('all')

  const questionnaires = [
    { id: 1, title: 'COVID-19 Symptoms Survey', status: 'active', importance: 'high', responses: 1234 },
    { id: 2, title: 'Mental Health Assessment', status: 'draft', importance: 'medium', responses: 0 },
    { id: 3, title: 'Dietary Habits Questionnaire', status: 'archived', importance: 'low', responses: 567 },
    { id: 4, title: 'Physical Activity Tracker', status: 'active', importance: 'medium', responses: 890 },
    { id: 5, title: 'Sleep Quality Evaluation', status: 'active', importance: 'high', responses: 432 },
  ]

  const filteredQuestionnaires = questionnaires.filter(q => 
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || q.status === filter)
  )

  return (
    <div className={`flex flex-col min-h-screen p-2 md:p-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="lg:text-4xl font-bold text-gray-800 mb-8">Medical Research Questionnaires</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <Button variant="default" className="flex items-center space-x-2">
              <Plus size={20} />
              <span>New Questionnaire</span>
            </Button>
          </div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestionnaires.map((questionnaire) => (
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
                  <h2 className="text-xl font-semibold text-gray-800">{questionnaire.title}</h2>
                  <StatusBadge status={questionnaire.status} />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <ImportanceDot importance={questionnaire.importance} />
                  <span>{questionnaire.importance} importance</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {questionnaire.responses.toLocaleString()}
                  <span className="text-sm font-normal text-gray-600 ml-2">responses</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye size={16} className="mr-1" />
                      Preview
                    </Button>
                  </div>
                  <div className="space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 size={16} />
                    </Button>
                  </div>
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