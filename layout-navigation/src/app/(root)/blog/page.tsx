
import Link from 'next/link'
import React from 'react'

const blogPosts = [
    {
        id:1,
        title:"Learn Next JS",
        slug:"Next-JS-course",
        from:"homepage"
    },
    {
        id:2,
        title:"Learn React",
        slug:"React-course",
        from:"W3 School"
    },
    {
        id:3,
        title:"Learn Tailwind CSS",
        slug:"Tailwind-CSS-course",
        from:"newsletter"
    },
   
]

const BlogPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Single Blog Page</h1>
      <ul className='space-y-5'>
        {blogPosts.map((post,i)=><li key={i}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default BlogPage
