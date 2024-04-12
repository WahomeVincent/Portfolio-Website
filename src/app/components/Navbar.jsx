"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'




function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevE => !prevE)
  }

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#110344] bg-opacity-90 '>
        <div className='flex items-center justify-between mx-6 my-4'>
            <Link href='/' className='text-4xl font-bold'>LOGO</Link>

            {/* Mobile */}
            <div className='ml-auto md:hidden'>
                {isMenuOpen ?
                  <>
                    <button onClick={toggleMenu} className='h-10 w-10'>
                        <XMarkIcon />
                    </button>
      
                  </>
                  :
                  <button onClick={toggleMenu} className='h-10 w-10'>
                      <Bars3Icon />
                  </button>
                }
                </div>
              
            
            {/* Medium & Larger screens */}
            <div className=' md:text-xl'>
                <ul>
                    <li className='hidden md:flex md:space-x-10 md:mx-10'>
                        <Link href='/about'>About</Link>
                        <Link href='/projects'>Projects</Link>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

                {
                  isMenuOpen && 
                      <ul className=''>
                        <li className='flex flex-col text-center text-2xl space-y-6 py-4 '>
                            <Link href='/about'>About</Link>
                            <Link href='/projects'>Projects</Link>
                            <Link href='/contact'>Contact</Link>
                        </li>
                      </ul>
                }
                
    </nav>
  )
}

export default Navbar