export default function Section2() {
  return (
    <div className="w-full rounded-tl-[430px] bg-sky-500/100 z-19">
      <div className="grid grid-cols-2 h-full place-items-end justify-items-center">
        <div className="grid place-items-end">
          <img src="../assets/doctor.png"  alt="doctor"  loading="lazy" />
        </div>
        <div className="grid grid-rows-3 justify-items-start w-full h-5/6">
          <div className="pb-8 text-white">
            <p className="text-4xl">Un equipo</p>
            <p className="text-6xl">profesional y humano</p>
          </div>
          <div>
            <p className="text-3xl text-white">
              Nuestro equipo multidisciplinario experto en,<br/>
              tratamento de adicciones brindan atención<br/>
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