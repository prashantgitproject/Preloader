'use client'
import React, { useEffect, useState } from 'react'

const BestLoader = ({size}) => {

    const [isLoader1, setIsLoader1] = useState(true);
    const [isLoader2, setIsLoader2] = useState(false);
    const [isLoader3, setIsLoader3] = useState(false);
    const [isLoader4, setIsLoader4] = useState(false);
    const [isAnimation1, setIsAnimation1] = useState(false);
    const [isAnimation2, setIsAnimation2] = useState(false);
    const [isAnimation3, setIsAnimation3] = useState(false);
    const [isAnimation4, setIsAnimation4] = useState(false);


    useEffect(() => {

        if(isLoader1){
            setTimeout(() => {
                setIsLoader1(false);
                setIsAnimation1(true);
            }, 500);
        }
        if(isLoader2){
            setTimeout(() => {
                setIsLoader2(false);
                setIsAnimation2(true);
            }, 400);
        }

        if(isLoader3){
            setTimeout(() => {
                setIsLoader3(false);
                setIsAnimation3(true);
            }, 400);
        }
        if(isLoader4){
            setTimeout(() => {
                setIsLoader4(false);
                setIsAnimation4(true);
            }, 400);
        }

        if(isAnimation1){
            setTimeout(() => {
                setIsLoader2(true);
                setIsAnimation1(false);
            },1800)
        }

        if(isAnimation2){
            setTimeout(() => {
                setIsLoader3(true);
                setIsAnimation2(false);
            }, 1800);
        }

        if(isAnimation3){
            setTimeout(() => {
                setIsLoader4(true);
                setIsAnimation3(false);
            }, 2000);
        }
        if(isAnimation4){
            setTimeout(() => {
                setIsLoader1(true);
                setIsAnimation4(false);
            }, 2000);
        }
    }, [isAnimation1, isAnimation2, isAnimation3, isAnimation4, isLoader1, isLoader2, isLoader3, isLoader4])

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50'>
        {isLoader1 && (
            <div className={`spinner border-4 border-solid border-gray-400 rounded-full border-t-transparent`} style={{width: `${size*6}px`, height: `${size*6}px`}}/>
        )}
        {isLoader2 && (
            <div className={`spinner border-4 border-solid border-white rounded-full border-t-transparent`} style={{width: `${size*6}px`, height: `${size*6}px`}}/>
        )}
        {isLoader3 && (
            <div className={`spinner border-4 border-solid border-gray-600 rounded-full border-t-transparent`} style={{width: `${size*6}px`, height: `${size*6}px`}}/>
        )}
        {isLoader4 && (
            <div className={`spinner border-4 border-solid border-gray-200 rounded-full border-t-transparent`} style={{width: `${size*6}px`, height: `${size*6}px`}}/>
        )}
        {isAnimation1 && (
            <img className='fade ml-10' src="/find.png" alt="find" style={{width: `${size*15}px`, height: `${size*15}px`}}/>
        )}
        {isAnimation2 && (
            <img className='fade' src="/laptop.png" alt="find" style={{width: `${size*15}px`, height: `${size*15}px`}}/>
        )}
        {isAnimation3 && (
            <img className='fade' src="/html.png" alt="find" style={{width: `${size*15}px`, height: `${size*15}px`}}/>
        )}
        {isAnimation4 && (
            <img className='fade' src="/transLogo.png" alt="find" style={{width: `${size*15}px`, height: `${size*15}px`}}/>
        )}
    </div>
  )
}

export default BestLoader