import CollapsDetail from "../../../components/CollapsDetail";

export default function Section1() {
  const tiposAdicciones = [
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
      image: 'JuegoPatologico.jpg'
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
      image: 'Oniomania.jpg'
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
      image: 'Patologia.jpg'
    }
  ];
  return (
    <div className="lg:rounded-br-[430px] bg-[#15284B]">
      <div className="">
        <div className="p-10">
          <h1 className="text-white text-3xl">Tipos de trastornos</h1>
        </div>
        <CollapsDetail
          array={tiposAdicciones}
        />
      </div>
    </div>
  );
}