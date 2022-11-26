import { AiOutlineCheckCircle} from "react-icons/ai";

export default function ApoyoFamiliar() {
  const list = [
    'Talleres familiares',
    'Conferencias y talleres',
    'Cursos y diplomados',
    'Programas de reforzamiento'
  ];

  return (
    <div className="bg-[#15284B]">
      <div className="lg:rounded-br-[430px] bg-white grid lg:grid-cols-2 md:grid-cols-2 place-items-center p-10">
        <div className="">
          <img
            src="../assets/ApoyoFamiliar.jpg"
            alt="Como Actuar"
            className="lg:shadow-lg md:shadow-md shadow-sm lg:max-w-[400px] lg:max-h-[400px] rounded-[100%] max-w-[300px] max-h-[200px] align-middle border-none"
            loading="lazy"
          />
        </div>
        <div className="">
          <h3 className="flex p-5 font-semibold lg:text-5xl text-3xl text-[#15284B]">Apoyo familiar </h3>
          <p className="text-sm md:text-md lg:text-xl pb-10">Tenemos como objetivo prevenir e intervenir de forma oportuna,
          detectando y atendiendo los factores de riesgo, la salud
          emocional y física de las personas con una patología, así como la
          de su familia.</p>
          <ul>
            {list.map((item, index) => (
              <li key={item + index} className="text-[#15284B] text-sm md:text-md lg:text-2xl">
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