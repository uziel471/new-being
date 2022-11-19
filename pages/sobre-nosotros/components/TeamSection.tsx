import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/team.png';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function TeamSection() {
    return (
        <div className="w-full bg-cyan-500 z-19">
            <div className="grid grid-cols-2 h-full place-items-end justify-items-center">
                <div className="grid place-items-end w-full">
                    <Image
                        src={photo}
                        alt="doctor"
                        className="w-full rounded-tl-[380px] object-center z-10" 
                    />
                </div>
                <div className="bg-blue-900 grid justify-items-start w-full h-full">
                    <p className="ml-16 mt-12 pb-8 text-white text-6xl">
                        Equipo de profesionales
                    </p>
                    <p className="ml-16 text-white">
                        La buena voluntad, ética y calidad moral del equipo de
                        profesionales <br /> de Clínica Nuevo SER aseguran un
                        trato digno y humano que le <br /> permite a personas y
                        a sus familiares con problemas de adicción y/o <br />{' '}
                        salud mental sentirse atendidos y entendidos durante
                        todo su proceso <br /> de recuperación.
                    </p>
                    <div>
                        <ul className="ml-16">
                            <li key="id-1" className="text-white text-2x">
                                <div className="flex">
                                    <AiOutlineCheckCircle
                                        size={30}
                                        className="p-1"
                                        color="#00C1DE"
                                    />{' '}
                                    &nbsp; Ética y profesionalismo. <br />{' '}
                                    <br />
                                </div>
                            </li>
                            <li key="id-1" className="text-white text-2x">
                                <div className="flex">
                                    <AiOutlineCheckCircle
                                        size={30}
                                        className="p-1"
                                        color="#00C1DE"
                                    />{' '}
                                    &nbsp; Trato digno y calidad humana. <br />{' '}
                                    <br />
                                </div>
                            </li>
                            <li key="id-1" className="text-white text-2x">
                                <div className="flex">
                                    <AiOutlineCheckCircle
                                        size={30}
                                        className="p-1"
                                        color="#00C1DE"
                                    />{' '}
                                    &nbsp; Atención individualizada. <br />{' '}
                                    <br />
                                </div>
                            </li>
                            <li key="id-1" className="text-white text-2x">
                                <div className="flex">
                                    <AiOutlineCheckCircle
                                        size={30}
                                        className="p-1"
                                        color="#00C1DE"
                                    />{' '}
                                    &nbsp; Médicos, psicólogos y psiquiatras.{' '}
                                    <br /> <br />
                                </div>
                            </li>
                            <li key="id-1" className="text-white text-2x">
                                <div className="flex">
                                    <AiOutlineCheckCircle
                                        size={30}
                                        className="p-1"
                                        color="#00C1DE"
                                    />{' '}
                                    &nbsp; Terapeutas y consejeros
                                    especializados. <br /> <br />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
