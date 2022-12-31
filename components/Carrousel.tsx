import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carrousel() {
    return (
        <div className="lg:max-h-[800px] md:max-h-[400px]">
            <Carousel showThumbs={false}>
                <div className="lg:max-h-[800px] md:max-h-[400px]">
                    <img style={{ padding: '0 2% 0 2%' }} src="/../assets/c1.jpg" className="opacity-90 lg:max-h-[800px] md:max-h-[400px]" />
                    <div className="absolute inset-y-0 left-0 md:w-2/5 lg:w-4/6 lg:ml-32 md:ml-20 md:mt-[100px] text-white lg:mt-96 ml-10 mt-[45px] w-4/5">
                        <p className="lg:text-4xl md:text-2xl text-xl text-left lg:w-3/6 text-shadow-xl">
                            <b>En México, el 17% de las personas presenta al menos un trastorno mental, y una de cada cuatro lo padecerá como mínimo una vez en su vida.</b>
                        </p>
                        <p className="lg:text-2xl lg:mt-12 md:mt-6 text-sm text-left text-shadow-xl">
                            - OMS. Informe sobre sistema de salud mental en México.
                        </p>
                    </div>
                </div>
                <div className="lg:max-h-[800px] md:max-h-[400px]">
                    <img style={{ padding: '0 2% 0 2%' }} src="/../assets/c2.jpg" className="opacity-100 lg:max-h-[800px] md:max-h-[400px]" />
                   <div className="absolute inset-y-0 left-0 md:w-2/5 lg:w-3/6 lg:ml-32 md:ml-20 md:mt-[100px] text-white lg:mt-96 ml-10 mt-[45px] w-4/5">
                        <p className="text-white lg:text-4xl md:text-3xl text-xl text-left lg:w-3/6 text-shadow-3xl">
                            Te acompañamos en tu proceso de recuperación
                        </p>
                        <p className="text-white lg:text-2xl lg:mt-12 md:mt-6 text-sm text-left text-shadow-3xl">
                            Las personas que sufren una patología y sus familias
                            buscan tranquilidad y entendimiento, permítenos
                            acompañarte y guiarte en tu rehabilitación.
                        </p>
                    </div>
                </div>
                <div className="lg:max-h-[800px] md:max-h-[400px]">
                    <img style={{ padding: '0 2% 0 2%' }} src="/../assets/c3.jpg" className="opacity-90 lg:max-h-[800px] md:max-h-[400px]" />
                   <div className="absolute inset-y-0 left-0 md:w-2/5 lg:w-3/6 lg:ml-32 md:ml-20 md:mt-[100px] text-white lg:mt-96 ml-10 mt-[45px] w-4/5">
                        <p className="text-white lg:text-4xl md:text-3xl text-xl text-left lg:w-3/6 text-shadow-3xl">¿Por qué nosotros?</p>
                        <p className="text-white lg:text-2xl lg:mt-12 md:mt-6 text-sm text-left text-shadow-3xl">
                            Ofrecemos atención integral en el tratamiento de
                            dependencia y salud mental.
                            Brindamos intervención oportuna, orientación y
                            acompañamiento constante.
                        </p>
                    </div>
                </div>
                <div className="lg:max-h-[800px] md:max-h-[400px]">
                    <img style={{ padding: '0 2% 0 2%' }} src="/../assets/c4.jpg" className="opacity-100 lg:max-h-[800px] md:max-h-[400px]" />
                   <div className="absolute inset-y-0 left-0 md:w-2/5 lg:w-3/6 lg:ml-32 md:ml-20 md:mt-[100px] text-white lg:mt-96 mt-[45px] w-4/5">
                        <p className="text-white lg:text-4xl md:text-3xl text-xl text-left lg:w-3/6 text-shadow-3xl">
                            Tengo un familiar con trastornos ¿Cómo puedo ayudar?
                        </p>
                        <p className="text-white lg:text-2xl lg:mt-12 md:mt-6 text-sm text-left text-shadow-3xl">
                            El primer paso ya lo has dado, estás en busca de
                            información sobre las dependencias y has llegado al
                            lugar correcto.
                        </p>
                    </div>
                </div>
                <div className="lg:max-h-[800px] md:max-h-[400px]">
                    <img style={{ padding: '0 2% 0 2%' }} src="/../assets/c5.jpg" className="opacity-90 lg:max-h-[800px] md:max-h-[400px]" />
                   <div className="absolute inset-y-0 left-0 md:w-2/5 lg:w-3/6 lg:ml-32 md:ml-20 md:mt-[100px] text-white lg:mt-96 ml-10 mt-[45px] w-4/5">
                        <p className="lg:text-4xl md:text-3xl text-xl text-left lg:w-3/6 text-shadow-3xl">
                            Conoce nuestras instalaciones
                        </p>
                        <p className="lg:text-2xl lg:mt-12 md:mt-6 text-sm text-left text-shadow-3xl">
                            Contamos con 3 clínicas de atención, con amplias y
                            cómodas instalaciones acondicionadas para el
                            tratamiento efectivo de pacientes y sus familiares
                            con cualquier tipo de trastorno o trastorno mental.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
