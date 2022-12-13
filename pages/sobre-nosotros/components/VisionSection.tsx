import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/vision.png';

export default function VisionSection() {
    return (
        <div className="p-2 lg:p-20">
            <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 place-items-center">
                <div className="">
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
                <div className="p-10 lg:p-20">
                    <h1 className="text-4xl font-bold mb-10">Visión</h1>
                    <p className="lg:text-lg sm:text-sm">
                        En Clínica Nuevo Ser contamos con una amplia experiencia en el tratamiento
                        integral de trastotrnos de personalidad, atendido de forma individaulizada
                        todas las areas del ser humano, su salud mental, fisica, espiritual y la familia.
                    </p>
                </div>
            </div>
        </div>
    );
}
