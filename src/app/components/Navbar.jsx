"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll';
// import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'




function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevE => !prevE)
  }

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#110344] bg-opacity-90 '>
        <div className='flex items-center justify-between mx-6 my-4'>
            <Link
                        to="heroSection"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className="text-4xl font-bold cursor-pointer hover:text-slate-600 transform hover:scale-110 transition duration-300"
                    >
                        LOGO
              </Link>
            

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
                    <li className='hidden md:flex md:space-x-10 md:mx-10 cursor-pointer'>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className="hover:text-slate-600 transform hover:scale-110 transition duration-300"

                    >
                        About
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className="hover:text-slate-600 transform hover:scale-110 transition duration-300"
                    >
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className="hover:text-slate-600 transform hover:scale-110 transition duration-300"
                    >
                        Contact
                    </Link>
                        
                    </li>
                </ul>
            </div>
        </div>

                {
                  isMenuOpen && 
                      <ul className=''>
                        <li className='flex flex-col text-center text-2xl space-y-6 py-4 cursor-pointer '>
                          <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-70} // adjust this value according to your layout
                          >
                              About
                          </Link>
                          <Link
                              to="projects"
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={-70} // adjust this value according to your layout
                          >
                              Projects
                          </Link>
                          <Link
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={-70} // adjust this value according to your layout
                          >
                              Contact
                          </Link>
                        </li>
                      </ul>
                }
                
    </nav>
  )
}

export default Navbar