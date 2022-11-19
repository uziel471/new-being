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
      <div className="rounded-br-[430px] bg-[#15284B] grid grid-cols-2 place-items-center p-20">
        <div className="">
          <img
            src="../assets/Actividades.jpg"
            alt="Como Actuar"
            style={{ borderRadius: "50%", width: "500px", height: "500px" }}
            loading="lazy"
          />
        </div>
        <div className="w-[85%]">
          <h3 className="flex p-10 font-semibold text-5xl text-white">Actividades </h3>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="text-white text-2x">
                <div className="flex">
                  <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
                  {item} <br /> <br />
                </div>
              </li>
            ))}
          </ul>
        </div>  
      </div>
    </div>
  );
}