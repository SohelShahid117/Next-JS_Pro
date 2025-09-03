"use client"

import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'

const Logout = () => {
    const router = useRouter()
    const handleLogout = () =>{
        console.log("logout clicked")
        router.push("/")
    }
  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
