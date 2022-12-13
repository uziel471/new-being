import Image from 'next/image';
import React from 'react';
import photo from '../../../public/assets/mision.png';

export default function MisionSection() {
    return (
        <div className="lg:rounded-br-[400px] bg-blue-900 p-2 lg:p-20">
            <div className=''>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center'>
                    <div className=''>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-3/6">
                                <Image
                                    src={photo}
                                    alt="..."
                                    className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                <div className='p-10 lg:p-20'>
                    <h1 className="text-4xl text-white font-bold">Misión</h1>
                    <p className="lg:text-lg md:text-md text-sm mt-4 text-white">
                        En Clínica Nuevo Ser creemos en la capacidad del ser humano
                        para <b>trasnformarse a si mismo y elevar su potencial al máximo</b>,
                        sabemos que nuestros pacientes y sus familias buscan tranquilidad
                        y entendimiento, así como una solución efectiva para liberarse y
                        Reintegrarse a la vida.
                        La buena voluntad, ética y calidad moral de nuestro <b>equipo
                        multidisciplinario de profesionales</b>{' '} asegura un trato digno
                        y humano que le permite a nuestros pacientes y a sus
                        familiares sentirse atendidos y entendidos durante
                        todo su proceso de recuperación.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}
