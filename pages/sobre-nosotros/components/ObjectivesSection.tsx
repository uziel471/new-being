import Image from 'next/image';
import React from 'react';
import photo from '../../../public/assets/fisico.png';

export default function ObjectivesSection() {
    return (
        <div className=" mb-10 rounded-br-[430px] bg-white grid lg:grid-cols-2 lg:ml-32 lg:mt-24 sm:grid-cols-1 sm:ml-10 sm:mt-12">
            <div className='p-10'>
                <h1 className="text-4xl font-bold">Objetivos</h1>
                <p className="lg:text-lg mt-4 md:text-md text-sm">
                    Brindamos a la persona tratando su patología un seguimiento
                    óptimo en su proceso de recuperación, otorgando herramientas
                    para cumplir
                    con los objetivos de nuestros programas, manteniendo una{' '}
                    <b>conexión</b>
                    <b>real con sí mismo y su familia.</b>
                    Un proceso que tiene como objetivo el{' '}
                    <b>estímulo y reinserción</b> óptima
                    al entorno en general, el cual es complementado con valores
                    como
                    respeto, dignidad y confianza, donde acompañamos a la
                    persona en
                    el desarrollo de habilidades.
                </p>
            </div>
            <div className=''>
                <div className="flex flex-wrap justify-center">
                    <div className="lg:w-6/12 md:w-6/12 w-6/12 px-4">
                        <Image
                            src={photo}
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

