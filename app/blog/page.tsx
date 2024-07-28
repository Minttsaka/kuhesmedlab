import AboutFooter from '@/components/AboutFooter'
import { BlogBlogList } from '@/components/BlogBLogList'
import BlogFirstSec from '@/components/BlogFirstSec'
import { BlogNav } from '@/components/blog-nav'
import React from 'react'

export default function page() {
  return (
    <div>
        <BlogFirstSec /> 
        <BlogNav />
        <BlogBlogList />
        <AboutFooter />
      
    </div>
  )
}
