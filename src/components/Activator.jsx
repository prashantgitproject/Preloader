'use client'
import React, { useState } from 'react'

const Activator = ({setIsLoading, setBgcolor, setType, setSize}) => {


    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(true)
    const [four, setFour] = useState(false)

    const [small, setSmall] = useState(false)
    const [medium, setMedium] = useState(true)
    const [large, setLarge] = useState(false)


    const oneClick = ()=> { setType('Flicker'), setIsLoading(true)}
    const twoClick = ()=>{ setType('Intersect'), setIsLoading(true)}
    const threeClick = ()=>{ setType('Rotate'), setIsLoading(true)}
    const fourClick = ()=>{setType('Wiggle'), setIsLoading(true)}
    const fiveClick = ()=>{setType('Fade'), setIsLoading(true)}
    const sixClick = ()=>{setType('Spinner'), setIsLoading(true)}
    const sevenClick = ()=>{setType('Dynamic'), setIsLoading(true)}

    const click = (data) => {
        if(data === 'one') {setOne(true), setTwo(false), setThree(false), setFour(false), setBgcolor('bg-black/40')}
        if(data === 'two') {setOne(false), setTwo(true), setThree(false), setFour(false), setBgcolor('bg-black/70')}
        if(data === 'three') {setOne(false), setTwo(false), setThree(true), setFour(false), setBgcolor('bg-black/90')}
        if(data === 'four') {setOne(false), setTwo(false), setThree(false), setFour(true), setBgcolor('bg-black')}
    }

    const sizeClick = (data) => {
        if(data === 'small') {setSmall(true), setMedium(false), setLarge(false), setSize(12), console.log(data, 12)}
        if(data === 'medium') {setSmall(false), setMedium(true), setLarge(false), setSize(15), console.log(data, 15)}
        if(data === 'large') {setSmall(false), setMedium(false), setLarge(true), setSize(18), console.log(data, 18)}
    }


  return  (
    <div className='h-full text-white'>
        <p className='font-semibold mt-4 mb-2 text-xl text-white'>Select the <span className='text-[#fca6d9]'>PRELOADER</span>  <br /> with <span className='text-[#fee1b3]'>Size</span> and <span className='text-[#fee1b3]'>Background</span> theme.</p>
        <p>  It will stop in 8 sec!</p>
        <div className='p-4 my-2'>
            <div className='mb-4 font-semibold text-lg text-center'>Transparency</div>
            <div className='flex gap-4 justify-between text-center items-center'>
                <div onClick={() => click('one')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-lg ${one? 'border-2 border-yellow-500' : ''} `}>High</div>
                <div onClick={() => click('two')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-lg ${two? 'border-2 border-yellow-500' : ''}`}>Moderate</div>
                <div onClick={() => click('three')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-lg ${three? 'border-2 border-yellow-500' : ''}`}>Low</div>
                <div onClick={() => click('four')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-lg ${four? 'border-2 border-yellow-500' : ''}`}>None</div>
            </div>
            <div className='mb-4 mt-8 font-semibold text-lg text-center'>Size</div>
            <div className='flex gap-4 justify-around text-center items-center'>
                <div onClick={() => sizeClick('small')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-full ${small? 'border-2 border-yellow-500' : ''} `}>small</div>
                <div onClick={() => sizeClick('medium')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-full ${medium? 'border-2 border-yellow-500' : ''}`}>medium</div>
                <div onClick={() => sizeClick('large')} className={`cursor-pointer p-2 w-[7rem] bg-gray-700 hover:bg-gray-600 rounded-full ${large? 'border-2 border-yellow-500' : ''}`}>large</div>
            </div>
        </div>
        <div className='mb-4 font-semibold text-lg text-center p-1'>Choose the Loader</div>
        <div className='md:h-full max-h-[30rem]  overflow-y-scroll'>
            <div className='flex flex-col h-[10rem] md:h-fit md:flex-row md:overflow-x-scroll gap-4 justify-between items-center mt-8 px-4 font-semibold text-lg'>
                <button onClick={sevenClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-sky-500 to-indigo-500">Dynamic</button>
                <button onClick={fourClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-sky-500 to-indigo-500">Wiggle</button>
                <button onClick={fiveClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500">Fade</button>
                <button onClick={oneClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-sky-500 to-indigo-500">Flicker</button>
                <button onClick={sixClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-pink-500">Spinner</button>
                <button onClick={threeClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-pink-500">Rotate</button>
                <button onClick={twoClick} className="w-full rounded-lg px-10 p-2 h-14 bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500">Intersect</button>
            </div>
        </div>
    </div>
  )
}

export default Activator