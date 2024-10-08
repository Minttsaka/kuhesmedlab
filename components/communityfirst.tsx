/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RnoEowEcYAe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Cabin } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

cabin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export function Communityfirst() {
  return (
    <div className="flex flex-col bg-[#2a2e7c] min-h-screen bg-">
       <div className="flex justify-between mx-6 mt-10 text-white gap-5 items-center">
              <h2 className="font-bold">
                kuhesmedlab
              </h2>
              <Input
                  placeholder="Search forums..."
                  className="bg-muted text-gray-500 rounded-full border-none shadow w-full"
                /> 
                <div className="flex bg-blue-400 rounded-full p-2 text-white items-center gap-3">
                  <Plus className="h-4 w-4" />
                  Create
                </div>
            </div>

      <main className="flex-1 bg-white rounded-3xl m-20 py-8">
        <div className="container mx-auto grid grid-cols-1 gap-8">
        {/**/}
           
          <div>
            <div className="flex items-center mt-20 justify-between mb-4">
              <h1 className="text-2xl font-bold">Latest Discussions</h1>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FilterIcon className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Latest</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Popular</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Unanswered</DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>Diagnostics</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Instrumentation</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Quality Assurance</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ListOrderedIcon className="w-4 h-4 mr-2" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value="latest">
                      <DropdownMenuRadioItem value="latest">Latest</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border-t bg-gray-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-muted-foreground text-sm">2 days ago</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Diagnostics</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">Troubleshooting PCR Instrument Issues</h3>
                  <p className="text-muted-foreground">
                    Im having trouble with my PCR instrument. The results are inconsistent and Im not sure what the
                    issue is. Any advice would be greatly appreciated.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">12 replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">1.2K views</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="border-t">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Anderson</div>
                        <div className="text-muted-foreground text-sm">1 week ago</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Instrumentation</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">Recommendations for Automated Hematology Analyzers</h3>
                  <p className="text-muted-foreground">
                    Im looking to upgrade our hematology analyzer. Can anyone recommend a reliable and user-friendly
                    model? Id appreciate any insights from experienced lab professionals.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">8 replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">850 views</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="border-t">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>LM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Lisa Martinez</div>
                        <div className="text-muted-foreground text-sm">3 days ago</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Quality Assurance</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">Best Practices for Implementing a QMS in the Lab</h3>
                  <p className="text-muted-foreground">
                    Im setting up a new quality management system (QMS) in our lab. Can anyone share their experiences
                    and recommendations for a successful implementation? I want to make sure we cover all the bases.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">6 replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">450 views</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="border-t">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                    <span>Troubleshooting PCR Instrument Issues</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                    <span>Recommendations for Automated Hematology Analyzers</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                    <span>Best Practices for Implementing a QMS in the Lab</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                    <span>Validating New Lab Equipment: Tips and Tricks</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                    <span>Proficiency Testing: Ensuring Accurate Results</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-t">
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">John Doe</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Sarah Anderson</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>LM</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Lisa Martinez</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">James Brown</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Emily Martinez</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Robert Johnson</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </main>
      
    </div>
  )
}

function EyeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function FileTextIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function FilterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function FlaskRoundIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <path d="M5.52 16h12.96" />
    </svg>
  )
}


function ListOrderedIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PlusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
