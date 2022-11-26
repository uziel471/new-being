export default function MainImage() {
  return (
    <div className="w-full lg:h-screen text-white z-1 mt-[100px]">
      <img
          src="../assets/Tratamientos.jpg"
          className="w-screen lg:h-screen object-cover absolute mix-blend-overlay"
          alt="Home"
          loading="lazy"
      />
      <div className="w-screen lg:h-screen  lg:pl-36 text-left flex flex-col justify-center bg-cover bg-center lg:pt-[300px] md:pb-[230px] pt-[120px]">
          <h1 className="md:text-4xl lg:text-6xl text-sm font-bold">
            Brindamos atención
          </h1>
          <h3 className="md:text-6xl sm:text-3xl text-sm font-bold">
            personalizada
          </h3>
          <p className="text-sm md:text-xl md:pt-4">
            Sabemos que cada persona experimenta de manera diferente su 
          </p>
          <p className="text-sm md:text-xl">
            patología, por lo que trabajamos de manera personalizada para
          </p>
          <p className="text-sm md:text-xl">
            atender a sus necesidades y lograr una mejoría.
          </p>
      </div>
    </div>
  );
}