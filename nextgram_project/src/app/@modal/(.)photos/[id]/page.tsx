import React from 'react'

const PhotoModal = async ({params}:{params:Promise<{id:string}>}) => {
    const photoId = (await params).id;
  return (
    <div>
      Photo Modal-{photoId}
    </div>
  )
}

export default PhotoModal
