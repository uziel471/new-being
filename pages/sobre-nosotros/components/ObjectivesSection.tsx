import Image from 'next/image';
import React from 'react';
import photo from '../../../public/assets/fisico.png';

export default function ObjectivesSection() {
    return (
        <div className=" mb-10 rounded-br-[430px] bg-white grid lg:grid-cols-2 lg:ml-32 lg:mt-24 sm:grid-cols-1 sm:ml-10 sm:mt-12">
            <div className='p-10'>
                <h1 className="text-4xl font-bold">Objetivos</h1>
                <p className="lg:text-lg mt-4 md:text-md text-sm">
                    Brindar un servicio profesional sustentado en los avances
                    científicos en materia de salud mental, especialmente en el
                    tema de los trastornos en sus diversas manifestaciones.
                    Ello aunado a una experienciar de 30 anos en los cuales
                    convergen la medicina, la psiquiatría, la psicología,
                    las ciencias de la comunicación, las neurociencias,
                    el deporte, entre otros. Se pretende lograr la integración
                    psicoespiritual del paciente en un proceso
                    de desarrollo humano integral.
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

