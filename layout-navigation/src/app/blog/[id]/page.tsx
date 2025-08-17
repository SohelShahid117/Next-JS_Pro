import React from 'react'

const SingleBlog = async ({params}:{params:{id:string}}) => {
// const SingleBlog =  () => {
    const {id} = await params;
    console.log("id is :" ,id)
  return (
    <div>
      Single Blog - {id}
    </div>
  )
}

export default SingleBlog
