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
    },
    {
      id: 6,
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
      image: 'Esquizofrenia.jpg'
    },
    {
      id: 7,
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
      image: 'Bulimia.jpg'
    },
    {
      id: 8,
      title: 'CODEPENDENCIA',
      pregunta1: '¿QUÉ ES LA CODEPENDENCIA?',
      respuesta1: [
        'La codependencia puede ocurrir en cualquier persona que está en contacto con la trastorno de otra persona, ya sea un familiar, amigo, compañero, pareja que sufra de trastorno.',
        'Además existen otros desórdenes de conducta y enfermedades que pueden generar codependencia, tales como la esquizofrenia, la violencia, el maltrato y las neurosis.',
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
      image: 'Codependencia2.jpg'
    },
    {
      id: 9,
      title: 'TRASTORNO LIMITE DE LA PERSONALIDAD',
      pregunta1: '',
      respuesta1: [
        'El Trastorno Límite de la Personalidad es una afección mental que se caracteriza por un patrón continuo de estados de ánimo, autoimagen y comportamientos inestables. Los pacientes con TLP tienen intolerancia a la soledad; hacen esfuerzos frenéticos para evitar un abandono y generan crisis, como tener gestos suicidas de una manera que invita al rescate y al cuidado por otros. ',
        'Las personas con TLP pueden tener cambios de estado de ánimo y mostrar incertidumbre sobre cómo se ve a sí mismo y su papel en el mundo. Como resultado, sus intereses y valores pueden cambiar rápidamente. Los pacientes con este trastorno, tienden a ver las cosas de manera extrema, como si todo fuera bueno o todo fuera malo. Sus opiniones de otras personas también pueden cambiar rápidamente. Estos cambios en los sentimientos pueden llevar a relaciones intensas e inestables. '
      ],
      pregunta2:'Otras señales o síntomas pueden incluir',
      respuesta2:[
        'Esfuerzos para evitar el abandono real o imaginario, como iniciar rápidamente relaciones íntimas (físicas o emocionales) o cortar la comunicación con alguien por miedo a ser abandonado. ',
        'Un patrón de relaciones intensas e inestables con familiares, amigos y seres queridos, que en general cambia de la cercanía y amor extremos (idealización) a una aversión o ira extremas (devaluación). ',
        'Autoimagen o sentido de identidad distorsionado e inestable. ',
        'Comportamiento impulsivo y con frecuencia arriesgado, como tener sexo sin protección, abuso de sustancias, conducir de forma imprudente, etc ',
        'Comportamientos autodestructivos, como cortarse. ',
        'Pensamientos recurrentes de comportamientos suicidas o amenazas de suicidio. ',
        'Ánimos intensos y muy cambiantes, con episodios que duran desde unas pocas horas hasta varios días. ',
        'Sentimiento crónico de vacío.  ',
        'Ira intensa e inapropiada o problemas para controlar la ira. ',
        'Dificultad para confiar, que a veces va acompañada de miedo irracional a las intenciones de otras personas. ',
        'Sentimientos de disociación, como sentirse distanciado de sí mismo, observarse desde fuera del propio cuerpo o perder contacto con la realidad. ',
      ],
      pregunta3: '',
      respuesta3: [],
      preguntas: [],
      image: 'Codependencia2.jpg'
    },
    {
      id: 10,
      title: 'TRASTORNO DE DEFICIT DE ATENCION E HIPERACTIVIDAD',
      pregunta1: '',
      respuesta1: [
        'El trastorno por déficit de atención e hiperactividad (TDAH) es un trastorno mental que comprende una combinación  de problemas persistentes, como dificultad para prestar atención, hiperactividad y conducta impulsiva. El TDAH en los adultos puede llevar a relaciones inestables, mal desempeño en el trabajo o en la escuela, baja autoestima y otros problemas.'
      ],
      pregunta2: 'El trastorno por déficit de atención e hiperactividad puede dificultarle la vida; este trastorno se relaciona con',
      respuesta2: [
        'Bajo desempeño escolar/laboral.',
        'Desempleo.',
        'Problemas económicos.',
        'Problemas con la ley.',
        'Consumo inadecuado de alcohol u otras sustancias.',
        'Accidentes frecuentes.',
        'Relaciones inestables.',
        'Problemas de salud física y mental. ',
        'Baja autoestima.',
        'Intentos de suicidio.',
      ],
      pregunta3: 'Sintomas',
      respuesta3: [
        'Los síntomas comienzan en la primera infancia y continúa en la adultez. En algunos casos, el TDAH no se reconoce ni se diagnostica hasta que la persona es un adulto; los síntomas en adultos pueden no ser tan claros como los sintomas en niños. En adultos la hiperactividad puede disminuir, pero los problemas con la impulsividad, inquietud y la dificultad para prestar atención pueden continuar.',
	      'Algunas personas con TDAH tienen menso síntomas a medida que van creciendo, sin embargo algunos pacientes siguen teniendo síntomas importantes que interfieren en su vida cotidiana. Los sintomas pueden oscilar entre leves y graves.',
	      'Muchos adultos con TDAH desconocen que padecen de este trastorno, solo conocen que sus tareas cotidianas se han vuelto complicadas de realizar; un adulto puede tener dificultades para concentrarse y establecer prioridades, lo que suele ocasionar que no cumplan con fechas limite y se olvidan de reuniones o eventos importantes; la incapacidad para controlar los impulsos pueden oscilar entre tener impaciencia y tener cambios de humor y arrebatos de ira.',
        'Algunos de los síntomas del TDAH en adultos son los siguientes:',
      ],
      preguntas: [
        'Impulsividad.',
        'Desorganización y problemas para establecer prioridades.',
        'Escasas habilidades para administrar el tiempo.',
        'Problemas para concentrarse en una tarea.',
        'Dificultades para realizar múltiples tareas a la vez.',
        'Actividad excesiva e inquietud.',
        'Escasa planificación.',
        'Baja tolerancia a la frustración.',
        'Cambios de humor frecuentes.',
        'Problemas para realizar tareas y terminarlas. ',
        'Temperamento irascible.',
        'Problemas para enfrentar el estrés.',
      ],
      image: 'Codependencia2.jpg'
    }
  ];
  return (
    <div className="lg:rounded-br-[430px] bg-[#15284B]">
      <div className="">
        <div className="p-10">
          <h1 className="text-white text-3xl">Tipos de tratamientos</h1>
        </div>
        <CollapsDetail
          array={tiposAdicciones}
        />
      </div>
    </div>
  );
}