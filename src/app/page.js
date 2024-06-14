'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [started, setStarted] = useState(true)
  const [bgcolor, setBgcolor] = useState('bg-black/90')
  const [type, setType] = useState('Spinner')
  const [size, setSize] = useState(15)

  useEffect(() => {
      setTimeout(() => {
        setStarted(false)
      }, 2000)
  }, [])

  useEffect(() => {

      const timeOutId = setTimeout(() => {
        setIsLoading(false)
      }, 8000)

      return () => {
        clearTimeout(timeOutId);
      } 

  }, [isLoading])


  return (
    <div>
        <>
        {
          started && (
            <Loader type={type} bgcolor={bgcolor} setIsLoading={setIsLoading} size={12}/>
          )
        }
        {
          isLoading && (
            <Loader bgcolor={bgcolor} type={type} size={size} setIsLoading={setIsLoading}/>
          )
        }
        <Header/>
        <Hero setIsLoading={setIsLoading} setBgcolor={setBgcolor} setType={setType} setSize={setSize}/>
        <Section/>
        <Footer/>
        </>
    </div>
  );
};

export default Page