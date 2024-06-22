import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className='flex items-center justify-between pt-5 pb-3 px-28 
    text-sm border-b '>
    
      <Logo></Logo>
      
      <ul className='flex ml-16 gap-5'>
        <li>All articles</li>
        <li>Culture</li>
        <li>Sports</li>
        <li>Traveling</li>
      </ul>
  
      <div className='flex gap-5 items-center'>
        <Link href={"/about"}>About</Link>
        <Button className='bg-dgreen'>Subscribe</Button>
      </div>
    </nav>
  )
}

export default Navbar