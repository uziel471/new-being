export default function MainImage() {
  return (
    <div className="w-full h-screen text-white z-1">
      <img
          src="../assets/Tratamientos.jpg"
          className="w-full h-full object-cover absolute mix-blend-overlay"
          alt="Home"
          loading="lazy"
      />
      <div className="w-full h-screen  pl-36 mx auto text-left flex flex-col justify-center bg-cover bg-center pt-[300px]">
          <h1 className="md:text-4xl sm:text-6xl font-bold">
            Brindamos atención
          </h1>
          <h3 className="md:text-7xl sm:text-3xl text-cl font-bold pb-10">
            personalizada
          </h3>
          <p className="text-[20px]">
            Sabemos que cada persona experimenta de manera diferente su 
          </p>
          <p className="text-[20px]">
            patología, por lo que trabajamos de manera personalizada para
          </p>
          <p className="text-[20px]">
            atender a sus necesidades y lograr una mejoría.
          </p>
      </div>
    </div>
  );
}