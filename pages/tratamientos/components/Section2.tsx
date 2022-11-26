export default function Section2() {
  return (
    <div className="bg-white">
      <div className="lg:rounded-bl-[430px] bg-[#00C1DE] lg:grid grid-cols-2 md:grid grid-cols-2 place-items-center justify-items-center p-8">
          <div className="grid place-items-center">
            <img
              src="../assets/tratamiento-secundario.png"
              className="rounded opacity-[100%]"
              loading="lazy"
            />
          </div>
        <div className="grid lg:grid-rows-4 lg:justify-items-start justify-items-center text-white p-0 md:m-2 lg:mt-10 lg:p-10">
          <p className="text-3xl p/0 m/2">Tratamiento Secundario</p>
          <div className="mt-4 lg:p-2">
            <p className="text-sm lg:text-lg md:text-md ">
              En Clínica Nuevo Ser brindamos un programa post-tratamiento
              conocido como casa de medio camino, teniendo como objectivo un
              seguimiento del individuo, trabajando en áreas multidiciplinarias
              para el bienestar personal y de su entorno familiar.
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}