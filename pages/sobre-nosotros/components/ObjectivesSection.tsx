import Image from 'next/image';
import React from 'react';
import photo from '../../../public/assets/objetivo2.png';

export default function ObjectivesSection() {
    return (
        <div className=" mb-9 rounded-br-[430px] bg-white grid grid-cols-2 ml-32 mt-24">
            <div>
                <h1 className="text-4xl font-bold">Objetivos</h1>
                <p className="text-lg mt-4">
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
            <div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <Image
                            src={photo}
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

