import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, XCircle, Coffee, Book } from 'lucide-react'
import { motion } from "framer-motion"
import { toast } from './ui/use-toast'
import axios from 'axios'

export default function RequestApproval({id}:{id:string}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEligible, setIsEligible] = useState(true)

  const handleSubmit = async () => {
    if (!isEligible) {
        toast({
            title: "Not Eligible",
            description: "Please make sure you meet all the conditions before submitting.",
            variant: "destructive",
          })
      return
    }

    setIsSubmitting(true)
    axios.post(`/api/research/${id}`,{
        status:"PENDING"
    })
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast({
        title: "Yay! Submission Successful",
        description: "Your research paper is now in line for approval. Time for a coffee break! ☕",
      })
  }

  const conditions = [
    "Your paper is groundbreaking (or at least you think so)",
    "You've checked for typos at least thrice",
    "Your citations are on point (no Wikipedia, please)",
    "You've consumed at least 5 cups of coffee while writing"
  ]

  return (
    <section className=" text-white px-4">
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg w-full">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8 text-center"
        >
          <h2 className="text-3xl font-extrabold mb-6">
            Ready to Rock the Academic World?
          </h2>
          <div className="space-y-4 mb-8 text-left">
            {conditions.map((condition, index) => (
              <motion.div 
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <input 
                  type="checkbox" 
                  id={`condition-${index}`} 
                  className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-400 focus:ring-opacity-25 bg-blue-900 border-blue-700"
                  onChange={(e) => setIsEligible(e.target.checked)}
                />
                <label htmlFor={`condition-${index}`} className="text-sm">{condition}</label>
              </motion.div>
            ))}
          </div>
          {!isSubmitted ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                disabled={isSubmitting || !isEligible}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Upload className="animate-bounce mr-2" size={20} />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Upload className="mr-2" size={20} />
                    Submit for Approval
                  </span>
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-400" />
              <h3 className="text-xl font-medium">Woohoo! Paper Submitted!</h3>
              <p className="text-blue-200">
                Your masterpiece is on its way to greatness.!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <Coffee className="mr-2" size={20} />
                  Celebrate with Coffee
                </Button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}