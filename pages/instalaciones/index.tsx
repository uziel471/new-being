import NavBar from '../../components/NavBar'
import MainImage from './components/MainImage'
import Unidades from './components/Unidades'
import Section1 from './components/Section1'
import Actividades from './components/Actividades'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import SectionF from './components/SectionF'
import Section4 from '../../components/Section4'
import Footer from '../../components/Footer'
import CarruselUnidad1 from './components/CarruselUnidad1';
import CarruselUnidad2 from './components/CarruselUnidad2'
import CarruselUnidad3 from './components/CarruselUnidad3'

export default function index() {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col">
      <NavBar />
      <main className="">
        <MainImage />
        <Unidades />
        <Section1 />
        <Actividades />
        <CarruselUnidad1 />
        <Section2 />
        <Actividades />
        <CarruselUnidad2 />
        <Section3 />
        <SectionF />
        <CarruselUnidad3 />
        <Section4 />
        <Footer />
      </main>
    </div>
  )
}
