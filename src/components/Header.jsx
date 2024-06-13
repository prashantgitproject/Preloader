'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Hamburger from './icons/Hamburger'
import toast from 'react-hot-toast'

const Header = () => {

  const [open, setOpen] = useState(false)

  const openHeader = () => {
    setOpen(!open)
  }

  const logo = () => {
    toast.success('Pesto Tech')
  };

  const logIn = () => {
    toast.error('Sign up first')
  }

  const signUp = () => {
    toast.success("It's just a demo site!")
  }

  return (
    <div className=' p-8 bg-black flex justify-center items-center text-white border-b border-gray-600'>
        <button onClick={logo} className='border-r border-gray-600 mr-4'>
            <Image src={'/name2.png'} alt='name' width={100} height={100}/> 
        </button>
        <div className='hidden md:flex gap-8 items-center justify-center'>
            <button>For Companies</button>
            <button>For Developers</button>
            <button>Blogs</button>
        </div>
        <div className='grow'/>
        <div className='flex gap-4 items-center'>
            <button onClick={logIn}>Log In</button>
            <button onClick={signUp} className='hidden md:flex p-2 px-4 font-semibold rounded-lg border shadow-lg shadow-pink-500/50 border-pink-500'>Sign up for free</button>
            <button onClick={openHeader} className='md:hidden flex justify-center items-center rounded-full p-1 border shadow-md shadow-pink-500/50 border-pink-500'>
              <Hamburger/>
            </button>
        </div>
        {
          open && (
            <div className='md:hidden absolute top-24 left-0 right-0 bg-black text-white p-4 border-b-2 border-pink-500'>
              <div className='flex flex-col justify-start items-start gap-4'>
                <button>For Companies</button>
                <button>For Developers</button>
                <button>Blogs</button>
                <button onClick={signUp} className='w-[50%]  p-2 px-4 font-semibold rounded-lg border shadow-md shadow-pink-500/50 border-pink-500'>Sign up for free</button>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Header