
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  console.log("dashboard home page rendered...")
  const isLoggedIn = false;
  if(!isLoggedIn){
    
    redirect("/login")
  }
  return (
    <div>
      Dashboard
    </div>
  )
}

export default page
