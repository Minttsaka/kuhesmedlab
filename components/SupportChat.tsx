"use client"

import { useState, useEffect } from 'react'
import useSWR, { mutate } from 'swr'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Phone, Video, Plus } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import axios from 'axios'
import { User } from '@prisma/client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Textarea } from './ui/textarea'

const fetcher = async(url: string) => {
    const res = await axios.get(url)
    return res.data
}

interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: string
}

interface Chat {
  id: string
  topic:string
  user: {
    id: string
    name: string
    image: string
  }
  lastMessage: string
  unreadCount: number
}

const SupportChat = ({user}:{user:User}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [totalUnreadCount, setTotalUnreadCount] = useState(0)
  const [newChatMessage, setNewChatMessage] = useState('')
  const [newChatTopic, setNewChatTopic] = useState('general')

  const { data: chats, mutate:chatMutate, error: chatsError } = useSWR<Chat[]>('/api/chats', fetcher, {
    refreshInterval: 5000
  })

  const { data: messages,mutate:messageMutate, error: messagesError } = useSWR<ChatMessage[]>(
    `/api/chats/${selectedChat}`,
    fetcher,
    { refreshInterval: 1000 }
  )

  useEffect(() => {
    if (chats) {
      const count = chats.reduce((total, chat) => total + chat.unreadCount, 0)
      setTotalUnreadCount(count)
    }
  }, [chats])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleChatSelect = async (chatId: string) => {
    setSelectedChat(chatId)
    await axios.put(`/api/chats/${chatId}`)
    messageMutate()
  }

  const handleSendMessage = async () => {
    if (newMessage.trim() && selectedChat) {
      try {
        const response = await axios.post(`/api/chats/${selectedChat}`, {
          content: newMessage, 
          senderId: user.id 
        })
        if (response.data) {
          setNewMessage('')
          chatMutate()
          messageMutate()
          setNewChatMessage('')
        }
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  const handleNewChat = async () => {
    if (newChatMessage.trim()) {
      try {
        const response = await axios.post('/api/chats', {
            userId: user.id,
            message: newChatMessage,
            topic: newChatTopic
        })
        setNewChatMessage('')
        chatMutate()
      } catch (error) {
        console.error('Error creating new chat:', error)
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button with Unread Count */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={toggleSidebar}
              className="rounded-full w-14 h-14 flex items-center justify-center relative"
              variant="default"
            >
              {isSidebarOpen ? <X size={24} /> : <MessageCircle size={24} />}
              {totalUnreadCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute bg-[green] -top-2 -right-2 px-2 py-1 text-xs"
                >
                  {totalUnreadCount}
                </Badge>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isSidebarOpen ? 'Close Support Chat' : 'Open Support Chat'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="absolute bottom-16 bg-white right-0 w-80 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b bg-blue-900 text-primary-foreground flex justify-between items-center">
            <h2 className="text-lg font-semibold">Support Chats</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                  <Plus size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] border-none">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-4">Start a New Chat</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-lg font-medium">Select a Topic</Label>
                    <RadioGroup id="topic" value={newChatTopic} onValueChange={setNewChatTopic} className="grid grid-cols-2 gap-4">
                      {['general', 'technical', 'feedback'].map((topic) => (
                        <div key={topic}>
                          <RadioGroupItem
                            value={topic}
                            id={topic}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={topic}
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                          >
                            {topic.charAt(0).toUpperCase() + topic.slice(1)}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg font-medium">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      value={newChatMessage}
                      onChange={(e) => setNewChatMessage(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button onClick={handleNewChat} className="w-full">
                    Start Chat
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-96">
            {chatsError ? (
              <p className="p-4 text-destructive">Failed to load chats</p>
            ) : !chats ? (
              <p className="p-4">Loading chats...</p>
            ) : (
              <ul>
                {chats.map((chat) => (
                  <li
                    key={chat.id}
                    className={`p-4 hover:bg-accent cursor-pointer transition-colors duration-200 ${
                      selectedChat === chat.id ? 'bg-accent' : ''
                    }`}
                    onClick={() => handleChatSelect(chat.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{chat.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{chat.topic}</p>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unreadCount > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {chat.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
        </div>
      )}

      {/* Individual Chat Popup */}
      {selectedChat && (
        <div className="fixed bottom-4 right-96 w-96 h-[32rem] rounded-lg bg-white shadow-lg flex flex-col">
          <div className="p-4 border-b flex justify-between items-center rounded-lg bg-blue-900 text-primary-foreground">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={chats?.find(chat => chat.id === selectedChat)?.user.image ?? '/img/avatar.png'} alt={chats?.find(chat => chat.id === selectedChat)?.user.name} />
                <AvatarFallback>{chats?.find(chat => chat.id === selectedChat)?.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">
                {chats?.find(chat => chat.id === selectedChat)?.topic}
              </h3>
            </div>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-primary-foreground" onClick={() => setSelectedChat(null)}>
                      <X size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Close chat</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            {messagesError ? (
              <p className="text-destructive">Failed to load messages</p>
            ) : !messages ? (
              <p>Loading messages...</p>
            ) : (
              <ul className="space-y-4">
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className={`flex ${
                      message.senderId === user.id ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.senderId === user.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex space-x-2"
            >
              <Input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button type="submit" size="icon">
                      <Send size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send message</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SupportChat