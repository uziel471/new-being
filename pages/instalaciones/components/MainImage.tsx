import React from 'react';

export default function MainImage() {
    return (
        <div className="w-full h-screen text-white z-1">
            <img
                src='../assets/InstalacionesMain.jpg'
                className="w-full h-screen object-cover absolute mix-blend-overlay"
                alt="Home"
                loading="lazy"
            />
            <div className="w-full h-screen  pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center pt-[30%]">
                <h1 className="md:text-7xl sm:text-6xl font-bold">
                    Instalaciones
                </h1>
                <p className="text-2xl">
                    Nuestras instalaciones, cuentan con un alto nivel de seguridad.
                </p>
                <p className="text-2xl">
                    Garantizando la tranquilidad y confidencialidad de cada uno de 
                </p>
                <p className="text-2xl">
                    nuestros pacientes y sus familias.
                </p>
            </div>
        </div>
    );
}
