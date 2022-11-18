import React from 'react';
import Image from 'next/image';
import photo from '../../../public/assets/issac.jpg';

export default function FounderSection() {
    return (
        <div className="grid grid-cols-3">
            <div className="bg-cyan-500 col-span-2 h-full">
                <div className="mx-32 mt-28 mb-28">
                    <h1 className="text-4xl font-bold text-white">Fundador Isaac Alvo</h1>
                    <div>
                        <p className="text-2xl mt-4 text-white">
                            Nuestro fundador <b>Isaac Alvo</b> ha sido pionero en el
                            tratamiento de <br />
                            adicciones en México. Contando con una <b>vasta
                            experiencia</b> en el <br /> proceso de intervención,
                            desintoxicación, rehabilitación y reinserción <br />{' '}
                            efectiva de más de <b>15,000 personas</b> con problemas de
                            adicción. <br />
                            <br />
                            Manteniendo un <b>alto nivel de casos de éxito</b>, los
                            cuales son testimonio <br />
                            de su calidad humana y profesionalismo. Mismo que ha
                            logrado <br />
                            impulsar su visión en Clínica Nuevo SER para
                            convertirse en la Clínica <br /> de Rehabilitación
                            de Adicciones <b>más efectiva de México. </b>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Image className='h-[100%]' src={photo} alt="issac-photo" />
            </div>
        </div>
    );
}
