import React from 'react'
import Users from './users/page'
import Invoices from './invoices/page'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex min-h-screen m-5'>
        <div className='w-56 border-2 p-5'>Sidebar</div>
        <div className='w-full border-2 p-5'>
           <div className='flex gap-5'>
             <Users/>
            <Invoices/>
           </div>
        </div>
    </div>
  )
}

export default DashboardLayout