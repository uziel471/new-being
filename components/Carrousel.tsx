import React, {useState, useEffect} from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from 'next/image';
export default function Carrousel() {

  const [index, setIndex] = useState(0);

  const content_carrusel = [
    '/../assets/c1.jpg',
    '/../assets/c2.jpg',
    '/../assets/c3.jpg',
    '/../assets/c4.jpg',
    '/../assets/c5.jpg',
  ];
  const handlePrev = () => {

    const nextIndex = index -1;

    if(nextIndex < 0) {
      setIndex(content_carrusel.length - 1)
    } else {
      setIndex(nextIndex);
    }
  };

  const handleNext = () => {
    setIndex((index + 1) % content_carrusel.length)
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#000000]">
      <img
        src={content_carrusel[index]}
        width={1000}
        height={1000}
        className="w-full h-full object-cover opacity-50"
        alt="carrusel"
      />
      <button className="absolute inset-y-0 left-0 w-16 " onClick={handlePrev} > <AiOutlineLeft size={50} className="ml-5" color="#C9CAC3"/> </button>
        <div className="absolute inset-y-0 left-0 w-16 ml-32 text-white mt-80"> 
          <p className="text-6xl">25%&nbsp;de&nbsp;la&nbsp;poblacion padece&nbsp;de&nbsp;saludde&nbsp;mental</p> 
          <p className="text-3xl mt-12 text-justify ">Masde&nbsp;de&nbsp;350&nbsp;millones&nbsp;de&nbsp;personas&nbsp;en&nbsp;el&nbsp;mundo&nbsp;de&nbsp;
          todas&nbsp;las&nbsp;edades&nbsp;sufre&nbsp;de&nbsp;depresion&nbsp;y&nbsp;se&nbsp;calcula&nbsp;que entre&nbsp;el&nbsp;60&nbsp;-&nbsp;65%&nbsp;no&nbsp;recibe&nbsp;atencion&nbsp;medica.</p> 
        </div>
      <div className= "absolute bottom-0 left-0 ml-32 mb-60">
       <button className="outline outline-4 rounded-full mt-10 p-4 mr-5 ">
       <p className="text-white text-3xl">CONTÁCTANOS</p>
      </button>
      <button className="outline outline-4 rounded-full border-sky-500 mt-10 p-4 ml-8 ">
        <p className="text-white text-3xl">MAS INFORMACION</p>
      </button>
      </div>
      <button className=" absolute inset-y-0 right-0 w-16" onClick={handleNext} > <AiOutlineRight size={50} className="m-1" color="#C9CAC3"/> </button>
    </div>
  );
}