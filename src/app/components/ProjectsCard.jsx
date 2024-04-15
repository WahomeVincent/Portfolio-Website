import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import Link from 'next/link';

function ProjectsCard({imgUrl, title, description}) {
  return (
    <div className='my-4 '>
        <div className='h-52 md:w-72 md rounded-t-lg relative group' style={{background : `url(${imgUrl})`, backgroundSize: 'cover'}}>
            <div className='overlay flex items-center justify-center gap-4 absolute top-0 left-0 w-full h-full bg-[#3f3f42] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href='https://github.com/WahomeVincent/AdminDashboard-React' className='  text-slate-300'>
                    <FaCode className='border rounded-full p-1 text-4xl hover:text-white '/>
                    <span className='text-xs text-center hover:text-white'>Code</span>
                </Link>
                <Link href='https://admin-dashboard-react-one.vercel.app/' className=' text-slate-300'>
                    <FiEye className='border rounded-full p-1 text-4xl hover:text-white'/>
                    <span className='text-xs text-center hover:text-white'>Live Link</span>
                </Link>
            </div>
        </div>
        
        <div className='bg-[#252552] font-bold rounded-b-lg py-2 px-2'>
            <h2 className='text-base '>{title}</h2>
            <h3 className='text-xs my-2 text-slate-300'>{description}</h3>

            <div className='flex justify-evenly border-t py-2 md:hidden'>
            <Link href='https://github.com/WahomeVincent/AdminDashboard-React' className=' text-slate-300 flex flex-col items-center gap-1'>
                    <FaCode className='border rounded-full p-1 text-4xl hover:text-white '/>
                    <span className='text-xs text-center hover:text-white'>Code</span>
                </Link>
                <Link href='https://admin-dashboard-react-one.vercel.app/' className=' text-slate-300 flex flex-col items-center gap-1'>
                    <FiEye className='border rounded-full p-1 text-4xl hover:text-white'/>
                    <span className='text-xs text-center hover:text-white'>Live Link</span>
                </Link>
            </div>
        </div>

        
    </div>
  )
}

export default ProjectsCard