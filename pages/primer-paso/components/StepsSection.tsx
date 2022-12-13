import React from 'react';
import Step1 from '../../../public/assets/step1.png';
import Step2 from '../../../public/assets/step2.png';
import Step3 from '../../../public/assets/step3.png';
import Step4 from '../../../public/assets/step4.png';
import Image from 'next/image';

export default function StepsSection() {
    return (
        <div className="lg:rounded-br-[400px] bg-blue-900 lg:p-10 lg:mt-0 md:mt-[105px]">
            <div className="py-16 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:gap-4 place-items-center text-center">
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={Step1}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] mb-4"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <p className="text-3xl mb-4 border-cyan-300 text-cyan-300">
                            1
                        </p>
                        <p className="text-3xl text-cyan-300">INFÓRMATE</p>
                        <p className="text-3xl text-cyan-300"><br /></p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={Step2}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] mb-4"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <p className="text-3xl mb-4 border-cyan-300 text-cyan-300">
                            2
                        </p>
                        <p className="text-3xl text-cyan-300">PIDE AYUDA <br /> PROFESIONAL</p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={Step3}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] mb-4"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <p className="text-3xl mb-4 border-cyan-300 text-cyan-300">
                            3
                        </p>
                        <p className="text-3xl text-cyan-300">INTERVENCIÓN <br /> OPORTUNA</p>
                    </div>
                </div>
                <div className="place-items-center text grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <Image
                            src={Step4}
                            alt="step"
                            className="w-[140px] h-[140px] br-[50px] p-[10px] mb-4"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <p className="text-3xl mb-4 border-cyan-300 text-cyan-300">
                            4
                        </p>
                        <p className="text-3xl text-cyan-300">TRATAMIENTO <br /> EFECTIVO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
