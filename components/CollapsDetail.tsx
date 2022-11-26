
import { AiOutlineCheckCircle} from "react-icons/ai";
import Image from 'next/image';

type arrayProps = {
  id: number;
  title: string;
  pregunta1: string;
  respuesta1: string[];
  pregunta2: string;
  respuesta2: string[];
  pregunta3: string;
  respuesta3: string[];
  preguntas: string[];
  image: string;
};

type Props = {
  array: arrayProps[];
}
export default function CollapsDetail({
  array
}: Props) {
  return (
    <div>
      {array.map((object, index) => (
        <div className="text-white" key={object.title}>
          <details className="group w-full">
            <summary className="list-none flex flex-wrp items-center cursor-pointer lg:pl-10">
              <h3 className="flex p-4  text-2xl text-[#00C1DE]"> {object.title} </h3>
              <div className="flex w-10 items-center justify-center">
                <div className="border-8 border-transparent border-l-gray-600 ml-2
                group-open:rotate-90 transition-transform origin-left"></div>
              </div>
            </summary>
            <div className="grid grid-rows-1">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center p-8">
                <div className="">
                  <h3 className="flex text-2xl"> {object.pregunta1} </h3>
                  {object.respuesta1.map((item, index) => (
                    <p key={index} className="text-white lg:text-lg md:text-md text-sm">
                      {item} <br /> <br />
                    </p>
                  ))}
                </div>
                <div className="">
                  <h3 className="flex text-2xl p-2"> {object.pregunta2} </h3>
                  <ul>
                    {object.respuesta2.map((item, index) => (
                      <li key={index} className="text-white lg:text-lg md:text-md text-sm">
                        <div className="flex">
                          <div>
                            <AiOutlineCheckCircle size={30} className="m-1" color="#00C1DE" />
                          </div>
                          <div>
                            {item} <br /> <br />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>  
              </div>
              <div className="w-screen lg:rounded-tl-[430px] bg-[#00C1DE] z-19">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center justify-items-center lg:p-20 p-4">
                  <div className="grid lg:grid-rows-1 grid-rows-1 justify-items-center">
                    <div className="lg:p-10 md:p-5">
                      <h3 className="flex p-4 text-3xl text-[#15284B]"> {object.pregunta3} </h3>
                      {object.respuesta3.map((item, index) => (
                        <p key={index} className="text-white lg:text-lg md:text-md text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                    <ul>
                      {object.preguntas.map((item, index) => (
                        <li key={index} className="text-white lg:text-lg md:text-md  text-sm">
                          <div className="flex">
                            <div>
                              <AiOutlineCheckCircle size={30} className="m-1" color="#15284B" />
                            </div>
                            <div>
                              {item} <br /> <br />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='w-3/6'>
                    <div className="flex flex-wrap justify-center">
                      <div className="">
                          <Image
                              src={require(`../public/assets/${object.image}`)}
                              alt="..."
                              className="lg:shadow-lg md:shadow-md shadow-sm lg:max-w-[400px] lg:max-h-[400px] rounded-[100%] max-w-[300px] max-h-[200px] align-middle border-none"
                              loading='lazy'
                          />
                      </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
