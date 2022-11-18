export default function Section3() {
  return (
    <div className="bg-[#15284B]">
      <div className="h-full rounded-br-[430px] bg-white grid grid-cols-2 place-items-center">
        <div>
          <div className="grid grid-rows-2">
            <div className="pb-8">
              <p className="text-4xl">Atención 24hrs</p>
              <p className="text-6xl">100% confidencial</p>
            </div>
            <div>
              <p className="text-3xl">
                Ofrecemos un tratamiento en un luga seguro,<br/>
                cómodo, con personal altamente capacitado para<br/>
                garantizar éxito en tu rehabilitacion.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-br-[430px]">
          <img src="../assets/salaEspera.jpg"  alt="section1" width={600} height={500} className="w-full rounded-br-[380px]"/>
        </div>
      </div>
    </div>
  );
}