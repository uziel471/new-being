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
                    <h1 className="text-4xl text-white font-bold">Mision</h1>
                    <p className="lg:text-lg md:text-md text-sm mt-4 text-white">
                        Brindamos a la persona tratando su patología un seguimiento
                        óptimo
                        en su proceso de recuperación, <b>
                            otorgando herramientas
                        </b>{' '}
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
            </div>
            </div>
        </div>
    );
}
