export default function Section3() {
  return (
    <div className="text-[#15284B]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center p-8">
        <div className="grid lg:grid-rows-2 md:grid-rows-1 justify-items-start lg:p-20">
          <div className="">
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[20px]">Playas de Tijuana</h3>
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[30px]">CLÍNICA DE ATENCIÓN SECUNDARIA</h3>
            
          </div>
          <div className="p-2">
            <p>
              Nuestra Unidad de Atención Secundaria y Post-Tratamiento de trastornos es un espacio acondicionado para la recuperación de las personas de forma integral. Cuenta con espacios para sesiones de grupo y terapias individuales, amplio comedor, así como alberca, patios y cómodas habitaciones.
            </p>
            <br />
            <p className="underline decoration-solid">
              <a href="https://goo.gl/maps/y4LrC9Ug4kXDB7KW8">
                P. Ensenada 1384, Playas, Jardines Playas de Tijuana, 22500 Tijuana, B.C.
              </a>
            </p>
          </div>
        </div>
        <div className="w-auto h-auto grid place-items-center">
          {/* TODO: cambiar imagen por icon */}
          <img
            src='../assets/CLINICA_SER-1.jpg'
            alt="Como Actuar"
            style={{ borderRadius: "55%", width: '400px', height: "400px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
