export default function Etapas() {
  const Etapas = [
    {
      id: 1,
      image: '../assets/step1.png',
      title: 'EVALUACIÓN INICIAL',
      description: [
        'Analizamos la situación en particular de la persona,',
        'permitiéndonos desarrollar un plan de tratamiento individual',
        ' adecuado a sus necesidades'
      ],
    },
    {
      id: 2,
      image: '../assets/step1.png',
      title: 'EXÁMENES MÉDICOS',
      description: [
        'Realizamos exámenes de antidoping, análisis de laboratorio y un',
        'chequeo médico general, brindando atención adecuada al ',
        'individuo.'
      ],
    },
    {
      id: 3,
      image: '../assets/step1.png',
      title: 'PROCESO DE REHABILITACIÓN',
      description: [
        'Ayudamos a manejar los síntomas de abstinencia y la ansiedad a',
        'través de medicamentos, no adictivos. Apoyado por nuestros',
        'especialistas en psicología y psiquiatría.'
      ],
    },
    {
      id: 4,
      image: '../assets/step1.png',
      title: 'INCORPORACIÓN A LAS ACTIVIDADES',
      description: [
        'La persona participa en sesiones alternativas, individuales y',
        'grupales, mejorando su autoestima, autoconcepto y la aceptación',
        'de la realidad, al igual que un plan alimenticio saludable.'
      ],
    },
    {
      id: 5,
      image: '../assets/step1.png',
      title: 'ACOMPAÑAMIENTO PSICOLÓGICO',
      description: [
        ' Cada persona cuenta con un psicólogo asignado manejando su',
        'desarrollo a través de terapias individuales, grupales y familiares,',
        'en un entorno de amor y confidencialidad.'
      ],
    },
    {
      id: 6,
      image: '../assets/step1.png',
      title: 'EGRESO Y SEGUIMIENTO',
      description: [
        'Analizamos el éxito del tratamiento primario y determinamos si la',
        'recuperación ha sido suficiente, estableciendo un plan de',
        'seguimiento para el individuo y su familia de forma personalizado.'
      ],
    }
  ];
    
  return (
    <div>
      <div className="ml-[100px]">
        <h1 className="text-4xl pt-10 pb-10">Etapas</h1>
        <p className="pb-[30px]">Contamos con una metodología adecuada a la persona y su<br />
          familia, brindando apoyo en cada parte de su recuperación:</p>
      </div>
      <div className="grid gap-8 grid-cols-2 justify-items-center place-content-center">
        {Etapas.map((etapa) => (
          <div className="p-10">
            <img src={etapa.image} alt="step1" width={150} height={150} />
            <h1 className="text-3xl pt-10 pb-10 text-[#00C1DE]">{etapa.title}</h1>
            {etapa.description.map((item) => (
              <p className="text-xl">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}