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
      <div className="rounded-br-[430px] bg-white grid grid-cols-2 place-items-center p-10">
        <div className="">
          <img
            src="../assets/Actividades.jpg"
            alt="Como Actuar"
            style={{ borderRadius: "50%", width: "500px", height: "500px" }}
          />
        </div>
        <div className="w-[85%]">
          <h3 className="flex pb-10 font-semibold text-5xl text-[#15284B]">Apoyo familiar </h3>
          <p className="text1xl pb-10">Tenemos como objetivo prevenir e intervenir de forma oportuna, <br />
          detectando y atendiendo los factores de riesgo, la salud <br/>
          emocional y física de las personas con una patología, así como la<br/>
          de su familia.</p>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="text-[#15284B] text-2x">
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