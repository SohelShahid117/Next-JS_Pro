import React from 'react'

const PhotosPage = async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id;
  return (
    <div className='card'>
      Photos Page is - {id}
    </div>
  )
}

export default PhotosPage
