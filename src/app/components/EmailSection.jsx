"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function EmailSection() {

    const [emailSubmitted, setEmailSubmitted] = useState()

    const [data, setData] = useState({
        email:'',
        subject:'',
        message:''
    })

    function handleInputChange(e){
        const {name, value} = e.target
        setData(prevE => {
            return{
            ...prevE, [name] : value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
       
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json()
        // console.log(resData);
        if(response.status === 200){
            console.log('Message sent.');
            setEmailSubmitted(true)
            setData({
                email:'',
                subject:'',
                message:''
            }
            )
        }
    }
   

  return (
    <section  className='m-6 md:flex md:justify-between relative'>
        <div className='hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-64 w-64 z-0 blur-lg absolute -bottom-24 -left-24'></div>
        <div className='md:w-1/3 md:ml-10 '>
            <h1 className='text-xl font-bold underline my-2'>Let&apos;s connect</h1>
            <p>
                I am currently looking for new opportunites, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <div className='flex items-center my-4 gap-6 md:gap-10'>
                <Link href='https://github.com/WahomeVincent'>
                    {/* <Image src={GithubLogo} alt='github icon' className='bg-white rounded-full md:h-16 md:w-16' /> */}
                    <FaGithub className='text-5xl hover:text-black'/>
                </Link>
                <Link href='https://www.linkedin.com/in/vincent-wahome-717602246'>
                    {/* <Image src={LinkedInLogo} alt='linkedin icon' className='md:h-16 md:w-16'/> */}
                    <FaLinkedinIn  className='bg-white text-black text-5xl p-1 rounded hover:bg-blue-500'/>
                </Link>
            </div>
            
            <div className='my-6'>
                <h1 className='my-2'>Tel: +254 712445492</h1>
                <h1>Email: vinwahome@gmail.com</h1>
            </div>

        </div>

        
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-10 md:w-1/3 md:mr-20'>
                    <label htmlFor='email'>Your email</label>
                    <input 
                        type='email'
                        id='email'
                        value={data.email}
                        onChange={handleInputChange}
                        required
                        name='email'
                        placeholder='johdoe@gmail.com'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    />

                    <label htmlFor='subject'>Subject</label>
                    <input 
                        type='text' 
                        id='subject'
                        value={data.subject}
                        onChange={handleInputChange}
                        required
                        name='subject'
                        placeholder='Just saying hi'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    />
                    

                    <label htmlFor='message'>Message</label>
                    <textarea 
                        name='message'
                        id='message'
                        value={data.message}
                        onChange={handleInputChange}
                        required
                        placeholder='I want to talk about...'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    />

                    <button type='submit' className='bg-gradient-to-r from-blue-400 via-blue-800 to-black hover:bg-red-600 py-2 md:py-3 rounded mt-6'>
                        Send message
                    </button>
                    {emailSubmitted && 
                            <p className='text-green-500 text-sm'>Email sent successfully!</p>       
                    }
                </form>
            
    </section>
  )
}

export default EmailSection