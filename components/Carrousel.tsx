import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carrousel() {
    return (
        <div className="w-full">
            <Carousel showThumbs={false}>
                <div>
                    <img src="/../assets/c1.jpg" />
                    <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96">
                        <p className="text-4xl w-3/6">
                            25% de la población padece de salud mental
                        </p>
                        <p className="text-2xl mt-12 text-left ">
                            Más de 350 millones de personas en el mundo de todas
                            las edades sufre de depresión y se calcula que entre
                            el 60-65% no recibe atención médica.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/../assets/c2.jpg" />
                    <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96">
                        <p className="text-4xl w-3/6">
                            Te acompañamos en tu proceso de recuperación
                        </p>
                        <p className="text-2xl mt-12 text-left ">
                            Las personas que sufren una patología y sus familias
                            buscan tranquilidad y entendimiento, permítenos
                            acompañarte y guiarte en tu rehabilitación.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/../assets/c3.jpg" />
                    <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96">
                        <p className="text-4xl w-3/6">¿Por qué nosotros?</p>
                        <p className="text-2xl mt-12 text-left ">
                            Ofrecemos atención integral en el tratamiento de
                            adicciones, drogas, alcoholismo y salud mental.
                            Brindamos intervención oportuna, orientación y
                            acompañamiento constante.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/../assets/c4.jpg" />
                    <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96">
                        <p className="text-4xl w-3/6">
                            Tengo un familiar adicto ¿Cómo puedo ayudar?
                        </p>
                        <p className="text-2xl mt-12 text-left ">
                            El primer paso ya lo has dado, estás en busca de
                            información sobre las adicciones y has llegado al
                            lugar correcto.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/../assets/c5.jpg" />
                    <div className="absolute inset-y-0 left-0 w-2/5 ml-32 text-white mt-96">
                        <p className="text-4xl w-3/6">
                            Conoce nuestras instalaciones
                        </p>
                        <p className="text-2xl mt-12 text-left ">
                            Contamos con 3 clínicas de atención, con amplias y
                            cómodas instalaciones acondicionadas para el
                            tratamiento efectivo de pacientes y sus familiares
                            con cualquier tipo de adicción o trastorno mental.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
