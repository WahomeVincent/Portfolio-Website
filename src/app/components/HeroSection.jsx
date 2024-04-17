"use client"
import React, { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import Image from 'next/image'
import avi from '../../../public/images/profile-pic.jpg'



function HeroSection() {
    const contactRef = useRef(null);

    const handleDownload = () => {
        // Replace 'your_cv.pdf' with the actual path to your CV file
        const downloadUrl = '/assests/resume.pdf';
        window.open(downloadUrl, '_blank');
      };

  return (
    <section>  
        <motion.div 
            initial={{opacity: 0, scale: 0.5 }}
            animate={{opacity: 1, scale:1}}
            transition={{duration: 0.5}}
            className='m-6 mt-24 my-10 md:flex md:items-center  md:justify-evenly '>
            <div className='flex flex-col md:w-2/3 '>
                <h1 className='h-32 text-4xl lg:text-6xl mb-4 font-extrabold text-center sm:text-left'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-red-500 to-blue-700 pb-4'>
                        Hello, I&apos;m  
                    </span> 
                    <br></br>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Wahome.',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Web Developer.',
                        1000,
                        'a UI/UX Designer.',
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{  display: 'inline-block' }}
                    repeat={Infinity}
                />
                </h1>
                <p className='text-[#b2b6bb] my-4 text-center sm:text-left'>
                Welcome to my portfolio website. As a passionate web developer, I specialize in crafting immersive digital experiences that seamlessly blend creativity and functionality. With a keen eye for detail and a dedication to staying at the forefront of technology, I strive to develop products with user-centric design, robust and scalable code.
                </p>

                <div className='flex flex-col w-2/3 md:w-full mx-auto md:flex-row md:gap-8'>
                   
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust this value according to your layout
                        className='bg-gradient-to-br from-blue-100 via-blue-500 to-blue-700 hover:bg-[#0B0033] text-white  hover:text-white hover:border rounded-full  sm:w-fit px-6 py-3 md:px-auto md:py-4 my-4 font-bold text-center cursor-pointer'                
                        >
                        Hire me
                    </Link>
                    <button onClick={handleDownload} className='bg-gradient-to-br from-blue-100 via-blue-500 to-blue-700 hover:bg-[#e9e9e9] text-white hover:text-[#545061] border rounded-full  my-4 sm:w-fit text-center px-1 py-1 font-bold'>
                        <span className='block bg-[#0B0033] rounded-full px-5 py-3'>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>

            <div className=' mx-auto rounded-full w-60 h-60 md:w-80 md:h-80 bg-[#110344]'>
                <Image src={avi} alt='profile-pic' className='rounded-full  w-60 h-60 md:w-80 md:h-80 p-2 object-cover'/>
            </div>
        </motion.div>
    </section>
  )
}

export default HeroSection