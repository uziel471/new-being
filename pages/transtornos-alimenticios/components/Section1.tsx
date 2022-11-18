import CollapsDetail from "../../../components/CollapsDetail";
export default function Section1(){
  const enfermedades = [
    {
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
    },
  ];
  return (
    <div className="rounded-br-[430px] bg-[#15284B] h-auto">
      <div>
        <div className="pb-[200px]">
          <h1 className="text-white text-4xl ml-[10%] pb-[10px] pt-[100px]">Trastornos de conducta alimentaria</h1>
          <CollapsDetail
            array={enfermedades}
          />
        </div>
      </div>
    </div>
  );
}