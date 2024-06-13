import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import Activator from './Activator'

const Hero = ({setIsLoading, setBgcolor, setType, setSize}) => {

    const companies = () => {
        toast.success('Hire from PESTO')
    }

    const video = () => {
        toast.error('Something went wrong!')
    }

  return (
    <div className=' bg-black text-white'>
        <div className='md:grid md:grid-cols-12 h-full pt-8'>
            <div className='col-span-6 p-2 md:p-16 h-full'>
                <button onClick={companies} className='border shadow-lg shadow-cyan-500/50 border-cyan-500 rounded-full px-4 p-2 mb-4'>For companies</button>
                <div className='flex flex-wrap text-4xl md:text-5xl font-semibold'>
                    <p className='py-4'>
                        Hire Top Remote Developers Using
                        <span className=' text-[#fee1b3]'> The World&apos;s First</span>
                        <span className='text-[#fca6d9]'> AI Recruiter</span> 
                    </p>
                </div>

                <div onClick={video} className='md:hidden py-4 w-full aspect-video hover:cursor-pointer'>
                    <Image src={'/video.png'} alt='video' height={800} width={800}/>
                </div>

                <Activator setIsLoading={setIsLoading} setBgcolor={setBgcolor} setType={setType} setSize={setSize}/>
            </div>
            <div className='hidden col-span-6 md:flex justify-center items-center h-full'>
                <div onClick={video} className='h-[23rem] aspect-video hover:cursor-pointer'>
                    <Image src={'/video.png'} alt='video' height={800} width={800}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero