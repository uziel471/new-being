import Contact from './forms/Contact';

export default function Section4() {
  return (
    <div className="bg-[#15284B] p-8">
      <a id="Contactanos" className="block" />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-center">
        <div>
          <div className="grid grid-rows-3 lg:gap-4 text-white bg-[#00000]">
            <div className="">
              <p className="text-4xl">¿Necesitas ayuda</p>
              <p className="lg:text-6xl md:text-4xl">para ti o un familiar?</p>
            </div>
            <div>
              <p className="lg:text-lg md:text-md text-sm">
                <br/>
                Contáctanos y permite que uno de nuestros,<br/>
                asesores te guíe en el proceso hacia una<br/>
                recuperación efectiva.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 place-items-center">
              <div className="pb-5">
                <button className="outline outline-offset-4 p-2 rounded-full text-sm outline-[#00C1DE]">
                  <p className="text-white">MX +52 (664) 143-0939</p>
                </button>
              </div>
              <div className="pb-5">
                <button className="outline outline-offset-4 p-2 rounded-full text-sm outline-[#00C1DE]">
                  <p className="text-white">US +1 (619) 734-2339 &nbsp; </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-4/6 w-6/6">
          <Contact />
        </div>
      </div>
    </div>
  );
}
