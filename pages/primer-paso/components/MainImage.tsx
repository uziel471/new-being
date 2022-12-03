import React from 'react';
import image from '../../../public/assets/friends.png';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-screen lg:h-screen text-white z-1">
            <div className="w-screen lg:h-screen mx auto text-left flex flex-col justify-center">
                <Image
                    src={image}
                    className="w-screen lg:h-screen object-cover mix-blend-overlay opacity-90"
                    alt="Home"
                    loading="lazy"
                />
                <div className="w-screen lg:h-screen lg:pl-36 text-left flex flex-col justify-center bg-cover bg-center md:p-[90px] text-shadow-3xl  p-[50px] pl-4 absolute">
                    <h1 className="md:text-4xl lg:text-6xl text-sm font-bold">
                        El primer paso
                    </h1>
                    <h3 className="md:text-6xl lg:text-3xl text-sm font-bold">
                        hacia una vida libre
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
        </div>
    );
}
