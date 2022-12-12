export default function Section1() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-4 place-items-center font-sans lg:p-20 md:p-6 p-10">
      <div className="grid grid-rows-2">
        <div className="pb-8">
          <p className="lg:text-6xl md:text-4xl text-2xl">Clínica de rehabilitación</p>
          <p className="lg:text-4xl md:text-2xl text-xl">de trastornos y salud mental</p>
        </div>
        <div>
          <p className="lg:text-2xl text-sm md:text-md">
            Clínica privada para el tratamiento de trastornos<br/>
            de personalidad, salud mental y<br/>
            codependencia en Tijuana, México.
          </p>
        </div>
      </div>
      <div className="lg:w-4/6 lg:h-full md:w-4/6 md:w-5/5">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/watch?v=7oAwdIAHxZw&ab_channel=ClinicaNuevoSer"
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
