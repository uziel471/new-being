import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/vision.png';

export default function VisionSection() {
    return (
        <div className="">
            <div className="grid grid-cols-2 mb-9">
                <div className="mt-14">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-1/2 mb-16">
                            <Image
                                src={photo}
                                alt="..."
                                className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-40">
                    <h1 className="text-4xl font-bold mb-10">Visión</h1>
                    <p className="text-lg mt-4">
                        Gracias a nuestros tratamientos innovadores, servicio integral, <br />
                        personal altamente capacitado e instalaciones óptimas logramos <br />
                        ofrecer soluciones efectivas en la recuperación de las adicciones y <br />
                        salud mental a largo plazo.
                    </p>
                </div>
            </div>
        </div>
    );
}
