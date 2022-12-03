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
                        Gracias a nuestros tratamientos innovadores, servicio integral,
                        personal altamente capacitado e instalaciones óptimas logramos

                        ofrecer soluciones efectivas en la recuperación de las trastornos y
                        salud mental a largo plazo.
                    </p>
                </div>
            </div>
        </div>
    );
}
