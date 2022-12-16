import React from 'react';
import image from '../../../public/assets/instalaciones.jpg';
import Image from 'next/image';

export default function PlacesSection() {
    return (
        <div className="w-screen h-screen text-white z-1">
            <div className=''>
                <Image
                    src={image}
                    className="w-screen h-screen object-cover absolute mix-blend-overlay opacity-90"
                    alt="Home"
                    loading='lazy'
                />
            </div>
            <div className="w-screen h-screen  lg:pl-36 md:pl-[60px] flex flex-col justify-center">
                <h3 className="md:text-5xl sm:text-3xl text-shadow-3xl font-bold">
                    3 Clínicas de atención
                </h3>

                <div className="ml-[10px] mt-[30px]">
                    <div>
                        <button className="outline outline-offset-8 rounded text-shadow-2xl border-cyan-300 text-cyan-300">
                            <p className="text-white">CONOCE NUESTRAS INSTALACIONES</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
