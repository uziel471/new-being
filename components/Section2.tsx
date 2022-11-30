export default function Section2() {
  return (
    <div className="lg:rounded-tl-[430px] bg-sky-500/100 z-19">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 h-full place-items-end justify-items-center p-8">
        <div className="grid place-items-end">
          <img src="../assets/doctor.png"  alt="doctor"  loading="lazy" />
        </div>
        <div className="grid lg:grid-rows-3 md:grid-rows-3 grid-rows-1 justify-items-start p-2">
          <div className="text-white">
            <p className="lg:text-4xl text-2xl">Un equipo</p>
            <p className="lg:text-6xl text-3xl">profesional y humano</p>
          </div>
          <div>
            <p className="text-sm md:text-md lg:text-2xl text-white">
              Nuestro equipo multidisciplinario experto en,<br/>
              tratamento de trastornos brindan atención<br/>
              profesional, trato digno y calidad humana a cada <br/>
              persona en tratamiento.
            </p>
          </div>
          <div>
            <button className="outline outline-offset-8 rounded-full p-2 mt-10 text-xl border-black">
              <p className="text-white">CONOCE MÁS</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}