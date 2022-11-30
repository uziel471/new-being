import { AiOutlineCheckCircle} from "react-icons/ai";
import Link from "next/link";

export default function Section1() {
  const list = [
    {
      title: 'TRASTORNOS',
      list: [
        'Alcoholismo',
        'Drogadicción',
        'Juego patológico (ludopatía)',
        'Oniomanía (adicción a las compras)',
        'Patología dual',
      ],
      link: '/trastornos',
    },
    {
      title: 'ENFERMEDADES MENTALES',
      list: [
        'Estrés Postraumático (PTSD)',
        'Depresión',
        'Ansiedad',
        'Déficit de atención e hiperactividad',
        'Trastorno de sueño',
        'Esquizofrenia',
      ],
      link: '/enfermedades-mentales'
    },
    {
      title: 'TRASTORNOS ALIMENTICIOS (TCA)',
      list: [
        'Anorexia',
        'Bulimia',
        'Trastorno por atracón'
      ],
      link: '/trastornos-alimenticios'
    },
    {
      title: 'CODEPENDENCIA',
      link: '/codependencia'
    },
  ];

  return (
      <div className="bg-[#15284B] lg:grid grid-cols-2 md:grid grid-cols-2 place-items-center justify-items-center lg:p-20">
          <div className="text-white p-8">
            <div>
              <p className="text-3xl">Tratamiento Secundario</p>
              <br /><br />
            </div>
            <div>
              <p className="text-sm md:text-md lg:text-2xl ">
                En Clínica Nuevo Ser brindamos un programa post-tratamiento
                conocido como casa de medio camino, teniendo como objectivo un
                seguimiento del individuo, trabajando en áreas multidiciplinarias
                para el bienestar personal y de su entorno familiar.
                <br/>
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-items-start">
            <div className=""> 
              <div className="text-white">
                {list.map((item) => {
                  if (item.list) {
                    return (
                    <details className="group w-full" key={item.title}>
                      <summary className="list-none flex flex-wrp items-center cursor-pointer ml-[9%]">
                        <h3 className="flex p-4 font-semibold lg:text-3xl text-2xl text-[#00C1DE]"> {item.title} </h3>
                        <div className="flex w-10 items-center justify-center">
                          <div className="border-8 border-transparent border-l-gray-600 ml-2
                          group-open:rotate-90 transition-transform origin-left"></div>
                        </div>
                      </summary>
                      <div className="grid grid-rows-1 lg:w-[85%]">
                        <ul className="ml-[60px]">
                          {item.list && item.list.map((item, index) => (
                            <li key={index} className="text-white text-sm md:text-md lg:text-2xl">
                              <div className="flex">
                                <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
                                {item} <br /> <br />
                              </div>
                            </li>
                          ))}
                        </ul>
                        <Link href={item.link}>
                          <button className="outline outline-offset-1 ml-[60px] p-3 w-[250px] rounded-full lg:text-xl text-sm text-[#00C1DE]">
                            <p className="text-white">MÁS INFORMACIÓN</p>
                          </button>
                        </Link>
                      </div>
                    </details>
                  )
                  }
                  return (
                    <Link href={item.link} key={item.link}>
                      <h3 className="flex p-4 font-semibold lg:text-3xl text-2xl text-[#00C1DE] ml-[9%]"> {item.title} </h3>
                    </Link>
                  )
                })}
                </div>
            </div>
          </div>
      </div>
  );
}