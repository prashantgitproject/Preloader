'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [bgcolor, setBgcolor] = useState('bg-black/90')
  const [type, setType] = useState('lateral')
  const [size, setSize] = useState(15)

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }, [isLoading])


  return (
    <div>
        <>
        {
          isLoading && (
            <Loader bgcolor={bgcolor} type={type} size={size}/>
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