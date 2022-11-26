import NavBar from '../../components/NavBar';
import MainImage from './components/MainImage';
import Section1 from './components/Section1';
// import Section3 from './components/Section3';
import { Section3 } from '../../components/info';
import Etapas from './components/Etapas';
import Section2 from './components/Section2';
import Actividades from './components/Actividades';
import ApoyoFamiliar from './components/ApoyoFamiliar';
import Section4 from '../../components/Section4';
import Footer from '../../components/Footer';

export default function index() {
    return (
      <div className="flex h-screen min-h-screen w-full flex-col bg-[#00000]">
        <NavBar />
        <main className="">
          <MainImage />
          <Section1 />
          <Section3 />
          <Etapas />
          <Actividades />
          <Section2 />
          <ApoyoFamiliar />
          <Section4 />
          <Footer />
        </main>
      </div>
    );
}
