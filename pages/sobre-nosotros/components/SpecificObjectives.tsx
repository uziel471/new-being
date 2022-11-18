import React from 'react';
import Image from 'next/image';
import img from '../../../public/assets/fisico.png';

const objects = [
    {
        title: 'Físico',
        img: 'fisico.png',
        description: (
            <p className="text-lg mt-4">
                Un desarrollo adecuado del físico, le permite a las personas en <br />
                tratamiento recuperar la confianza en sí mismo, mejorando el <br />
                autoconcepto y encontrando el valor de un cuerpo sano.
            </p>
        ),
    },
    {
        title: 'Mental',
        img: 'fisico.png',
        description: (
            <p className="text-lg mt-4">
                Contamos con equipo especializado formado por médicos, <br />
                psicólogos y psiquiatras, trabajando con cada una de las <br />
                personas, evaluando su salud mental y emocional.
            </p>
        ),
    },
    {
        title: 'Espiritual',
        img: 'fisico.png',
        description: (
            <p className="text-lg mt-4">
                Buscamos el desarrollo espiritual de cada uno de los individuos <br />
                en tratamiento, lo cual ayuda en gran medida al manejo de los <br />
                síntomas de abstinencia.
            </p>
        ),
    },
    {
        title: 'Social',
        img: 'fisico.png',
        description: (
            <p className="text-lg mt-4">
                Cada persona puede reintegrarse a la sociedad, al trabajo y a <br />
                las relaciones humanas, con el apoyo y seguimiento de nuestros <br />
                consejeros especializados.
            </p>
        ),
    },
];

export default function SpecificObjectives() {
    return (
        <div className="grid gap-4 grid-cols-2 ml-32 h-screen">
            {objects.map((objective, index) => (
                <div className='mb-9'>
                    <h1 className="text-4xl font-bold mb-9">
                        {objective.title}
                    </h1>
                    <Image
                        src={require(`../../../public/assets/objective${
                            index + 1
                        }.png`)}
                        alt="icon"
                        width={100}
                        height={100}
                    />
                    {objective.description}
                </div>
            ))}
            {/* <div>
                <h1 className="text-4xl font-bold mb-9">Fisico</h1>
                <Image src={img} alt="icon" width={100} height={100} />
                <p className="text-lg mt-4">
                    Un desarrollo adecuado del físico, le permite a las personas
                    en tratamiento recuperar la confianza en sí mismo, mejorando
                    el autoconcepto y encontrando el valor de un cuerpo sano.
                </p>
            </div>
            <div>02</div>
            <div>03</div>
            <div>04</div> */}
        </div>
    );
}