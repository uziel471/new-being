import GenericCarrusel from '../../../components/carrusel';

export default function CarruselUnidad1() {
  const imagesName = [
    'carrusel1-foto1.jpg',
    'carrusel1-foto2.jpg',
    'carrusel1-foto3.jpg',
    'carrusel1-foto4.jpg',
    'carrusel1-foto5.jpg',
    'carrusel1-foto6.jpg',
    'carrusel1-foto7.jpg',
    'carrusel1-foto8.jpg',
    'carrusel1-foto9.jpg',
    'carrusel1-foto10.jpg'
  ];

  return (
    <GenericCarrusel imagesName={imagesName} />
  )
}