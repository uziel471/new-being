import Image from 'next/image';
import React from 'react';
import photo from '../../../public/assets/mision.png';

export default function MisionSection() {
    return (
        <div className="rounded-br-[400px] bg-blue-900">
            <div className='grid grid-cols-2 mb-9'>
            <div className='mt-14'>
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/2 mb-16">
                        <Image
                            src={photo}
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-28'>
                <h1 className="text-4xl text-white font-bold">Mision</h1>
                <p className="text-lg mt-4 text-white">
                    Brindamos a la persona tratando su patología un seguimiento
                    óptimo <br />
                    en su proceso de recuperación, <b>
                        otorgando herramientas
                    </b>{' '}
                    para cumplir <br />
                    con los objetivos de nuestros programas, manteniendo una{' '}
                    <b>conexión</b> <br />
                    <b>real con sí mismo y su familia.</b> <br />
                    Un proceso que tiene como objetivo el{' '}
                    <b>estímulo y reinserción</b> óptima <br />
                    al entorno en general, el cual es complementado con valores
                    como <br />
                    respeto, dignidad y confianza, donde acompañamos a la
                    persona en <br />
                    el desarrollo de habilidades.
                </p>
            </div>
            </div>
        </div>
    );
}
