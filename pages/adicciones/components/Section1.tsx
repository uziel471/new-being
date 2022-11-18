import CollapsDetail from "../../../components/CollapsDetail";

export default function Section1() {
  const tiposAdicciones = [
    {
      id: 1,
      title: 'ALCOHOLISMO',
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
      pregunta3: 'Identifica el problema',
      respuesta3: [
        'La Adicción al alcohol es un problema real y se puede presentar cuando sea y en quien sea. Al ser una bebida de consumo social es común que no se identifique como un problema. Sin embargo, si la respuesta a las siguientes preguntas son afirmativas, permítenos ayudarte.',
      ],
      preguntas: [
        '¿Eres incapaz de limitar la cantidad de alcohol que consumes?',
        '¿Seguiste bebiendo a pesar de que el alcohol te hace sentir deprimido, ansioso oenfermo?',
        '¿Abandonas tus pasatiempos, actividades sociales o laborales para consumir alcohol?',
        '¿Sientes la necesidad de beber más para sentir los efectos del alcohol?',
        '¿Tuvistes síntomas de abstinencia cuando no consumes alcohol (ansiedad, náuseas, sudores, problemas para dormir)?',
      ],
      image: '../assets/Alcoholismo.jpg'
    },
    {
      id: 2,
      title: 'DROGADICCIÔN',
      pregunta1: '¿QUÉ ES LA DROGADICCIÔN?',
      respuesta1: [
        'Una enfermedad crónica que se caracteriza por la búsqueda y uso compulsivo de alguna droga. El uso constante de cualquier sustancia nociva puede generar cambios significativos en el cerebro, desafiando el autocontrol de una persona adicta.',
        'Como Centro de rehabilitación sabemos que los casos de drogadicción deben de tomarse como algo real y serio, por lo que queremos otorgarte herramientas para que recuperes el control en tu vida.',
        'El consumo de drogas también aumenta el riesgo de sobredosis, accidentes automovilísticos, lesiones, homicidios y suicidios. Así como el desarrollo de una enfermedad mental.'
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Necesidad de usar una dosis cada vez más elevada.',
        'Enfermedades cardiovasculares, respiratorias, digestivas, infecciosas, etc.',
        'Estado emocional negativo, sintiendo irritabilidad o ansiedad cuando no se está consumiendo.',
        'Tendencia a delinquir (robos, homicidios, etc.)',
        'Comportamiento agresivo y tendencia a alejar a tu familia.',
        'Confusión, depresión, mal humor, ataques de pánico, desconfianza, paranoia psicótica, etc.',
        'Muerte por sobredosis o accidentes.'
      ],
      pregunta3: 'Identifica el problema',
      respuesta3: [
        'Si sospecha o identifica alguno de los siguientes síntomas en algún familiar, no dude en comunicarse con nosotros; nuestros especialistas le asesorarán en la metodología de intervención para lograr un ingreso voluntario y así aumentar las posibilidades de una rehabilitación exitosa.',
      ],
      preguntas: [
        'Constante mal humor, irritabilidad, ira, hostilidad, depresión.',
        'Mentir y robar constantemente.',
        'Ojos enrojecidos, pupilas dilatadas, pérdida repentina de peso, temblor.',
        'Pérdida de motivación, evasión a preguntas sobre lo que ha hecho o donde ha estado.',
        'Pérdida o aumento del apetito, movimientos descoordinados, dificultad en articular las palabras.',
        'Aislamiento, dejar de seguir la rutina, abandonar pasatiempos, responsabilidades, cambio de amistades.',
      ],
      image: '../assets/Drogadiccion.jpg'
    },
    {
      id: 3,
      title: 'JUEGO PATOLÓGICO (LUDOPATÍA)',
      pregunta1: '¿QUÉ ES EL JUEGO PATOLÓGICO?',
      respuesta1: [
       'También conocido como ludopatía, es un trastorno en el que la persona siente una incontrolable urgencia a jugar y apostar de forma persistente y progresiva, afectando de forma negativa a la vida personal y familiar.',
       'Como Centro de rehabilitación sabemos que lo difícil que puede ser afrontar un trastorno al juego. Por lo tanto, ofrecemos ayuda con los mejores profesionales, de manera discreta y eficaz.'
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Pérdida del control por la incapacidad de dejar de apostar.',
        'Problemas laborales.',
        'Pérdida de grandes cantidades de dinero.',
        'Pérdida de relaciones familiares y sociales.',
        'Trastornos de ansiedad y depresión',
        'Cambios en la personalidad, irritabilidad, falta de comunicación o incluso agresividad.'
      ],
      pregunta3: 'Identifica el problema',
      respuesta3: [
        'Si identifica alguno de los siguientes síntomas en usted o algún familiar, contáctenos y nuestro equipo les proporcionará información acerca de los tratamientos que llevamos a cabo.',
      ],
      preguntas: [
        'Planificar actividades con apuestas constantemente.',
        'Preocupación por obtener más dinero para apostar.',
        'Necesidad de apostar cantidades cada vez mayores de dinero.',
        'Intentar controlar, corregir o abandonar las apuestas y no poder hacerlo.',
        'Apostar para evadir los problemas o aliviar sentimientos de impotencia, culpa, ansiedad o depresión.',
        'Mentir a los familiares para ocultar la manera en la que juega compulsivamente.'
      ],
      image: '../assets/JuegoPatologico.jpg'
    },
    {
      id: 4,
      title: 'ONIOMANÍA (ADICCIÓN A LAS COMPRAS)',
      pregunta1: '¿QUÉ ES LA ONIOMANÍA?',
      respuesta1: [
        'Es un trastorno psicológico que provoca un deseo incontrolable de comprar cosas aunque no sean necesarias.',
        'Este trastorno comparte características con otras conductas adictivas como la ludopatía o la cleptomanía. Debido que el sentimiento de euforia que produce al momento de comprar es similar al que se produce cuando una persona cleptómana roba algo o una persona con adicción toma drogas.'
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Pérdida de grandes cantidades de dinero.',
        'Acumulación excesiva de objetos materiales.',
        'Sentimiento de vacío.',
        'Sentimiento de culpabilidad y vergüenza tras gastar dinero.',
        'Endeudamientos, mentiras o robos.'
      ],
      pregunta3: 'Identifica el problema',
      respuesta3: [
        'Vivir en un sistema capitalista en donde hay mayor accesibilidad a comprar, además del estatus social que esto conlleva, nos impulsa a seguir determinadas tendencias. Sin embargo, no por consumir ciertos objetos o servicios nos transformamos en personas con oniomanía, sino que esto sucede cuando:',
      ],
      preguntas: [
        'Ansiedad general por consumir y falta de autocontrol por dejar de comprar.',
        'Placer momentáneo al realizar las compras que poco después se transforma en insatisfacción.',
        'Sentimiento de culpabilidad y vergüenza tras gastar dinero.',
        'Insomnio.',
        'Irritabilidad y cambios de humor.',
        '¿Tuviste síntomas de abstinencia cuando no tomas (ansiedad, náuseas, sudores, problemas para dormir, etc.)?'
      ],
      image: '../assets/Oniomania.jpg'
    },
    {
      id: 5,
      title: 'PATOLOGÍA DUAL',
      pregunta1: '¿QUÉ ES LA PATOLOGÍA DUAL?',
      respuesta1: [
        'En el campo de la salud mental, es el término que se utiliza para aquellos pacientes que sufren una adicción y un trastorno mental de manera simultánea.',
        'La realidad es que el 70% de las personas con algún tipo de adicción sufren también una enfermedad mental, por lo que al llevar a cabo el tratamiento de una persona con adicción es importante considerar este dato. De esta manera, se puede conseguir un mejor resultado ante la intervención psicológica, fisiológica y social de la persona.'
      ],
      pregunta2: '¿QUÉ PUEDE OCASIONAR?',
      respuesta2: [
        'Baja académica y tendencia al desempleo.',
        'Alta tendencia a autolesiones o suicidio.',
        'Empeoramiento de síntomas del trastorno mental.',
        'Inestabilidad emocional.',
        'Conductas impulsivas y agresivas.',
        'Descuido propio (higiene, alimentación, salud, seguridad).'
      ],
      pregunta3: 'Identifica el problema',
      respuesta3: [
        'La patología dual al tratarse de dos trastornos conviviendo simultáneamente, es difícil identificarlo como tal, ya que los síntomas dependen de las patologías que presente la persona. Sin embargo, algunos síntomas más comunes son:',
      ],
      preguntas: [
        'Alto nivel de impulsividad.',
        'Síntomas asociados a la adicción.',
        'Pensamientos paranoicos.',
        'Falta de motivación.',
        'Pérdida de interés en las actividades cotidianas.',
        'Desorganización cognitiva (presentar pensamientos desorganizados o poco coherentes).'
      ],
      image: '../assets/Patologia.jpg'
    }
  ];
  return (
    <div className="rounded-br-[430px] bg-[#15284B] h-auto">
      <div>
        <div className="pb-[200px]">
          <h1 className="text-white text-4xl ml-[10%] pb-[10px] pt-[100px]">Tipos de adicciones</h1>
          <CollapsDetail
            array={tiposAdicciones}
          />
        </div>
      </div>
    </div>
  );
}