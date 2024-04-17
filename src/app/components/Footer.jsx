"use client"
import React, { useState } from 'react'
import { FaRegCopyright } from "react-icons/fa6";


function Footer() {

    function getCurrentYear(){
        const date = new Date()
        const year = date.getFullYear()
        return year
    }

  return (
    <footer className='border-t border-slate-700'>
        <div className='m-6'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-800 to-blue-700 '>|W|</h1>
                <h2 className='text-xs text-slate-500 flex items-center'>
                    <span className=''><FaRegCopyright /></span>
                    {getCurrentYear()}.
                  All rights reserved.
                </h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer