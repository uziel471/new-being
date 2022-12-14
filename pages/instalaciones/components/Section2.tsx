import Image from 'next/image'
import photo from '../../../public/assets/unidad2.jpg'

export default function Section2() {
  return (
    <div className="text-[#15284B]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center justify-items-center p-8">
        <div className="grid lg:grid-rows-2 md:grid-rows-1 justify-items-start lg:p-20">
          <div className="">
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[20px]"> Unidad Rosarito CAP 2 </h3>
            <h3 className="flex font-semibold lg:text-3xl text-xl text-[#15284B] mb-[30px]"> CLÍNICA DE ATENCIÓN PRIMARIA </h3>
            
          </div>
          <div className="p-2">
            <p>
            CAP 2 en Rosarito, ofrece atención especializada para pacientes con problemas de salud mental. En esta unidad se atiende solo a hombres.
            </p>
            <br />
            <p className="underline decoration-solid">
              <a href="https://www.google.com/maps/place/Parral+3041,+Sta+Lucia,+22705+Rosarito,+B.C.,+M%C3%A9xico/@32.4048869,-117.0603072,17z/data=!3m1!4b1!4m5!3m4!1s0x80d936b493327e4d:0x1b83aa2e94b9bfba!8m2!3d32.404827!4d-117.060246">
              Calle Parral 3041, Fracc. Rosamar, Col.Santa Lucia, Rosarito B.C., México. C.P.22705.
              </a>
            </p>
          </div>
        </div>
        <div className="w-auto h-auto grid place-items-center">
          <Image
            src={photo}
            alt="Como Actuar"
            style={{ borderRadius: "55%", width: '100%', height: "100%" }}
            loading='lazy'
          />
        </div>
      </div>
    </div>
  )
}