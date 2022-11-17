import CollapsDetail from "../../../components/CollapsDetail";

export default function Section1() {
  const tiposAdicciones = [
    {
      id: 1,
      title: 'Alcoholismo',
      pregunta1: 'QUÉ ES EL ALCOHOLISMO?',
      respuesta1: [
        'Un trastorno donde los hábitos de consumo de bebidas alcohólicas se vuelven conductas peligrosas, de las cuales no se puede prescindir, causando dependencia psicológica e incluso fisiológica.',
        'Como Centro de rehabilitación, sabemos que el alcholismo afecta tanto al consumidor como a las personas con las que convive, por lo que queremos otorgarte herramientas para poder afrontar las adicción con ayuda de profesionales.',
        'Consumir grandes contidades de alcohol aumenta el riesgo de accidentes automovilísticos, lesiones,homicidios y suicidios.'
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Ansia por beber, aumeto en cantidad y frecuencia en el consumo (aumento de tolerancia al alcohol).',
        'Incapacidad para dejar de beber.',
        'Estado emocional negativo, sintiendo irritabilidad o ansiedad cuando no se estaá consumiendo.',
        'Desarrollar distintos tipos de cáncer.',
        'Desarrollar enfermedades en el hígado.',
        'Potencialmente desarrollar otro tipo de adicciones.',
      ],
    }
  ];
  return (
    <div className="h-1/6 rounded-br-[430px] bg-[#15284B]">
      <div className="grid grid-cols-2 gap-4 place-items-center ">
        <div>
          <h1 className="text-white text-4xl">Tipos de adicciones</h1>
          <CollapsDetail
            array={tiposAdicciones}
          />
        </div>
      </div>
    </div>
  );
}