import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    <div className='mt-16'>
        <div className='hidden md:grid grid-cols-12 justify-between items-center'>
            <div className='col-span-4 w-full] p-2'>
                <Image className='w-[90%]h-[17rem] m-auto' src='/pic1.png' width={900} height={900} alt='section1'/>
            </div>
            <div className='col-span-8 w-full p-2'>
                <Image className='w-[100%]  h-[17rem] m-auto' src='/pic2.png' width={900} height={900} alt='section1'/>
            </div> 
        </div>
        <div>
            <Image className='md:hidden h-full' src='/pic3.png' width={900} height={900} alt='section1'/>
        </div>
    </div>
  )
}

export default Section