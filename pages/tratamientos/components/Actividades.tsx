import { AiOutlineCheckCircle} from "react-icons/ai";

export default function Actividades() {
  const list = [
    'Terapias grupales impartidas por psicólogos, consultores y médicos',
    'Terapias y consultorías individuales',
    'Trabajo en grupos de autoayuda',
    'Técnicas grupales recreativas',
    'Intervención en crisis',
    'Juntas de meditación',
    'Tratamiento familiar',
    'Ejercicio fisico'
  ];

  return (
    <div className="bg-[#00C1DE]">
      <div className="lg:rounded-br-[430px] bg-[#15284B] grid lg:grid-cols-2 md:grid-cols-2 place-items-center p-8">
        <div className="">
          <img
            src="../assets/Actividades.jpg"
            alt="Como Actuar"
            className="lg:shadow-lg md:shadow-md shadow-sm lg:max-w-[400px] lg:max-h-[400px] rounded-[100%] max-w-[300px] max-h-[200px] align-middle border-none"
            loading="lazy"
          />
        </div>
        <div className="">
          <h3 className="flex p-10 font-semibold lg:text-5xl text-3xl text-white">Actividades </h3>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="text-white text-sm">
                <div className="flex">
                  <div>
                    <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" />
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