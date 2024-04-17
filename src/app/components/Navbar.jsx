"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll';
// import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';




function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevE => !prevE)
  }

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#110344] bg-opacity-90 border-b border-slate-600'>
        <div className='flex items-center justify-between mx-6 my-4'>
            <Link
                        to="heroSection"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className="text-4xl font-bold cursor-pointer hover:text-slate-300 transform hover:scale-110 transition duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-800 to-blue-700 "
                    >
                        |W|
              </Link>
            

            {/* Mobile */}
            <motion.button
                onClick={toggleMenu}
                className='h-10 w-10 ml-auto md:hidden'
                whileTap={{ scale: 1}} // Scale down animation on tap
                initial={{ opacity: 0, scale: 0 }} // Initial animation state
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 }}} // Animation when menu opens
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }} // Animation when menu closes
            >
                {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </motion.button>

              
            
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
                      // Mobile menu items
                    <motion.ul
                        className=''
                        initial={{ opacity: 0, y: -50 }} // Initial animation state
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} // Animation when menu opens
                        exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }} // Animation when menu closes
                    >
                        <motion.li
                            className='flex flex-col text-center text-2xl space-y-6 py-4 cursor-pointer'
                            whileHover={{ scale: 1.1 }} // Scale up animation on hover
                        >
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
                        </motion.li>
                    </motion.ul>

                }
                
    </nav>
  )
}

export default Navbar