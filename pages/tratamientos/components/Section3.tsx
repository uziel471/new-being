export default function Section3() {
  return (
    <div className="bg-[#15284B]">
      <div className="w-full rounded-tl-[430px] bg-[#00C1DE] z-19">
        <div className="grid grid-cols-2 place-items-center justify-items-center">
          <div className="w-4/6 h-4/6 grid place-items-center ">
            <img
              src="../assets/tratamiento-primario_1.png"
              alt="Como Actuar"
              width={400}
              height={400}
              className="rounded opacity-[100%]"
            />
          </div>
          <div className="grid grid-rows-4 justify-items-start w-full mt-10">
            <p className="text-6xl text-white">Tratamiento primario</p>
            <div>
              <p className="text-2xl text-white ">
                Consiste en un Proceso guiado de desintoxicación y rehabilitación,<br/>
                durante este proceso, determinamos cuál es el detonante de las<br/>
                conductas adictivas en el individuo<br/>
                <br/>
              </p>
            </div>
            <div className="mt-15">
              <p className="text-2xl text-white">
                La motivación de cada persona es vial para generar habilidades<br/>
                de comunicación y la recuperación de cada una de sus áreas de<br/>
                oportunidad como ser humano, brindando atención personalizada<br/>
                durante su estadía en la clínica, dependiendo de sus necesidades<br/>
                y progreso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}