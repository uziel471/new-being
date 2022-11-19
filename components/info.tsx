import Link from "next/link";

const href = '/tratamientos'

export function Section2() {
  return (
    <div className="w-full z-19 h-auto">
      <div className="grid grid-cols-2 place-items-center justify-items-center">
        <div className="">
          <img
            src="../assets/comoActuar.jpg"
            alt="Como Actuar"
            style={{ borderRadius: "50%", width: "500px", height: "500px" }}
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

export function Section3() {
  return (
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
          <div>
            <Link href={href}>
              <button className="outline outline-offset-8 rounded mt-10">
                <p className="text-blue-300 text-3xl text-white">MÁS INFORMACIÓN</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Section3Uno() {
  return (
    <div className="bg-[#15284B]">
      <div className="rounded-br-[430px] h-full bg-white grid grid-cols-2 place-items-center justify-items-center">
          <div className="w-4/6 h-4/6 grid place-items-center ">
            <img
              src="../assets/tratamiento-secundario.png"
              width={400}
              height={400}
              className="rounded opacity-[100%]"
            />
          </div>
        <div className="grid grid-rows-5 justify-items-start w-full">
          <div></div>
          <p className="text-6xl">Tratamiento Secundario</p>
          <div>
            <p className="text-2xl ">
              En Clínica Nuevo Ser brindamos un programa post-tratamiento<br/>
              conocido como casa de medio camino, teniendo como objectivo un<br/>
              seguimiento del individuo, trabajando en áreas multidiciplinarias<br/>
              para el bienestar personal y de su entorno familiar.
              <br/>
            </p>
          </div>
          <div>
            <Link href={href}>
              <button className="outline outline-offset-8 rounded mt-10">
                <p className="text-blue-300 text-3xl">MÁS INFORMACIÓN</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Info() {
  return (
    <div className="w-full">
      <Section2 />
      <Section3 />
      <Section3Uno />
    </div>
  );
}