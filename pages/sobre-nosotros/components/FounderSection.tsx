import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/issac.jpg';

export default function FounderSection() {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center bg-cyan-500">
            <div className="">
                <div className="grid place-items-center">
                    <h1 className="text-3xl font-bold text-white pt-5">Fundador Isaac Alvo</h1>
                    <div className='p-5 lg:p-10'>
                        <p className="lg:text-lg md:text-md text-sm mt-4 text-white">
                            Nuestro fundador <b>Isaac Alvo</b> ha sido pionero en el
                            tratamiento de
                            trastornos en México. Contando con una <b>vasta
                            experiencia</b> en el proceso de intervención,
                            desintoxicación, rehabilitación y reinserción{' '}
                            efectiva de más de <b>15,000 personas</b> con problemas de
                            trastorno.
                        
                            Manteniendo un <b>alto nivel de casos de éxito</b>, los
                            cuales son testimonio
                            de su calidad humana y profesionalismo. Mismo que ha
                            logrado
                            impulsar su visión en Clínica Nuevo SER para
                            convertirse en la Clínica de Rehabilitación
                            de trastornos <b>más efectiva de México. </b>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Image className='h-[100%]' src={photo} alt="issac-photo" loading='lazy' />
            </div>
        </div>
    );
}
