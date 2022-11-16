export default function Section4() {
  return (
    <div className="bg-blue-900 h-1/6 w-full">
      <div className="h-full w-full grid grid-cols-2 place-items-center">
        <div>
          <div className="grid grid-rows-3  gap-3 text-white bg-[#00000]">
            <div className="pb-8">
              <p className="text-4xl">¿Necesitas ayuda</p>
              <p className="text-6xl">para ti o un familiar?</p>
            </div>
            <div>
              <p className="text-3xl">
                Contáctanos y permite que uno de nuestros,<br/>
                asesores te guíe en el proceso hacia una<br/>
                recuperación efectiva.
              </p>
            </div>
            <div className="grid grid-cols-2 place-items-start">
              <div>
                <button className="outline outline-offset-8 rounded text-2xl border-black">
                  <p className="text-white">MX +52(664) 143-0939</p>
                </button>
              </div>
              <div>
                <button className="outline outline-offset-8 rounded text-2xl border-black">
                  <p className="text-white">US +1 (619) 734-2339</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1>Formulario</h1>
        </div>
      </div>
    </div>
  );
}