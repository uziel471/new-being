export default function Section1() {
  return (
    <div className="w-full h-1/6 grid grid-cols-2 gap-4 place-items-center font-sans">
      <div className="grid grid-rows-2 w-5/6">
        <div className="pb-8">
          <p className="text-6xl">Clínica de rehabilitación</p>
          <p className="text-4xl">de adicciones y salud mental</p>
        </div>
        <div>
          <p className="text-3xl">
            Clínica privada para el tratamiento de adicciones,<br/>
            salud mental, trastornos de personalidad y<br/>
            codependencia en Tijuana, México.
          </p>
        </div>
      </div>
      <div className="w-5/6">
        <iframe
          width={700}
          height={400}
          src="https://www.youtube.com/embed/NwhUCBb6kfA"
          title="Clínica Nuevo Ser"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
          className="rounded-3xl"
          loading="lazy"
        />
      </div>
    </div>
  );
}