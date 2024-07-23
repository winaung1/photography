import React from 'react'
import { BlogSection } from '../Components/Blogs/BlogSection'
import { FeaturedBlog } from '../Components/Blogs/FeaturedBlog'
import { RecentBlog } from '../Components/Blogs/RecentBlog'

export const Blog = () => {
  return (
    <div>
      <BlogSection/>
      <FeaturedBlog/>
      <RecentBlog/>
    </div>
  )
}
