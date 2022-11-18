import CollapsDetail from "../../../components/CollapsDetail";
export default function Section1(){
  const enfermedades = [
    {
      id: 1,
      title: 'ESQUIZOFRENIA',
      pregunta1: '¿QUÉ ES LA ESQUIZOFRENIA?',
      respuesta1: [
        'La esquizofrenia es una enfermedad mental en la que la realidad de la persona se ve alterada, pues sufre de alucinaciones, delirios y trastornos del pensamiento. Esta patología debe de ser tratada desde que se diagnostica hasta el resto de vida de la persona.',
        'Esta enfermedad mental afecta el funcionamiento diario del individuo, por lo que es de suma importancia su tratamiento oportuno y temprano.',
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Alucinaciones auditivas y/o visuales.',
        'Deterioro del lenguaje y cognición, que se manifiesta a través de dificultades para comunicarse.',
        'Inestabilidad emocional, comportamientos obsesivos.',
        'Aislamiento y problemas de socialización.',
        'Poner en riesgo la vida de la persona.',
        'Problemas familiares.'
      ],
      pregunta3: '¿Cómo identificarlo?',
      respuesta3: [
        'No existen síntomas cuya aparición sea suficiente para emitir el diagnóstico, sino que este debe ser realizado por un especialista. Sin embargo, algunas de las características de la esquizofrenia son las siguientes:',
      ],
      preguntas: [
       'Delirios (estos se presentan de manera negativa).',
       'Alucinaciones, estas se pueden experimentar a través de cualquiera de los sentidos.',
       'Aislamiento.',
       'Ideas obsesivas basadas en hechos falsos o infundidos.',
       'Comportamiento extravagante o violento, apatía (manifestándose como una falta de energía, motivación e interés)',
       'Presencia de un deterioro laboral o social.',
       'Lenguaje y pensamiento desorganizado.',
      ],
      image: '../assets/Esquizofrenia.jpg'
    },
  ];
  return (
    <div className="rounded-br-[430px] bg-[#15284B] h-auto">
      <div>
        <div className="pb-[200px]">
          <h1 className="text-white text-4xl ml-[10%] pb-[10px] pt-[100px]">Tipos de enfermedades mentales</h1>
          <CollapsDetail
            array={enfermedades}
          />
        </div>
      </div>
    </div>
  );
}