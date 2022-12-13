import React from 'react';
import image from '../../../public/assets/sobre-nosotros.jpg';
import Image from 'next/image';

export default function MainImage() {
    return (
        <div className="w-screen lg:h-screen text-white">
            <div className="w-screen lg:h-screen mx auto text-left flex flex-col justify-center">
                <Image
                    src={image}
                    className="w-screen lg:h-screen object-cover mix-blend-overlay opacity-90"
                    alt="Home"
                    loading="lazy"
                />
                <div className='lg:pl-36 md:pl-12 pl-4 absolute'>
                    <h3 className="lg:text-5xl md:text-2xl text-xl text-cl font-bold text-shadow-3xl">
                        Una clínica con
                    </h3>
                    <h1 className="lg:text-7 md:text-4xl text-2xl font-bold pb-5 text-shadow-3xl">
                        sentido humano
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg text-shadow-3xl">
                        En Clínica Nuevo Ser adecuamos cada uno de nuestros tratamientos <br />
                        y programas terapéuticos según las necesidades de cada paciente <br />
                        y familia. La actualización profesional de nuestro personal, <br />
                        así como el equipamiento de nuestras instalaciones son <br />
                        prioridad en nuestro equipo. 
                    </p>
                </div>
            </div>
        </div>
    );
}
