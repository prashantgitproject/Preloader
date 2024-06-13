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
    }, [invert])

    let loaderSize;

    if(size === 'small') { loaderSize = 12};
    if(size === 'medium') {loaderSize = 15};
    if(size === 'large') {loaderSize = 18};

  return (
    <div className={`fixed inset-0 h-[100vh] flex justify-center items-center ${bgcolor} z-10`}>
      {type === 'lateral' && (
        <img className={`w-[${loaderSize}rem] h-[${loaderSize}rem] ${invert? '-scale-x-100' : "scale-x-100"}`} src={'/transLogo.png'} alt="Logo" />
      )}
      {type === 'spin' && (
        <img className={`w-[${loaderSize}rem] h-[${loaderSize}rem] animate-spin`} src={'/transLogo.png'} alt="Logo" />
      )}
      {type === 'mix' && (
        <img className={`w-[${loaderSize}rem] h-[${loaderSize}rem] rotate-image`} src={'/transLogo.png'} alt="Logo" />
      )}
    </div>
  );
};

export default Loader;
