import React from 'react';
import image from '../../../public/assets/instalaciones.jpg';
import Image from 'next/image';

export default function PlacesSection() {
    return (
        <div className="w-full h-screen text-white z-1">
            <div className=''>
                <Image
                    src={image}
                    className="w-full h-full object-cover absolute mix-blend-overlay"
                    alt="Home"
                    loading='lazy'
                />
            </div>
            <div className="w-full h-screen  pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center">
                <h3 className="md:text-5xl sm:text-3xl text-cl font-bold">
                    3 clínicas de atención
                </h3>

                <div className="ml-[10px] mt-[50px] grid place-items-start z-10">
                    <div>
                        <button className="outline outline-offset-8 rounded text-2xl border-cyan-300 text-cyan-300">
                            <p className="text-white">CONOCE NUESTERAS INSTALACIONES</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
