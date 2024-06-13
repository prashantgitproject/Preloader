'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Loader = ({bgcolor, type, size}) => {

    const [invert, setInvert] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setInvert(prev => setInvert(!prev))
        }, 500)
        console.log(size)
    }, [invert])



  return (
    <div className={`fixed inset-0 h-[100vh] flex justify-center items-center ${bgcolor} z-10`}>
      {<div>{size}</div>}
      {type === 'lateral' && (
        <img className={` ${invert? '-scale-x-100' : "scale-x-100"}`} src={'/transLogo.png'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'spin' && (
        <img className={` animate-spin`} src={'/transLogo.png'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'mix' && (
        <img className={` rotate-image`} src={'/transLogo.png'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
    </div>
  );
};

export default Loader;
