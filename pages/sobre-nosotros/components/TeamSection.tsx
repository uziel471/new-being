import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/team.png';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function TeamSection() {
    return (
        <div className="bg-cyan-500 z-19">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center place-content-center">
                <div className="grid place-items-end">
                    <Image
                        src={photo}
                        alt="doctor"
                        className="w-full h-full lg:rounded-tl-[380px] object-center z-10" 
                    />
                </div>
                <div className="bg-blue-900 h-full w-full grid place-items-center">
                    <div className="m-10">
                        <p className="text-white text-4xl">
                            Equipo de profesionales
                        </p>
                        <br />
                        <p className="text-white lg:text-lg md:text-md text-sm">
                            La buena voluntad, ética y calidad moral del equipo de
                            profesionales <br /> de Clínica Nuevo SER aseguran un
                            trato digno y humano que le <br /> permite a personas y
                            a sus familiares con problemas de adicción y/o <br />{' '}
                            salud mental sentirse atendidos y entendidos durante
                            todo su proceso <br /> de recuperación.
                        </p>
                        <br />
                        <div>
                            <ul className="text-white lg:text-lg text-sm">
                                <li key="id-1" className="">
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
                                <li key="id-2" className="">
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
                                <li key="id-3" className="">
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
                                <li key="id-4" className="">
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
                                <li key="id-5" className="">
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
        </div>
    );
}
