import { resolve } from 'path'
import React from 'react'
import { setTimeout } from 'timers'

const FeedPage = async () => {

    await new Promise(
        (resolve)=>{
            setTimeout(()=>{resolve(true)},5000)
        }
    )
  return (
    <div>
      News Feed
    </div>
  )
}

export default FeedPage
