export default function SectionF() {
  return (
    <div className="text-[#15284B]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center p-8">
        <div className="grid lg:grid-rows-2 md:grid-rows-1 justify-items-start lg:p-20">
          <div className="">
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[20px]">Playas de Tijuana</h3>
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[20px]">CENTRO DE ATENCIÓN FAMILIAR</h3>
          </div>
          <div className="p-2">
            <p>
              Como centro de atención familiar, somos un espacio para el tratamiento, información, capacitación y recuperación de trastornos, conductas adictivas y disfunción familiar. Brindando la oportunidad de aprender y crecer de forma personal y familiar.
            </p>
            <p>
              Tenemos como objetivo prevenir e intervenir de forma oportuna, detectando y atendiendo los factores de riesgo, la salud emocional y física de las personas con patologías, así como de su familia.
            </p>
            <br />
            <p className="underline decoration-solid">
              <a href="https://www.google.com/maps/place/Parral+3041,+Sta+Lucia,+22705+Rosarito,+B.C.,+M%C3%A9xico/@32.4048869,-117.0603072,17z/data=!3m1!4b1!4m5!3m4!1s0x80d936b493327e4d:0x1b83aa2e94b9bfba!8m2!3d32.404827!4d-117.060246">
                Calle Londres #3551, Sección Costa Azul, Playas de Tijuana, C.P. 22506, Tijuana, B.C. México.
              </a>
            </p>
          </div>
        </div>
        <div className="w-auto h-auto grid place-items-center">
          {/* TODO: cambiar imagen por icon */}
          <img
            src='../assets/UnidadPlayas.jpg'
            alt="Como Actuar"
            style={{ borderRadius: "55%", width: '400px', height: "400px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}