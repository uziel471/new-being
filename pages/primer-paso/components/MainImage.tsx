import React from 'react';
import image from '../../../public/assets/friends.png';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-full lg:h-screen text-white z-1 mt-[100px]">
            <Image
                src={image}
                className="w-screen lg:h-screen object-cover absolute mix-blend-overlay"
                alt="Home"
                loading="lazy"
            />
            <div className="w-screen lg:h-screen lg:pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center lg:pt-[300px] md:pb-[170px] pt-[120px]">
                <h1 className="md:text-4xl lg:text-6xl text-sm font-bold">
                    El primer paso
                </h1>
                <h3 className="md:text-6xl lg:text-3xl text-sm font-bold">
                    hacia una vida libre de addicciones
                </h3>
                <p className="text-sm md:text-xl md:pt-4">
                    Estamos aqui para ayudarte en tu tratamiento, sabemos que
                    este
                </p>
                <p className="text-sm md:text-xl">
                    primer paso es dificil de tomar, por lo que si tienes alguna
                    duda o
                </p>
                <p className="text-sm md:text-xl">
                    preocupacion no dudes en contactarte con nosotros.
                </p>
            </div>
        </div>
    );
}
