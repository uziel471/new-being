import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function Carrousel() {

  const [index, setIndex] = useState(0);

  const contentCarrusel = [
    {
      url:'/../assets/c1.jpg',
      tittle:'25% de la población padece de salud mental',
      description:'Más de 350 millones de personas en el mundo de todas las edades sufre de depresión y se calcula que entre el 60-65% no recibe atención médica.',
      moreInfo: '/enfermedades-mentales',
    },
    {
      url:'/../assets/c2.jpg',
      tittle:'Te acompañamos en tu proceso de recuperación',
      description:'Las personas que sufren una patología y sus familias buscan tranquilidad y entendimiento, permítenos acompañarte y guiarte en tu rehabilitación.',
      moreInfo: '/tratamientos',
    },
    {
      url:'/../assets/c3.jpg',
      tittle:'¿Por qué nosotros?',
      description:'Ofrecemos atención integral en el tratamiento de adicciones, drogas, alcoholismo y salud mental. Brindamos intervención oportuna, orientación y acompañamiento constante.',
      moreInfo: '/sobre-nosotros',
    },
    {
      url:'/../assets/c4.jpg',
      tittle:'Tengo un familiar adicto ¿Cómo puedo ayudar?',
      description:'El primer paso ya lo has dado, estás en busca de información sobre las adicciones y has llegado al lugar correcto.',
      moreInfo: '/primer-paso',
    },
    {
      url:'/../assets/c5.jpg',
      tittle:'Conoce nuestras instalaciones',
      description:'Contamos con 3 clínicas de atención, con amplias y cómodas instalaciones acondicionadas para el tratamiento efectivo de pacientes y sus familiares con cualquier tipo de adicción o trastorno mental.',
      moreInfo: '/instalaciones',
    },
  ];
  const handlePrev = () => {

    const nextIndex = index -1;

    if(nextIndex < 0) {
      setIndex(contentCarrusel.length - 1)
    } else {
      setIndex(nextIndex);
    }
  };

  const handleNext = () => {
    setIndex((index + 1) % contentCarrusel.length)
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#444444]">
      <img
        src={contentCarrusel[index].url}
        style={{width: '100%', height: '100%', opacity: '60%'}}
        alt="carrusel"
        loading='lazy'
      />
      <button className="absolute inset-y-0 left-0 w-16 " onClick={handlePrev} > <AiOutlineLeft size={50} className="ml-5" color="#C9CAC3"/> </button>
        <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96"> 
          <p className="text-4xl w-3/6">{String(contentCarrusel[index].tittle)}</p> 
          <p className="text-2xl mt-12 text-left "> {String(contentCarrusel[index].description)}</p> 
        </div>
      <div className= "absolute bottom-0 left-0 ml-32 mb-60">
       <button className="outline outline-4 rounded-full mt-10 p-4 mr-5 outline-[#00C1DE] ">
       <p className="text-white text-3xl">CONTÁCTANOS</p>
      </button>
      <Link href={contentCarrusel[index].moreInfo}>
        <button className="outline outline-4 rounded-full outline-[#00C1DE] mt-10 p-4 ml-8 ">
          <p className="text-white text-3xl">MAS INFORMACION</p>
        </button>
      </Link>
      </div>
      <button className=" absolute inset-y-0 right-0 w-16" onClick={handleNext} > <AiOutlineRight size={50} className="m-1" color="#C9CAC3"/> </button>
    </div>
  );
}