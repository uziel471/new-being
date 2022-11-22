import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
    imagesNames: string[];
}

export function Carrusel({ imagesNames } : Props) {
    return (
        <div>
            <Carousel dynamicHeight={true} showThumbs={false}>
                {imagesNames.map((imageName : string) => (
                    <div>
                        <img src={`../assets/${imageName}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carrusel;