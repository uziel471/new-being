import React from 'react';
import image from '../../../public/assets/sobre-nosotros.jpg';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-full h-screen text-white">
            <Image
                src={image}
                className="w-full h-full object-cover absolute mix-blend-overlay"
                alt="Home"
                loading='lazy'
            />
            <div className="w-full h-screen  pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center mt-[90px]">
                <h3 className="md:text-5xl sm:text-3xl text-cl font-bold">
                3 clínicas de atención
                </h3>
                <h1 className="md:text-7xl sm:text-6xl font-bold pb-10">
                3 clínicas de atención
                </h1>
                <p className="text-[20px]">
                    En Clínica Nuevo Ser adecuamos cada uno de <br />
                    nuestros programas terapéuticos, con nuestras <br />
                    instalaciones equipadas y adecuadas, cumpliendo  <br />
                    las necesidades de los individuos.
                </p>
            </div>
        </div>
    );
}
