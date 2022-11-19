import GenericCarrusel from '../../../components/carrusel';

export default function CarruselUnidad3() {
  const imagesName = [
    'carrusel3-foto2.jpg',
    'carrusel3-foto3.jpg',
    'carrusel3-foto4.jpg',
    'carrusel3-foto5.jpg',
    'carrusel3-foto6.jpg',
    'carrusel3-foto7.jpg',
    'carrusel3-foto8.jpg',
    'carrusel3-foto9.jpg',
    'carrusel3-foto10.jpg',
    'carrusel3-foto1.jpg',
  ];

  return (
    <GenericCarrusel imagesName={imagesName} />
  )
}