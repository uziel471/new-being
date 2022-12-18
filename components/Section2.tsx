import Link from 'next/link';

export default function Section2() {
  return (
    <div className="lg:rounded-tl-[430px] bg-sky-500/100 z-19">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 h-full place-items-end justify-items-center p-8">
        <div className="grid place-items-end">
          <img src="../assets/doctor.png"  alt="doctor"  loading="lazy" />
        </div>
        <div className="grid lg:grid-rows-1 md:grid-rows-1 grid-rows-1 justify-items-start p-2">
          <div className="text-white m-2">
            <p className="lg:text-4xl text-2xl">Un equipo</p>
            <p className="lg:text-4xl text-2xl">profesional y humano</p>
          </div>
          <div>
            <p className="text-sm md:text-md lg:text-2xl text-white m-2">
             “Nuestro equipo multidisciplinario experto en<br/>
              los diversos trastornos que, en un alto porcentaje,<br/> 
              afectan la salud mental, emocional, familiar y social<br/>
              de la población, brinda atención profesional<br/>
              especializada mediante un trato digno y de<br/>
              calidad humana a cada persona en tratamiento”
            </p>
          </div>
          <div>
            <Link href="/tratamientos">
              <button className="outline outline-offset-8 rounded-full p-2 mt-10 text-xl border-black">
                <p className="text-white">CONOCE MÁS</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
