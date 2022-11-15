import NavBar from '../components/NavBar'
import Carrousel from '../components/Carrousel'
import Section1 from '../components/section1'
import Section2 from '../components/Section2'

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col">
      <NavBar />
      <main className="">
        <Carrousel />
        <Section1 />
        <Section2 />
      </main>
    </div>
  )
}
