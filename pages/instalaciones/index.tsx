import NavBar from '../../components/NavBar'
import MainImage from './components/MainImage'
import Unidades from './components/Unidades'
import Section1 from './components/Section1'
import Actividades from './components/Actividades'
import Section2 from './components/Section2'
import Actividades2 from './components/Actividades2'
import Section3 from './components/Section3'
import SectionF from './components/SectionF'
import Section4 from '../../components/Section4'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col">
      <NavBar />
      <main className="">
        <MainImage />
        <Unidades />
        <Section1 />
        <Actividades />
        {/* carrousel section 1 */}
        <Section2 />
        <Actividades2 />
        {/* carrousel section 2 */}
        <Section3 />
        <SectionF />
        {/* carrousel section 3 */}
        <Section4 />
        <Footer />
      </main>
    </div>
  )
}
