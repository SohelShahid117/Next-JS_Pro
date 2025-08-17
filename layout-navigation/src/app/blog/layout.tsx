import React from 'react'

const BlogLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Blog layout</h1>
      <div className='flex justify-between'>
        {children}
        <div className='w-1/3'>Sidebar</div>
      </div>
    </div>
  )
}

export default BlogLayout
