"use client"
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import { motion } from "framer-motion"


const tabData = [
    {
        title: 'skills',
        id: 'skills',
        content: (
            <ul className='list-disc ml-2'>
                <li>Javascript</li>
                <li>React Js</li>
                <li>Next Js</li>
                <li>Node Js</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>MySql</li>
                <li>Git</li>
            </ul>
        )
    },

    {
        title: 'education',
        id: 'education',
        content: (
            <ul className='list-disc ml-2 '>
                <li>Moringa School</li>
                <li>Multimedia University of Kenya</li>
            </ul>
        )
    },

    {
        title: 'certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc ml-2'>
                <li>Sofware Engineering</li>
                <li>Google UX Design</li>
                <li>Google IT Support</li>
            </ul>
        )
    }
]

function About() {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    function handleTabChange(nextTab){
        startTransition(() => {
            setTab(nextTab)
        })
    }
  return (
    <>
        <motion.div 
            initial={{opacity: 0, scale: 0.5 }}
            animate={{opacity: 1, scale:1}}
            transition={{duration: 0.5}}
            className='m-6 md:flex  md:justify-between'>
            <div className='my-6 md:w-1/2 '>
                <img src='https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg' alt='' className='md:w-4/5 md:h-full md:object-cover rounded'/>
            </div>

            <div className='md:w-1/2 md:flex md:flex-col md:justify-start'>
                <h1 className='text-2xl font-bold my-2 border-b'>About Me</h1>

                <p className='my-4'>I am full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with Javascript, React, Redux, Next js, Node js, Express, Mongo db, HTML, CSS and Git. I am a quick learner and always looking to expand my knowledge and skillset. I am a team player and I am excited to work with others to create amazing applications.</p>

                <div className='flex space-x-4 my-6'>
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                        Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
                        Experience 
                    </TabButton>
                </div>

                <div>
                    {tabData.find((t) => t.id === tab).content}
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default About