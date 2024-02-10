import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-[1140px] max-w-[80%] mx-auto h-[50px] flex
      items-center absolute top-0 left-1/2 -translate-x-1/2 z-30'>
        <nav className='text-[#eee] flex gap-12'>
            <Link href=''>Home</Link>
            <Link href=''>Info</Link>
            <Link href=''>Contact</Link>
        </nav>
    </header>
  )
}

export default Header