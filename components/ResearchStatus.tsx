import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react'
import { motion } from "framer-motion"
import { changeStatus } from '@/lib/actions'
import { useRouter } from 'next/navigation'

type Status = "DEVELOPMENT" |"APPROVED" |"PENDING" |"DISAPPROVED"

export default async function ResearchStatus({id}:{id:string}) {
  const [status, setStatus] = useState<Status>('PENDING')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const statusChange = async()=>{

    const data = {
      status:"DEVELOPMENT"
    }

    try {
      setIsLoading(true)
      await changeStatus(id, data)
      router.refresh()
    
    } catch (error) {
      
    } finally{
      setIsLoading(false)
    }
  }

  const statusConfig = {
    DEVELOPMENT: {
      icon:Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
      message: "Your research paper is in development.",
    },
    APPROVED: {
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-100",
      borderColor: "border-green-500",
      message: "Congratulations! Your research paper has been approved.",
    },
    PENDING: {
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
      message: "Your research paper is currently under review.",
    },
    DISAPPROVED: {
      icon: XCircle,
      color: "text-red-500",
      bgColor: "bg-red-100",
      borderColor: "border-red-500",
      message: "Unfortunately, your research paper was not approved.",
    },
  };

  const { icon: StatusIcon, color, bgColor, borderColor, message } = statusConfig[status]

  return (
    <section className=" text-white px-4 ">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gradient-to-br from-blue-900 to-purple-900 backdrop-blur-lg rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center">Research Paper Status</h2>
        <div className={`${bgColor} ${borderColor} border-2 rounded-lg p-6 mb-6`}>
          <div className="flex items-center justify-center mb-4">
            <StatusIcon className={`h-12 w-12 ${color}`} />
          </div>
          <Badge 
            variant="outline" 
            className={`${color} ${borderColor} border-2 mx-auto mb-4 px-4 py-1 text-sm font-semibold uppercase`}
          >
            {status}
          </Badge>
          <p className={`text-center ${color} font-medium`}>{message}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            disabled={isLoading}
            onClick={statusChange}
          >
            <RefreshCw className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} size={20} />
            {isLoading ? 'Cancelling...' : 'Cancel'}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}