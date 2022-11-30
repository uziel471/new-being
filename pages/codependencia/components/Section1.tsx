import { AiOutlineCheckCircle} from "react-icons/ai";

export default function Section1(){
  const object =  {
    id: 2,
    title: 'BULIMIA',
    pregunta1: '¿QUÉ ES LA CODEPENDENCIA?',
    respuesta1: [
      'La codependencia puede ocurrir en cualquier persona que está en contacto con la trastorno de otra persona, ya sea un familiar, amigo, compañero, pareja que sufra de trastorno.',
      'Además existen otros desordenes de conducta y enfermedades que pueden generar codependencia, tales como la esquizofrenia, la violencia, el maltrato y las neurosis.',
      'Toda persona expuesta a estos desórdenes, puede desarrollar codependencia.'
    ],
    pregunta2: '¿QUÉ PUEDE OCASIONAR?',
    respuesta2: [
      'Sufrir o cometer violencia física y emocional.',
      'Baja autoestima.',
      'Depresión y ansiedad.',
      'Mala calidad de vida.',
      'Repetir patrones y que tus hijos también lo hagan.',
      'Relaciones inestables y poco saludables.'
    ],
    pregunta3: 'Identifica el problema',
    respuesta3: [
      'Muchas veces alguien que ha desarrollado codependencia por crecer en una ambiente disfuncional adictivo, no manifiesta grandes síntomas hasta que se casa o forma una relación de pareja.'
    ],
    preguntas: [
      'Dificultad para establecer y mantener relaciones íntimas sanas.',
      'Conductas compulsivas.',
      'Necesidad obsesiva de controlar la conducta de otros',
      'Sentirse responsables por las conductas de otros.',
      'Dependencia de la aprobación externa.',
      'Profundos sentimientos de incapacidad.'
    ],
    image: '../assets/Codependencia2.jpg'
  };
  return (
    <div className="rounded-br-[430px] bg-[#15284B] h-auto">
      <div>
        <div className="">
          <h1 className="text-white text-4xl p-4">Codependencia</h1>
          <div className="text-white">
            <div className="grid grid-rows-1">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-0 place-items-center p-8">
                <div className="">
                  <h3 className="flex p-4 font-semibold text-2xl lg:text-3xl"> {object.pregunta1} </h3>
                  {object.respuesta1.map((item, index) => (
                    <p key={index} className="text-white text-sm lg:text-2xl md:text-md">
                      {item} <br /> <br />
                    </p>
                  ))}
                </div>
                <div className="">
                  <h3 className="flex p-4 font-semibold lg:text-2xl text-xl"> {object.pregunta2} </h3>
                  <ul>
                    {object.respuesta2.map((item, index) => (
                      <li key={index} className="text-white text-sm lg:text-2xl md:text-md">
                        <div className="flex">
                          <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
                          {item} <br /> <br />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>  
              </div>
              <div className="w-screen lg:rounded-tl-[430px] bg-[#00C1DE] z-19">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center lg:p-20 p-8">
                  <div className="grid lg:grid-rows-2 md:grid-rows-2 justify-items-center lg:mt-[100px]">
                    <div className="">
                      <h3 className="flex p-4 font-semibold lg:text-4xl text-3xl text-[#15284B] p-8"> {object.pregunta3} </h3>
                      {object.respuesta3.map((item, index) => (
                        <p key={index} className="text-white text-sm lg:text-2xl">
                          {item} <br /> <br />
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <ul>
                        {object.preguntas.map((item, index) => (
                          <li key={index} className="text-white text-sm lg:text-2xl md:text-md">
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
                  <div className="h-auto grid place-items-center">
                    <img
                      src={object.image}
                      alt="Como Actuar"
                      className="lg:shadow-lg md:shadow-md shadow-sm lg:max-w-[400px] lg:max-h-[400px] rounded-[100%] max-w-[300px] max-h-[200px] align-middle border-none"
                      loading="lazy"
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