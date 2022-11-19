export default function Section2() {
  return (
    <div className="w-full z-19 h-auto">
      <div className="grid grid-cols-2 place-items-center justify-items-center">
        <div className="">
          <img
            src="../assets/comoActuar.jpg"
            alt="Como Actuar"
            style={{ borderRadius: "50%", width: "500px", height: "500px" }}
            loading="lazy"
          />
        </div>
        <div className="grid grid-rows-4 justify-items-start w-full">
          <p className="text-6xl text-blue-900 p-0 mt-10">¿Cómo actuar?</p>
          <div>
            <p className="text-2xl ">
              En Clínica Nuevo SER, al ser una clínica de rehabilitación, <br />
              brindamos tratamientos primarios y secundarios, apoyando a las<br />
              personas con patologías desde el primer momento hasta un<br />
              seguimiento en recuperación. Todo en colaboración con la familia.<br />
              <br/>
            </p>
          </div>
          <div className="mt-15">
            <p className="text-2xl">
            Atención personalizada y una guía para encontrar una vida sin<br />
            adicciones es posible, gracias a nuestro equipo de especialistas en<br />
            adicciones y trastornos de la salud mental, trabajando aspectos<br />
            físicos, espirituales, sociales y mentales.
            </p>
          </div>
          <div>
            <button className="outline outline-offset-8 rounded mt-10">
              <p className="text-blue-300 text-3xl">CONTÁCTANOS</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}