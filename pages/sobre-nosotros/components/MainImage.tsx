import React from 'react';
import image from '../../../public/assets/sobre-nosotros.jpg';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-screen h-screen text-white mt-[100px]">
            <div className="w-screen h-screen mx auto text-left flex flex-col justify-center">
                <Image
                    src={image}
                    className="w-screen h-screen object-cover mix-blend-overlay"
                    alt="Home"
                    loading="lazy"
                />
                <div className='lg:pl-36 absolute'>
                    <h3 className="lg:text-5xl md:text-2xl text-xl text-cl font-bold">
                        Una clínica con
                    </h3>
                    <h1 className="lg:text-7 md:text-4xl text-2xl font-bold pb-5">
                        sentido humano
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg">
                        En Clínica Nuevo Ser adecuamos cada uno de <br />
                        nuestros programas terapéuticos, con nuestras <br />
                        instalaciones equipadas y adecuadas, cumpliendo <br />
                        las necesidades de los individuos.
                    </p>
                </div>
            </div>
        </div>
    );
}
