import React from 'react';

export default function MainImage() {
    return (
        <div className="w-screen lg:h-screen text-white mt-[100px]">
            <div className="w-screen lg:h-screen mx auto text-left flex flex-col justify-center">
                <img
                    src='../assets/InstalacionesMain.jpg'
                    className="w-screen lg:h-screen object-cover mix-blend-overlay opacity-90"
                    alt="Home"
                    loading="lazy"
                />
                <div className='lg:pl-36 md:pl-12 pl-4 absolute'>
                    <h3 className="lg:text-5xl md:text-2xl text-xl text-cl font-bold">
                        Instalaciones
                    </h3>
                    <p className="text-sm md:text-md lg:text-lg">
                        Nuestras instalaciones, cuentan con un alto nivel de seguridad.
                    </p>
                    <p className="text-sm md:text-md lg:text-lg">
                        Garantizando la tranquilidad y confidencialidad de cada uno de 
                    </p>
                    <p className="text-sm md:text-md lg:text-lg">
                        nuestros pacientes y sus familias.
                    </p>
                </div>
            </div>
        </div>
    );
}
