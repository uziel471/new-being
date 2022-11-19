import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';

interface props {
    imagesName: string[];
}

export function GenericCarrusel({ imagesName } : props) {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        const nextIndex = index - 1;

        if (nextIndex < 0) {
            setIndex(imagesName.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    const handleNext = () => {
        setIndex((index + 1) % imagesName.length);
    };

    return (
        <div className="flex flex-col w-full h-screen bg-[#000000] z-1">
            <Image
                src={require(`../../public/assets/${imagesName[index]}`)}
                className="w-full h-screen object-cover opacity-50"
                alt="carrusel"
                loading='lazy'
            />
            <button
                className="absolute left-0 mt-[25%]"
                onClick={handlePrev}
            >
                {' '}
                <AiOutlineLeft
                    size={50}
                    className="ml-5"
                    color="#C9CAC3"
                />{' '}
            </button>
            <button
                className="absolute right-0 mt-[25%]"
                onClick={handleNext}
            >
                {' '}
                <AiOutlineRight
                    size={50}
                    className="m-1"
                    color="#C9CAC3"
                />{' '}
            </button>
        </div>
    );
}

export default GenericCarrusel;