import { redirect } from 'next/navigation';
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  console.log("template.tsx rendered...")
    // const isLoggedIn = false;
    const isLoggedIn = true;
    if(!isLoggedIn){
      
      redirect("/login")
    }
  return (
    <div className='space-y-5 m-5'>
      <h1>DashboardLayout</h1>
      <div className='border p-5' >
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
