import React from 'react'

const SingleBlogPage = ({params}) => {
    console.log(params)
    const {slug} = params;
    console.log(slug)
  return (
    <div>
      Single Blog Page : {slug}
    </div>
  )
}

export default SingleBlogPage
