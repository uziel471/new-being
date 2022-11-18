import NavBar from '../../components/NavBar';
import MainImage from './components/MainImage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section3Uno from './components/Section3.1';
import Section4 from '../../components/Section4'
import Footer from '../../components/Footer';

export default function index() {
    return (
      <div className="flex h-screen min-h-screen w-full flex-col bg-[#00000]">
        <NavBar />
        <main className="">
          <MainImage />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section3Uno />
          <Section4 />
          <Footer />
        </main>
      </div>
    );
}
