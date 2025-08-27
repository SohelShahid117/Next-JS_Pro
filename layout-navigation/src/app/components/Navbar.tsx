import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const navitems = [
    {name:"Home",href:"/"},
    {name:"About",href:"/about"},
    {name:"contact",href:"/contact"},
    {name:"Blog",href:"/blog"},
  ]
  return (
    <header>
      <div>
        <Link href='/'>bike Share</Link>
        <nav>
          <ul className='flex gap-5'>
            
            {
              navitems.map((item,i)=><li key={i}><Link href={`${item.href}`}>{item.name}</Link></li>)
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
