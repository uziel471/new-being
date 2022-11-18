import { AiOutlineCheckCircle} from "react-icons/ai";

export default function Section1(){
  const object =  {
    id: 2,
    title: 'BULIMIA',
    pregunta1: '¿QUÉ ES LA BULIMIA?',
    respuesta1: [
      'La bulimia nerviosa es un trastorno alimenticio que se caracteriza por tener episodios de ingesta excesiva de alimentos en poco tiempo, posteriormente causando una preocupación y ansiedad constante a aumentar de peso, recurriendo a inducir el vómito o al uso de laxantes.',
      'Las personas que presentan este trastorno tienen una idea distorsionada de su cuerpo, por lo que les lleva a pensamientos obsesivos del mismo.',
      'En algunos casos puede no ser tan evidente, debido a que la persona no presenta una apariencia o delgadez extrema.'
    ],
    pregunta2: '¿QUÉ PUEDE OCASIONAR?',
    respuesta2: [
      'Problemas cardiacos.',
      'Daños permanentes en el esófago y pancreas.',
      'Problemas dentales.',
      'Depresión y ansiedad.',
      'Alteraciones en la sangre y cambios hormonales.',
      'Estreñimiento crónico.'
    ],
    pregunta3: '¿Cómo identificarlo?',
    respuesta3: [
      'Algunas personas por el miedo obsesivo que le tienen a aumentar de peso recurren a mentir o a ocultar la gravedad del problema, por lo que si reconoces alguno de los siguientes síntomas no dudes en ponerte en contacto con nosotros.',
    ],
    preguntas: [
      'Constante miedo a aumentar de peso.',
      'Dolores de cabeza frecuentes.',
      'Episodios de comer cantidades excesivas de comida en un momento.',
      'Provocar el vómito o hacer ejercicio excesivo después de un atracón.',
      'Uso de laxantes, diuréticos o realizarse enemas.',
      'Pérdida o debilitamiento de cabello, problemas dentales, cara hinchada.',
      'Irregularidades en el ciclo menstrual.',
      'Ir al baño frecuentemente, especialmente después de las comidas.'
    ],
    image: '../assets/Bulimia.jpg'
  };
  return (
    <div className="rounded-br-[430px] bg-[#15284B] h-auto">
      <div>
        <div className="">
          <h1 className="text-white text-4xl ml-[10%] pb-[10px] pt-[100px]">Codependencia</h1>
          <div className="text-white">
            <div className="grid grid-rows-1">
              <div className="grid grid-cols-2 gap-0 place-items-center">
                <div className="w-[65%]">
                  <h3 className="flex p-4 font-semibold text-2xl"> {object.pregunta1} </h3>
                  {object.respuesta1.map((item, index) => (
                    <p key={index} className="text-white text-2x">
                      {item} <br /> <br />
                    </p>
                  ))}
                </div>
                <div className="w-[85%]">
                  <h3 className="flex p-4 font-semibold text-2xl"> {object.pregunta2} </h3>
                  <ul>
                    {object.respuesta2.map((item, index) => (
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
              <div className="w-full h-6/6 rounded-tl-[430px] bg-[#00C1DE] z-19">
                <div className="grid grid-cols-2 place-items-center justify-items-center">
                  <div className="grid grid-rows-2 justify-items-center mt-[100px] w-full">
                    <div className="w-[65%]">
                      <h3 className="flex p-4 font-semibold text-5xl text-[#15284B] mb-[50px]"> {object.pregunta3} </h3>
                      {object.respuesta3.map((item, index) => (
                        <p key={index} className="text-white text-2x">
                          {item} <br /> <br />
                        </p>
                      ))}
                    </div>
                    <div className="w-[65%]">
                      <ul>
                        {object.preguntas.map((item, index) => (
                          <li key={index} className="text-white text-2x">
                            <div className="flex">
                              <div>
                                <AiOutlineCheckCircle size={30} className="m-1" color="#15284B" />
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
                  <div className="w-auto h-auto grid place-items-center">
                    {/* TODO: cambiar imagen por icon */}
                    <img
                      src={object.image}
                      alt="Como Actuar"
                      style={{ borderRadius: "55%", width: '600px', height: "600px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}