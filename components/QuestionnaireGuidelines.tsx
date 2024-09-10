import { SetStateAction, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Clock, Shield, List, Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

export default function QuestionnaireGuidelines({identity,time, guides,setIsIntro}:{setIsIntro:React.Dispatch<SetStateAction<boolean>>,identity:boolean,time:number, guides:string}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const guidelines = [
    {
      title:`${identity ? "Identity Verification" : "Identity is not Required"}`,
      description: `${identity ? "This survey will require some of your personal identifications like your name or some other personal details. Your personal details will remain confidential." : "This survey will not require your personal or confidential identification"}`,
      icon: <Shield className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Questionnaire Process",
      description: (<div
      className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: guides }}
        />),
      icon: <List className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Estimated Time",
      description: `The questionnaire typically takes ${time} minutes to
       complete. Please ensure you have enough uninterrupted
        time to finish the process.`,
      icon: <Clock className="w-12 h-12 text-purple-500" />,
    },
    {
      title: "Data Usage",
      description: "Your responses will be used for research purposes only. All data is anonymized and stored securely in compliance with data protection regulations.",
      icon: <Shield className="w-12 h-12 text-red-500" />,
    },
  ]

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, guidelines.length))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-3xl w-full relative overflow-hidden`}
      >
        <h1 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Questionnaire Guidelines</h1>
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {guidelines.map((_, index) => (
              <motion.div
                key={index}
                className={`w-1/4 h-1 rounded-full ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
                initial={false}
                animate={{ backgroundColor: index <= currentStep ? '#3B82F6' : '#D1D5DB' }}
              />
            ))}
          </div>
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Step {currentStep + 1} of {guidelines.length}
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              {guidelines[currentStep].icon}
            </div>
            <h2 className={`text-2xl font-semibold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {guidelines[currentStep].title}
            </h2>
            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {guidelines[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between">
          <Button
            variant={darkMode ? "outline" : "secondary"}
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          <Button
            variant={darkMode ? "outline" : "secondary"}
            onClick={nextStep}
            disabled={currentStep === guidelines.length - 1}
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        {currentStep === guidelines.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <Button className="w-full" onClick={() =>  setIsIntro(false)}>
              Get Started <Check className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </motion.div>
  )
}