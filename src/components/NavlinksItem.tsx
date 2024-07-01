import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const NavlinksItem = () => {
  return (
  
    <ul className='md:flex ml-16 gap-5 hidden'>
    <li>All articles</li>
    <li>Culture</li>
    <li>Sports</li>
    <li>Traveling</li>
  </ul>
  

  )
}

export default NavlinksItem
