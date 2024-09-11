"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bold, Italic, List, Image as ImageIcon, Link, Tag, Eye, Save, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import "react-quill/dist/quill.bubble.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Post } from "@prisma/client"
import axios from "axios"
import { useToast } from "./ui/use-toast"
import { savePost } from "@/lib/actions"
import { formats, modules } from "@/lib/quillModules"
import ReactQuill from "react-quill"
import { useSession } from "next-auth/react"
import { AspectRatio } from "./ui/aspect-ratio"
import { uploadToS3 } from "@/lib/s3"

export default function CreateBlogPost() {

  const {data:session} = useSession()
  const user = session?.user
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [previewMode, setPreviewMode] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast()

  const [newPost, setNewPost] = useState<Partial<Post>>({})
  const [value, setValue] = useState("");

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const res = await uploadToS3(file)
      setNewPost({ ...newPost, img: res?.fileKey as string })
    }
  }

  const slugify = (str:string) =>str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");

  const handleSavePost = async() => {

    console.log(newPost)

    try {
      if (newPost.title && tags.length > 0 &&  value) {
        const eventToSave = {
          ...newPost,
          body:value,
          tag:JSON.stringify(tags),
          slug:slugify(newPost.title)
        } as Post
        setIsSubmitting(true)
       const res = await savePost(eventToSave)
        if (res=="failed"){
        toast({
          title: "Post Failed",
          description: "Your Post has not been created. Try again",
        })
      } 
      if (res=="slug"){
        toast({
          title: "Title issue",
          description: "Change your title",
        })
        
      }
  
      toast({
        title: "Post Saved",
        description: "Your Post has been successfully created.",
      })
        
      } else {
        toast({
          title: "Incomplete Event Details",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
      }
      
    } catch (error) {
      
    } finally {
      setIsSubmitting(false)
  
    }

    
  } 

  return (
    <div className="min-h-screen bg-gray-100 px-1 pt-20">
      <Card className="max-w-4xl mx-auto bg-transparent">
        <CardContent>
          <h1 className="text-xl font-bold text-blue-800 mb-6">Create Post</h1>
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="edit" onClick={() => setPreviewMode(false)}>
                <Bold className="w-4 h-4 mr-2" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" onClick={() => setPreviewMode(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <div className="space-y-4">
                <Input
                  placeholder="Enter your blog post title"
                  name="title"
                  value={newPost.title || ''}
                  onChange={handleInputChange}
                  className="text-2xl font-semibold rounded-full border-none shadow-none"
                />
                <div className="flex space-x-2 mb-2">
                <Input
                    type="file"
                    id="image"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                   <Button variant="outline"  size="icon">
                    <label htmlFor="image" className="cursor-pointer">
                      <ImageIcon className="h-4 w-4" />
                    </label>
                  </Button>
                  {newPost.img && <img src={newPost.img} className='object-center h-10 w-10 rounded-lg object-cover'/>}
                </div>
                <p className="text-xs text-gray-500">This is rich text editor. Highlight the text to format.</p>
                <ReactQuill
                    className="h-[60vh] z-50 bg-white  mx-2 placeholder:text-2xl outline-none"
                    theme="bubble"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                  />
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-blue-500" />
                  <Input
                    placeholder="Add tags..."
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    className="flex-grow border-none shadow-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  />
                  <Button onClick={handleAddTag}>Add Tag</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="secondary" className="px-2 py-1 text-sm">
                        {tag}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 h-4 w-4 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">{newPost.title || "Your Blog Post Title"}</h2>
                  <div className="flex items-center text-xs space-x-4 mb-6">
                    <Avatar>
                      <AvatarImage src={user?.image ?? "/img/avatar.png" }alt="Author" />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user?.name}</p>
                      <p className="text-gray-500">Posted on {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                    <div className="w-full bg-black">
                    {newPost.img && 
                      <img src={newPost.img} className='object-center w-full h-[30vh] rounded-lg object-contain'/>
                    }
                    </div>
                  <div
                    className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                 
                  <div className="flex flex-wrap gap-2 mt-6">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="px-2 py-1 text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="flex justify-end mt-6">
            <Button
            onClick={handleSavePost}
             className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
             disabled={isSubmitting}
             >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'Publish Post'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}