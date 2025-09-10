import React from 'react'

type  Props = {
    params : Promise<{id:string}>
} 
const FeedDetails =async ({params}:Props) => {
    const {id} = await params
    console.log("id is : ",id)
  return (
    <div>Feed Details : {id}</div>
  )
}

export default FeedDetails