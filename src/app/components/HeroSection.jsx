"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section>  
        <div className='m-6 my-10 md:flex md:items-center  md:justify-evenly '>
            <div className='flex flex-col md:w-2/3'>
                <h1 className='text-4xl lg:text-6xl mb-4 font-extrabold text-center sm:text-left'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500'>
                        Hello, I'm  
                    </span> 
                    <br></br>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Wahome.',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'A Web Developer.',
                        1000,
                        'A UI/UX Designer.',
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{  display: 'inline-block' }}
                    repeat={Infinity}
                />
                </h1>
                <p className='text-[#888f96] my-4 text-center sm:text-left'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry
                </p>

                <div className='flex flex-col w-2/3 md:w-full mx-auto md:flex-row md:gap-8'>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-[#0B0033] text-white  hover:text-white hover:border rounded-full  sm:w-fit px-6 py-3 my-4 font-bold '>
                        Hire Me
                    </button>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-[#e9e9e9] text-white hover:text-[#545061] border rounded-full  my-4 sm:w-fit text-center px-1 py-1 font-bold'>
                        <span className='block bg-[#0B0033] rounded-full px-5 py-3'>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>

            <div className=' mx-auto rounded-full w-60 h-60 md:w-80 md:h-80 bg-[#110344]'>
                <img src='https://images.unsplash.com/photo-1570215171424-f74325192b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZndhcmUlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D' alt='profile-pic' className='rounded-full  w-60 h-60 md:w-80 md:h-80 p-2'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection