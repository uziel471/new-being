import { AiOutlineCheckCircle} from "react-icons/ai";

export default function Section1() {
  const list = [
    {
      title: 'ADICCIONES',
      list: [
        'Alcoholismo',
        'Drogadicción',
        'Juego patológico (ludopatía)',
        'Oniomanía (adicción a las compras)',
        'Patología dual',
      ],
      link: ''
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
      link: ''
    },
    {
      title: 'TRASTORNOS ALIMENTICIOS (TCA)',
      list: [
        'Anorexia',
        'Bulimia',
        'Trastorno por atracón'
      ],
      link: ''
    },
    {
      title: 'CODEPENDENCIA',
      link: ''
    },
  ];

  return (
      <div className="w-full bg-[#15284B] grid grid-cols-2 place-items-center justify-items-center p-20">
          <div className="w-6/6 h-6/6 text-white">
            <div>
              <p className="text-6xl">Tratamiento Secundario</p>
              <br /><br />
            </div>
            <div>
              <p className="text-2xl ">
                En Clínica Nuevo Ser brindamos un programa post-tratamiento<br/>
                conocido como casa de medio camino, teniendo como objectivo un<br/>
                seguimiento del individuo, trabajando en áreas multidiciplinarias<br/>
                para el bienestar personal y de su entorno familiar.
                <br/>
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-items-start w-full">
            <div className=""> 
              <div className="text-white">
                {list.map((item, index) => {
                  if (item.list) {
                    return (
                    <details className="group w-full">
                      <summary className="list-none flex flex-wrp items-center cursor-pointer ml-[9%]">
                        <h3 className="flex p-4 font-semibold text-3xl text-[#00C1DE]"> {item.title} </h3>
                        <div className="flex w-10 items-center justify-center">
                          <div className="border-8 border-transparent border-l-gray-600 ml-2
                          group-open:rotate-90 transition-transform origin-left"></div>
                        </div>
                      </summary>
                      <div className="grid grid-rows-1 w-[85%]">
                        <ul className="ml-[60px]">
                          {item.list && item.list.map((item, index) => (
                            <li key={index} className="text-white text-2x">
                              <div className="flex">
                                <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
                                {item} <br /> <br />
                              </div>
                            </li>
                          ))}
                        </ul>
                        <button className="outline outline-offset-1 ml-[60px] p-3 w-[250px] rounded-full text-xl text-[#00C1DE]">
                          <p className="text-white">MÁS INFORMACIÓN</p>
                        </button>
                      </div>
                    </details>
                  )
                  }
                  return (
                    <h3 className="flex p-4 font-semibold text-3xl text-[#00C1DE] ml-[60px]"> {item.title} </h3>
                  )
                })}
                </div>
            </div>
          </div>
      </div>
  );
}