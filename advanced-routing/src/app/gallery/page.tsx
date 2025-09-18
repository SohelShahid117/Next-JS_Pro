import Link from 'next/link'
import React from 'react'

const GalleryPage = () => {
  return (
    <div>
        <h1 className='text-3xl mb-4'>Gallery Page</h1>
        <Link href="/gallery/photos" className='bg-amber-50 px-5 py-2'>go to Photos</Link>
    </div>
  )
}

export default GalleryPage