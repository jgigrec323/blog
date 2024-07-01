import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'
import NavlinksItem from './NavlinksItem'
import MobileNavigation from './MobileNavigation'

function Navbar() {
  return (
    <nav className='flex items-center justify-between pt-5 pb-3 lg:px-28 sm:px-16 px-10
    text-sm border-b '>
    
      <Logo></Logo>

      {/* mobile */}
      <MobileNavigation></MobileNavigation>
      
     <NavlinksItem></NavlinksItem>
  
      <div className='md:flex gap-5 items-center hidden'>
        <Link href={"/about"}>About</Link>
        <Button variant={"outline"} className='bg-dgreen text-dgreen-foreground'>Subscribe</Button>
      </div>
    </nav>
  )
}

export default Navbar