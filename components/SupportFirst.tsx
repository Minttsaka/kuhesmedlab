"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Phone, Mail, MessageSquare, PlayCircle, Users, ChevronRight, FileText, Database, BarChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Support } from '@prisma/client'
import { useRouter } from "next/navigation"
import { KeyboardEvent, useState } from "react"

export default function SupportPage({supports,popularSupport}:{supports:Support[], popularSupport:Support[]}) {

  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/support/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">
        <section className="relative h-[50vh] bg-black overflow-hidden">
      <Image
        src="/img/bg.png"
        alt="Background Image"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">How can we help you?</h1>
        <div className="w-full max-w-2xl flex">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for support topics..."
            className="flex-grow rounded-r-none bg-white/10 text-white placeholder-white/70 border-white/20 focus:border-white/50"
          />
          <Button onClick={handleSearch} className="rounded-l-none bg-blue-600 hover:bg-blue-700">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
        <p className="mt-4 text-white/80">
          Popular topics: Genomic Analysis, Clinical Trials, Data Integration
        </p>
      </div>
    </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supports.map((item) => (
              <Card key={item.title} className="border-t-4 border-t-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={`/support/${item.slug}`} className="w-full flex items-center gap-2 text-xs text-blue-600 hover:bg-blue-50">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-sm text-green-700">
                  <Phone className="mr-2" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">Call us at: +265 991 63 20 88</p>
                <p className="text-sm text-green-500 mt-2">Available Mon-Fri, 9am-5pm</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center text-sm text-blue-700">
                  <Mail className="mr-2" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">Email us at: support@kuhesmedlab.com</p>
                <p className="text-sm text-blue-500 mt-2">We will respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center text-sm text-purple-700">
                  <MessageSquare className="mr-2" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Chat</Button>
                <p className="text-sm text-purple-500 mt-2">Available 24/7 for urgent issues</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Knowledge Base</h2>
          <Tabs defaultValue="getting-started">
            <TabsList className="bg-blue-100">
              <TabsTrigger value="getting-started" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Getting Started</TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Popular Topics</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started" className="text-blue-700">
              <ul className="list-disc pl-5 space-y-2">
              {supports.map((item) => (
                <Link key={item.id} href={`/support/${item.slug}`}>
                  <li >{item.title}</li>
                </Link>
              ))}

              </ul>
            </TabsContent>
            <TabsContent value="advanced" className="text-blue-700">
              <ul className="list-disc pl-5 space-y-2">
              {popularSupport?.map((item) => (
                <Link key={item.id} href={`/support/${item.slug}`}>
                  <li >{item.title}</li>
                </Link>
              ))}
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Video Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'NGS Data Analysis Workflow',
              'Biomarker Discovery Techniques',
              'Integrating Clinical Data'
            ].map((title) => (
              <Card key={title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-blue-200 flex items-center justify-center">
                    <PlayCircle size={48} className="text-blue-600" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-700">{title}</h3>
                    <p className="text-sm text-blue-600">Learn advanced techniques for medical research</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Community Forum</h2>
          <Card className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="mr-2" />
                <h3 className="text-lg font-semibold">Join the MedLab Research Community</h3>
              </div>
              <p className="mb-4">Connect with fellow researchers, share insights, and collaborate on cutting-edge medical studies.</p>
              <Link href={'/community/feed'} className="bg-white p-3 text-blue-600 hover:bg-blue-50">Visit Forum</Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}