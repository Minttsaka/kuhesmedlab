import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, AlertCircle } from 'lucide-react'

export function NoEvents({eventType}:{eventType:string}) {
  return (
    <div className="container mx-auto p-6 sm:p-10">
      <Card className="w-full max-w-2xl mx-auto bg-white">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">No Upcoming {eventType} Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              There are currently no scheduled events. Our team is working on planning exciting new events for the future.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-sm text-yellow-700">
                  Stay tuned for updates on our upcoming events. We will be adding new events soon!
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                In the meantime, you can:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {/* <li>Check out our past event recordings</li> */}
                <li>Subscribe to our newsletter for event notifications</li>
                <li>Follow us on social media for the latest updates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}