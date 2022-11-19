import Link from "next/link";

export default function Section3Uno() {
  return (
    <div className="bg-[#15284B]">
      <div className="rounded-br-[430px] h-full bg-white grid grid-cols-2 place-items-center justify-items-center">
          <div className="w-4/6 h-4/6 grid place-items-center ">
            <img
              src="../assets/tratamiento-secundario.png"
              width={400}
              height={400}
              className="rounded opacity-[100%]"
            />
          </div>
        <div className="grid grid-rows-5 justify-items-start w-full">
          <div></div>
          <p className="text-6xl">Tratamiento Secundario</p>
          <div>
            <p className="text-2xl ">
              En Clínica Nuevo Ser brindamos un programa post-tratamiento<br/>
              conocido como casa de medio camino, teniendo como objectivo un<br/>
              seguimiento del individuo, trabajando en áreas multidiciplinarias<br/>
              para el bienestar personal y de su entorno familiar.
              <br/>
            </p>
          </div>
          <div>
            <Link href="/tratamientos">
              <button className="outline outline-offset-8 rounded mt-10">
                <p className="text-blue-300 text-3xl">MÁS INFORMACIÓN</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}