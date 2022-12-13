export default function Footer() {
  return (
    <div className="w-full h-[150px] grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 font-sans">
      <div className="grid place-items-start content-center p-2">
        <img src="../assets/logo.webp"  alt="logo" width={500} height={500} className="rounded-3xl" loading='lazy'/>
      </div>
      <div className="grid place-items-center">
        <p className="text-sm md:text-md lg:text-lg underline decoration-solid">
          <a href="https://goo.gl/maps/JuwPzTa67vbmvDh8A">
          Calle Londres #3551, Sección Costa Azul, Playas<br/>
          de Tijuana, C.P. 22506, Tijuana, B.C.México.
          </a>
        </p>
      </div>
    </div>
  );
}
