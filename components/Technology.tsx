"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, FileSearch, ClipboardList, LineChart, Microscope, ExternalLink } from "lucide-react"
import { ReactNode } from 'react';

interface TechCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  gradient: string;
}



export default function TechnologyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-white">
      {/* <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;700&display=swap');

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Orbitron', sans-serif;
        }

        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}

      <header className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-500 opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative  mt-20 z-10">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Cutting-Edge Technology at Kuhesmedlab
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            In collaboration with Dctfusion, we are leveraging advanced generative AI to revolutionize medical research and data interpretation.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TechCard
            icon={<Brain className="w-12 h-12" />}
            title="Generative AI for Data Interpretation"
            description="Our AI models analyze complex survey data and research findings, providing deep insights and correlations that might be missed by traditional methods."
            gradient="from-blue-600 to-cyan-400"
          >
            <ul className="list-disc list-inside">
              <li>Rapid analysis of large datasets</li>
              <li>Identification of subtle patterns and trends</li>
              <li>Cross-referencing with existing medical literature</li>
              <li>Generation of hypotheses for further investigation</li>
            </ul>
          </TechCard>

          <TechCard
            icon={<FileSearch className="w-12 h-12" />}
            title="AI-Assisted Research Formatting"
            description="Our AI streamlines the process of formatting research papers and references, ensuring consistency and adherence to various academic standards."
            gradient="from-purple-600 to-pink-400"
          >
            <ul className="list-disc list-inside">
              <li>Automatic citation generation in multiple styles</li>
              <li>Intelligent structuring of research papers</li>
            </ul>
          </TechCard>

          <TechCard
            icon={<ClipboardList className="w-12 h-12" />}
            title="Generative Survey Assistance"
            description="Our AI helps researchers create more effective and targeted surveys by generating relevant questions and optimizing survey structure."
            gradient="from-green-600 to-teal-400"
          >
            <ul className="list-disc list-inside">
              <li>Generation of unbiased, clear, and concise questions</li>
              <li>Suggestion of question types based on research goals</li>
              <li>Identification of potential survey biases</li>
              <li>Adaptive questioning based on previous responses</li>
            </ul>
          </TechCard>

          <TechCard
            icon={<Bot className="w-12 h-12" />}
            title="AI Chatbot Assistant"
            description="Our intelligent chatbot provides instant support to researchers, answering queries and guiding them through complex processes."
            gradient="from-yellow-600 to-orange-400"
          >
            <ul className="list-disc list-inside">
              <li>24/7 availability for research-related queries</li>
              <li>Access to vast medical databases for quick information retrieval</li>
              <li>Guidance on research methodologies and best practices</li>
              <li>Personalized assistance based on researchers profile and project</li>
            </ul>
          </TechCard>

          <TechCard
            icon={<LineChart className="w-12 h-12" />}
            title="Predictive Modeling"
            description="We are developing advanced AI models to predict various medical outcomes and research trends."
            gradient="from-red-600 to-pink-400"
          >
            <ul className="list-disc list-inside">
              <li>Disease progression prediction based on patient data</li>
              <li>Forecasting of potential epidemic outbreaks</li>
              <li>Prediction of drug efficacy for personalized medicine</li>
              <li>Trend analysis for future research focus areas</li>
            </ul>
          </TechCard>

          <TechCard
            icon={<Microscope className="w-12 h-12" />}
            title="Future Innovations with DCTFusion"
            description="Our ongoing collaboration with DCTFusion is paving the way for groundbreaking advancements in medical research technology."
            gradient="from-indigo-600 to-blue-400"
          >
            <ul className="list-disc list-inside">
              <li>Development of AI-powered diagnostic tools</li>
              <li>Integration of quantum computing for complex simulations</li>
              <li>Creation of virtual reality environments for medical training</li>
              <li>Exploration of AI-driven drug discovery processes</li>
            </ul>
          </TechCard>
        </div>

        <div className="mt-16 text-center bg-gray-800 bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Our Commitment to Ethical AI
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            As we push the boundaries of medical research with AI, we remain committed to ethical practices, data privacy, and transparency. Our collaboration with DCTFusion ensures that all AI models are developed and deployed with the highest standards of integrity and scientific rigor.
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 py-1 mt-12">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://dctfusion.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex text-xs items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Learn more about Dctfusion
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description, children, gradient }) => {
  return (
    <Card className={`bg-gradient-to-br ${gradient} text-white overflow-hidden transition-transform duration-300 hover:scale-105`}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-white bg-opacity-20 p-3 rounded-full">
          {icon}
        </div>
        <div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-200">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

