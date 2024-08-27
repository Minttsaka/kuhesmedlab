"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react"
import { Bell, X, Search, CheckCircle2, AlertCircle, InfoIcon, AlertTriangle, Trash2, MoreVertical, BellIcon, CheckCircle } from "lucide-react"
import axios from "axios"
import { Notification, User } from "@prisma/client"
import { useSession } from "next-auth/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const notificationTypes = {
  info: { icon: InfoIcon, color: "blue" },
  success: { icon: CheckCircle2, color: "green" },
  warning: { icon: AlertTriangle, color: "yellow" },
  error: { icon: AlertCircle, color: "red" },
}

const initialNotifications = [
  { id: 1, type: "info", title: "New feature available", message: "Check out our latest update!", time: "2 minutes ago", read: false },
  { id: 2, type: "success", title: "Project completed", message: "Your project 'Awesome App' is now live.", time: "1 hour ago", read: false },
  { id: 3, type: "warning", title: "Storage limit approaching", message: "You're using 80% of your storage space.", time: "3 hours ago", read: false },
  { id: 4, type: "error", title: "Payment failed", message: "Your last payment couldn't be processed.", time: "1 day ago", read: false },
  { id: 5, type: "info", title: "New message", message: "You have a new message from John Doe.", time: "2 days ago", read: true },
]

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [filter, setFilter] = useState("all")

  const {data:session } = useSession()

  const user = session?.user as User

  console.log("this is user", user, "id",user?.id)

  useEffect(()=>{
    const fetchNotifications = async() =>{
      try {
        const res =await axios.get(`/api/notification/${user?.id}`)
        console.log(res.data, "notifications")
        setNotifications(res.data)
        
      } catch (error) {
        
      }
     
    }

    fetchNotifications()
  },[user])

  const unreadCount = notifications.filter(n => !n.readAt!==null).length

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === "all" || (filter === "unread" && !notification.readAt)
    return matchesSearch && matchesFilter
  })

  const markAsRead = (id:string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const deleteNotification = (id:string) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  useEffect(() => {
    const handleEsc = (event:any) => {
      if (event.keyCode === 27) setIsOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(true)} variant="ghost" size="icon" className="relative bg-white text-gray-500">
        <BellIcon className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {unreadCount}
          </Badge>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 flex justify-between items-center border-b border-gray-700">
                <h2 className="text-2xl font-bold">Notifications</h2>
                <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="p-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search notifications..."
                    className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <select
                    className="bg-gray-800 border-gray-700 text-white rounded-md p-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                  </select>
                  <Button onClick={markAllAsRead} variant="outline" size="sm" className="text-sm">
                    Mark all as read
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-grow">
                <div className="p-4 space-y-4">
                  {filteredNotifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`relative p-4 rounded-lg ${
                        notification.readAt ? 'bg-gray-800' : 'bg-gray-750'
                      } hover:bg-gray-700 transition-colors duration-200`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* <div className={`p-2 rounded-full bg-${notificationTypes[notification.type].color}-500 bg-opacity-20`}>
                          {React.createElement(notificationTypes[notification.type].icon, {
                            className: `h-6 w-6 text-${notificationTypes[notification.type].color}-400`
                          })}
                        </div> */}
                        <div className="flex-grow">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <p className="text-sm text-gray-400">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{new Date(notification.createdAt).toDateString()}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Button
                            onClick={() => deleteNotification(notification.id)}
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-red-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      {!notification.readAt && (
                        <div
                          className="absolute top-0 right-0 w-3 h-3 rounded-full bg-blue-500 transform translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                      <motion.div
                        initial={false}
                        animate={{ scaleX: notification.readAt ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                      <div className="mt-2 flex justify-end">
                      <Button
                          onClick={() => {
                            setSelectedNotification(notification);
                            markAsRead(notification.id);
                            setIsDetailOpen(true);
                          }}
                          variant="ghost"
                          size="sm"
                          className="text-xs text-gray-400 hover:text-white"
                        >
                          View
                        </Button>
                        <Button
                          onClick={() => markAsRead(notification.id)}
                          variant="ghost"
                          size="sm"
                          className="text-xs text-gray-400 hover:text-white"
                        >
                          Mark as read
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
              <DialogContent className="sm:max-w-4xl bg-gradient-to-br from-purple-50 to-pink-50">
                <DialogHeader>
                  <DialogTitle className="text-purple-800 flex items-center gap-2">
                    {/* {selectedNotification && iconMap[selectedNotification.type]} */}
                    {selectedNotification?.title}
                  </DialogTitle>
                </DialogHeader>
                {selectedNotification && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div
                        dangerouslySetInnerHTML={{ __html: selectedNotification.content }}
                      />
                    <p className="text-sm text-gray-600">{new Date(selectedNotification.createdAt).toDateString()}</p>
                    <div className="flex justify-end mt-4 space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-100"
                        onClick={() => markAsRead(selectedNotification.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Read
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-100"
                        onClick={() => deleteNotification(selectedNotification.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </motion.div>
                )}
              </DialogContent>
            </Dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}