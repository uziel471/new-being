import Link from "next/link";

const href = '/tratamientos'

export function Section2() {
  return (
    <div className="z-19 md:p-0 p-10 lg:p-20 lg:m-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center justify-items-center">
        <div className="">
          <img
            src="../assets/comoActuar.jpg"
            alt="Como Actuar"
            className="lg:shadow-lg md:shadow-md shadow-sm lg:max-w-[400px] lg:max-h-[400px] lg:rounded-[100%] md:rounded-[100%] max-w-[300px] max-h-[200px] align-middle border-none"
            loading="lazy"
          />
        </div>
        <div className="grid lg:grid-rows-4 md:grid-rows-1 lg:justify-items-start md:justify-items-start justify-items-center p-4 md:m-2">
          <p className="text-4xl text-blue-900 p-0 m-2">¿Cómo actuar?</p>
            <div className="mt-15 lg:p-2">
            <p className="text-sm lg:text-lg md:text-md">
              En Clínica Nuevo SER, al ser una clínica de rehabilitación, 
              brindamos tratamientos primarios y secundarios, apoyando a las
              personas con patologías desde el primer momento hasta un
              seguimiento en recuperación. Todo en colaboración con la familia.
              <br/><br/>
            </p>
          </div>
          <div className="mt-15 lg:p-2">
            <p className="text-sm lg:text-lg md:text-md">
            Atención personalizada y una guía para encontrar una vida sin
            adicciones es posible, gracias a nuestro equipo de especialistas en
            adicciones y trastornos de la salud mental, trabajando aspectos
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
    <div className="lg:rounded-tl-[430px] bg-[#00C1DE] p-4">
      <div className="lg:h-1/6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center justify-items-center lg:p-20">
        <div className="grid place-items-center ">
          <img
              src="../assets/tratamiento-primario_1.png"
              alt="Como Actuar"
              className="rounded opacity-[100%]"
              loading="lazy"
            />
        </div>
        <div className="grid lg:grid-rows-4 grid-rows-1 lg:p-10 p-4 lg:justify-items-start justify-items-center md:m-2">
          <h3 className="text-3xl text-white p-1">Tratamiento primario</h3>
          <div className="">
            <p className="text-sm md:text-md lg:text-lg text-white ">
              Consiste en un Proceso guiado de desintoxicación y rehabilitación,
              durante este proceso, determinamos cuál es el detonante de las
              conductas adictivas en el individuo.
              <br/>
              <br/>
            </p>
          </div>
          <div className="mt-15">
            <p className="text-sm lg:text-lg md:text-md text-white">
              La motivación de cada persona es vial para generar habilidades
              de comunicación y la recuperación de cada una de sus áreas de
              oportunidad como ser humano, brindando atención personalizada
              durante su estadía en la clínica, dependiendo de sus necesidades
              y progreso
            </p>
          </div>
          <div>
            <Link href={href}>
              <button className="outline outline-offset-8 rounded mt-10">
                <p className="text-2xl text-white">MÁS INFORMACIÓN</p>
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
      <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center justify-items-center p-8">
          <div className="grid place-items-center ">
            <img
              src="../assets/tratamiento-secundario.png"
              className="rounded opacity-[100%]"
              loading="lazy"
            />
          </div>
        <div className="grid lg:grid-rows-4 grid-rows-1 lg:justify-items-start justify-items-center p-0 md:m-2 lg:mt-10 lg:p-10">
          <p className="text-3xl p-0 m-2">Tratamiento Secundario</p>
          <div className="mt-4 lg:p-2">
            <p className="text-sm lg:text-lg md:text-md ">
              En Clínica Nuevo Ser brindamos un programa post-tratamiento
              conocido como casa de medio camino, teniendo como objectivo un
              seguimiento del individuo, trabajando en áreas multidiciplinarias
              para el bienestar personal y de su entorno familiar.
              <br/>
            </p>
          </div>
          <div>
            <Link href={href}>
              <button className="outline outline-offset-8 rounded mt-10">
                <p className="text-blue-300 text-2xl">MÁS INFORMACIÓN</p>
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
    <div className="">
      <Section2 />
      <Section3 />
      <Section3Uno />
    </div>
  );
}