import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
    {
        key: 'step1',
        title: 'Paso 1',
        buttonText: 'Más información',
        redirect: '/trastornos',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                <b>El primer paso ya lo has dado.</b> Tenemos la información
                oportuna y con fundamento científico basado
                en 30 años de experiencia.
                <br />
                Sabemos que no es fácil, y en este momento el futuro parece
                incierto,
                queremos ayudarte a resolver cualquier duda con respecto a tu{' '}
                situación y como resolverla. <br />
                <br />
                <b>
                    Conoce más acerca de los signos, síntomas y consecuencias.
                </b>
            </p>
        ),
    },
    {
        key: 'step2',
        title: 'Paso 2',
        buttonText: 'Contáctanos',
        redirect: '',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                Es importante que conozcas más sobre tu situación,
                es el momento para que contactes a uno de nuestros
                especialistas en el tema de trastronos. Ella o él
                te asesorarán y responderan a tus preguntas.<br />
                <br />
                Puede ser el caso de que sea un ser querido quién
                requiera ayuda, tal vez acepte la ayuda o bien la
                rechace, es importante que uno de nuestros profesionales
                te asesore respecto a la metodología y proceso adecuado
                para lograr una intervención profesional con dignidad y
                respeto y por consiguiente un ingreso voluntario.
                Estamos a la espera de tu llamada<br />
            </p>
        ),
    },
    {
        key: 'step3',
        title: 'Paso 3',
        redirect: '/tratamientos',
        buttonText: 'Más información',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                La intervención oportuna es la clave para{' '}
                <b> solución efectiva y a </b>
                <b>largo plazo.</b> <br />
                <br />
                Sabemos que hablar sobre los trastornos con un familiar{' '}
                no es tarea sencilla, es por eso que contamos con especialistas
                en
                intervención en crisis, quienes desarrollan junto contigo un
                plan
                individualizado para una <b>intervención exitosa</b> y asi
                lograr un <b>ingreso</b>
                <b>{' '}voluntario.</b>
            </p>
        ),
    },
    {
        key: 'step4',
        title: 'Paso 4',
        buttonText: 'Más información',
        redirect: '/tratamientos',
        description: (
            <p className="text-[16px] lg:pr-[300px]">
                La efectividad de nuestros tratamientos obedece{' '}
                a que tienen una base científica, además
                contamos con 30 años de experienciar profesional
                y lo más importante, establecemos una alianza
                altamente responsible entre el paciente, su familia
                y nuestro equipo de profesionales.{' '}
                <br />
                <br />
                La atención integral está enfocada al paciente{' '}
                y a su familia resaltando el cuidado mental, 
                físico y spiritual de los involucrados en el 
                proceso de rehabilitación.{' '}
                <br />
                <b>
                    Conoce nuestros tratamientos y las soluciones que podemos
                    ofrecer.
                </b>
            </p>
        ),
    },
];

export default function StepDetail() {
    return (
        <>
            {steps?.map((step, index) => {
                if (step.key === 'step4') {
                    return (
                        <div className="bg-[#15284B]" key={step.title}>
                            <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:p-10 lg:p-10">
                                <div className="grid grid-rows-1 place-items-center">
                                    <div>
                                        <p className="text-6xl mb-4 font-bold text-center">
                                            {step.title}
                                        </p>
                                    </div>
                                    <div>
                                        <Image
                                            src={require(`../../../public/assets/step${index + 1}.png`)}
                                            alt="section1"
                                            width={250}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-rows-1">
                                    <div className="p-8 md:p-2">
                                        <p className="text-4xl text-cyan-300 mb-8">
                                            {step.title}
                                        </p>
                                        <div>
                                            {step.description}
                                            <Link href={step.redirect}>
                                                <button className="outline outline-8 p-4 ml-4 rounded-2xl mt-8 mb-8 border-black">
                                                    <p className="text-cyan-500">
                                                        {step.buttonText}
                                                    </p>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="p-8" key={step.title}>
                        <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                            <div className="grid grid-rows-1 place-items-center">
                                <p className="text-6xl mb-4 font-bold text-center">
                                    {step.title}
                                </p>
                                <Image
                                    src={require(`../../../public/assets/step${index + 1}.png`)}
                                    alt="section1"
                                    width={250}
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-rows-1">
                                <div className="">
                                    <p className="text-4xl text-cyan-300 mb-8 mt-20">
                                        {step.title}
                                    </p>
                                    <div>
                                        {step.description}
                                        <Link href={step.redirect}>
                                            <button className="outline outline-8 p-4 ml-4 rounded-2xl mt-8 border-black">
                                                <p className="text-cyan-500">
                                                    {step.buttonText}
                                                </p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
