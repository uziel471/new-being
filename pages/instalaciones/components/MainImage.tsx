import React from 'react';

export default function MainImage() {
    return (
        <div className="w-screen lg:h-screen text-white">
            <div className="w-screen lg:h-screen mx auto text-left flex flex-col justify-center">
                <img
                    src='../assets/InstalacionesMain.jpg'
                    className="w-screen lg:h-screen object-cover mix-blend-overlay opacity-90"
                    alt="Home"
                    loading="lazy"
                />
                <div className='lg:pl-36 md:pl-12 pl-4 absolute'>
                    <h3 className="lg:text-6xl md:text-4xl text-xl text-cl font-bold text-shadow-3xl">
                        Instalaciones
                    </h3>
                    <p className="text-sm md:text-xl lg:text-3xl text-shadow-3xl">
                        Nuestras instalaciones, cuentan con un alto nivel de seguridad.
                    </p>
                    <p className="text-sm md:text-xl lg:text-3xl text-shadow-3xl">
                        Garantizando la tranquilidad y confidencialidad de cada uno de 
                    </p>
                    <p className="text-sm md:text-xl lg:text-3xl text-shadow-3xl">
                        nuestros pacientes y sus familias.
                    </p>
                </div>
            </div>
        </div>
    );
}
