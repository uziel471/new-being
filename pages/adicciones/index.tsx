import NavBar from '../../components/NavBar';
import MainImage from './components/MainImage';
import Section1 from './components/Section1';
import Info from '../../components/info';
import Section4 from '../../components/Section4'
import Footer from '../../components/Footer';

export default function index() {
    return (
      <div className="flex h-screen min-h-screen w-full flex-col bg-[#00000]">
        <NavBar />
        <main className="">
          <MainImage />
          <Section1 />
          <Info />
          <Section4 />
          <Footer />
        </main>
      </div>
    );
}
