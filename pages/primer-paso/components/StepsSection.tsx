import React from 'react';
import blueCircle from '../../../public/assets/steps.png';
import Image from 'next/image';

export default function StepsSection() {
    return (
        <div className="h-[500px] rounded-br-[400px] bg-blue-900">
            <div className="h-full w-full py-16 grid grid-cols-4 gap-4 place-items-center text-center">
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={blueCircle}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4 border-cyan-300"
                        />
                    </div>
                    <div>
                        <p className="text-3xl rounded-full border-2 mb-4 border-cyan-300 text-cyan-300">
                            1
                        </p>
                        <p className="text-3xl text-cyan-300">INFORMATE</p>
                        <p className="text-3xl text-cyan-300"><br /></p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={blueCircle}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4 border-cyan-300"
                        />
                    </div>
                    <div>
                        <p className="text-3xl rounded-full border-2 mb-4 border-cyan-300 text-cyan-300">
                            2
                        </p>
                        <p className="text-3xl text-cyan-300">PIDE AYUDA <br /> PROFESIONAL</p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={blueCircle}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4 border-cyan-300"
                        />
                    </div>
                    <div>
                        <p className="text-3xl rounded-full border-2 mb-4 border-cyan-300 text-cyan-300">
                            3
                        </p>
                        <p className="text-3xl text-cyan-300">INTERVENCION <br /> OPORTUNA</p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={blueCircle}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4 border-cyan-300"
                        />
                    </div>
                    <div>
                        <p className="text-3xl rounded-full border-2 mb-4 border-cyan-300 text-cyan-300">
                            4
                        </p>
                        <p className="text-3xl text-cyan-300">TRATAMIENTO <br /> EFECTIVO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
