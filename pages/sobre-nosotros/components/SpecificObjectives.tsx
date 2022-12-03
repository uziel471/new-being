import React from 'react';
import Image from 'next/image';

const objects = [
    {
        title: 'Físico',
        img: 'fisico.png',
        description: (
            <p className="text-sm lg:text-lg md:text-md mt-4">
                Un desarrollo adecuado del físico, le permite a las personas en
                tratamiento recuperar la confianza en sí mismo, mejorando el
                autoconcepto y encontrando el valor de un cuerpo sano.
            </p>
        ),
    },
    {
        title: 'Mental',
        img: 'mental.png',
        description: (
            <p className="text-sm lg:text-lg md:text-md mt-4">
                Contamos con equipo especializado formado por médicos,
                psicólogos y psiquiatras, trabajando con cada una de las
                personas, evaluando su salud mental y emocional.
            </p>
        ),
    },
    {
        title: 'Espiritual',
        img: 'espiritual.png',
        description: (
            <p className="text-sm lg:text-lg md:text-md mt-4">
                Buscamos el desarrollo espiritual de cada uno de los individuos
                en tratamiento, lo cual ayuda en gran medida al manejo de los
                síntomas de abstinencia.
            </p>
        ),
    },
    {
        title: 'Social',
        img: 'social.png',
        description: (
            <p className="text-sm lg:text-lg md:text-md mt-4">
                Cada persona puede reintegrarse a la sociedad, al trabajo y a
                las relaciones humanas, con el apoyo y seguimiento de nuestros
                consejeros especializados.
            </p>
        ),
    },
];

export default function SpecificObjectives() {
    return (
        <div className="grid lg:gap-4 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 place-items-center p-10">
            {objects.map((objective, index) => (
                <div className='p-5 max-w-[90%]' key={objective.title + index}>
                    <h1 className="text-4xl font-bold mb-9">
                        {objective.title}
                    </h1>
                    <Image
                        src={require(`../../../public/assets/${objective.img}`)}
                        alt="icon"
                        width={100}
                        height={100}
                        loading="lazy"
                    />
                        {objective.description}
                </div>
            ))}
        </div>
    );
}
