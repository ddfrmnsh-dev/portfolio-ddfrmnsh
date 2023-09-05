'use client';
import React, { useEffect, useState } from 'react'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function DefaultHeader({}: Props) {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
        <div className='top-0 left-0 w-full mb-5 sticky px-2 md:px-0 lg:px-96 z-10 shadow-md'>
           <div className={`md:flex items-center justify-between ${open ? 'bg-white' : 'bg-transparent'} py-4 md:px-10 px-7 backdrop-blur-sm`}>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center'>
                <span>The Child</span>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-white' : 'top-[-490px] bg-transparent'}`}>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link href="/" className='text-gray-800 hover:text-blue-400 duration-500'>Home</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link href="/project" className='text-gray-800 hover:text-blue-400 duration-500'>Project</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link href="/blog" className='text-gray-800 hover:text-blue-400 duration-500'>Blog</Link>
                    </li>
                <button className='btn bg-primary text-white hover:text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
            </ul>
           </div>
        </div>
    </>
  )
}