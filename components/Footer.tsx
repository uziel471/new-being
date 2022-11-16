export default function Footer() {
  return (
    <div className="w-full h-[150px] grid grid-cols-2 gap-4 font-sans">
      <div className="grid place-items-start content-center">
        <img src="../assets/logo.webp"  alt="logo" width={500} height={500} className="rounded-3xl"/>
      </div>
      <div className="grid place-items-center">
        <p className="text-[20px] underline decoration-solid">
          <a href="https://goo.gl/maps/JuwPzTa67vbmvDh8A">
          Calle Londres #3551, Sección Costa Azul, Playas<br/>
          de Tijuana, C.O22506, Tijuana, B.C.México.
          </a>
        </p>
      </div>
    </div>
  );
}
