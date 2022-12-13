export default function Section3() {
  return (
    <div className="bg-[#15284B]">
      <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center">
        <div>
          <div className="grid lg:grid-rows-2 md:grid-rows-2 grid-rows-1 p-8">
            <div className="">
              <p className="lg:text-4xl text-2xl">Atención las 24 horas, los 365 días del año</p>
              <p className="lg:text-6xl text-3xl">100% confidencial</p>
            </div>
            <div>
              <p className="text-sm md:text-md lg:text-2xl">
                Ofrecemos un tratamiento en un lugar seguro.<br/>
                cómodo, con personal altamente capacitado para<br/>
                garantizar éxito en tu REHABILITACION.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:rounded-br-[430px]">
          <img src="../assets/salaEspera.jpg"  alt="section1" width={600} height={500} className="w-full lg:rounded-br-[380px]"  loading="lazy"/>
        </div>
      </div>
    </div>
  );
}
