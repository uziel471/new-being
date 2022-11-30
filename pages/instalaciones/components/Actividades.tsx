import { AiOutlineCheckCircle} from "react-icons/ai";

export default function Actividades() {
  const ActivityList = [
    'Terapias grupales impartidas por psicólogos, consultores y médicos',
    'Terapias y consultorías individuales',
    'Trabajo en grupos de autoayuda',
    'Técnicas grupales recreativas',
    'Intervención en crisis',
    'Tratamiento familiar',
    'Juntas de meditación',
    'Ejercicio matutino'
  ];
  return (
    <div className="lg:rounded-tl-[430px] bg-[#00C1DE] z-19 p-8 lg:p-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center">
        <div className="place-items-center lg:p-[100px]">
          <h3 className="flex p-4 font-semibold lg:text-3xl md:text-3xl text-xl text-white "> Actividades </h3>
          <div className="text-white lg:text-xl">
            <p>
            Nuestro equipo multidisciplinario experto en tratamiento de 
            trastornos brinda atención profesional, trato digno y calidad humana
            a cada una de las personas recibiendo tratamiento.
            </p>
            <br />
          </div>
        </div>
        <div className="lg:text-xl">
          <ul>
            {ActivityList.map((item, index) => (
              <li key={index} className="text-white text-2x">
                <div className="flex">
                  <div>
                    <AiOutlineCheckCircle size={30} className="m-1" color="#FFFFFF" />
                  </div>
                  <div>
                    {item} <br /> <br />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
         
      </div>
    </div>
  );
}