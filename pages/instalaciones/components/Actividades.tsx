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
    <div className="w-full rounded-tl-[430px] bg-[#00C1DE] z-19 p-[80px]">
      <div className="grid grid-cols-2 place-items-center justify-items-center">
        <div className="w-4/6 h-4/6 place-items-center ">
          <h3 className="flex p-4 font-semibold text-5xl text-white "> Actividades </h3>
          <div className="w-[100%] pb-[50px] text-white">
            <p>
            Nuestro equipo multidisciplinario experto en tratamiento de <br />
            adicciones brinda atención profesional, trato digno y calidad humana<br />
            a cada una de las personas recibiendo tratamiento.<br />
            </p>
            <br />
          </div>
        </div>
        <div className="full h-full">
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