'use client'
import { useEffect, useState } from "react";
import BestLoader from "./BestLoader";

const Loader = ({bgcolor, type, size, setIsLoading}) => {

    const [invert, setInvert] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setInvert(prev => setInvert(!prev))
        }, 500)
        console.log(size)
    }, [invert])



  return (
    <div onClick={() => setIsLoading(false)} className={`fixed inset-0 h-[100vh] flex justify-center items-center ${bgcolor} z-10`}>
      {type === 'Flicker' && (
        <img className={` ${invert? '-scale-x-100' : "scale-x-100"}`} src={'/transLogo.png'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'Intersect' && (
        <img className={` `} src={'/Closer.gif'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'Wiggle' && (
        <img className={``} src={'/Wiggle.gif'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'Rotate' && (
        <img className={``} src={'/Rotate.gif'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'Fade' && (
        <img className={`fade`} src={'/transLogo.png'} alt="Logo" style={{width: `${size}rem`, height: `${size}rem`}}/>
      )}
      {type === 'Spinner' && (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="spinner border-4 border-solid border-gray-500 rounded-full border-t-transparent" style={{width: `${size*6}px`, height: `${size*6}px`}}/>
          <img className={`absolute`} src={'/transLogo.png'} alt="Logo" style={{width: `${size*6}px`, height: `${size*6}px`}}/>
        </div>
        </>
      )}
      {type === 'Dynamic' && (
        <BestLoader size={size}/>
      )}
    </div>
  );
};

export default Loader;
