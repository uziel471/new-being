
import { AiOutlineCheckCircle} from "react-icons/ai";

type ArrayProps = {
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
  array: ArrayProps[];
}
export default function CollapsDetail({
  array
}: Props) {
  console.log(array);
  return (
    <div>
      {array.map((object) => (
        <div className="text-white">
          <details className="group w-full">
            <summary className="list-none flex flex-wrp items-center cursor-pointer ml-[9%]">
              <h3 className="flex p-4 font-semibold text-3xl text-[#00C1DE]"> {object.title} </h3>
              <div className="flex w-10 items-center justify-center">
                <div className="border-8 border-transparent border-l-gray-600 ml-2
                group-open:rotate-90 transition-transform origin-left"></div>
              </div>
            </summary>
            <div className="grid grid-rows-1">
              <div className="grid grid-cols-2 gap-0 place-items-center">
                <div className="w-[65%]">
                  <h3 className="flex p-4 font-semibold text-2xl"> {object.pregunta1} </h3>
                  {object.respuesta1.map((item, index) => (
                    <p key={index} className="text-white text-2x">
                      {item} <br /> <br />
                    </p>
                  ))}
                </div>
                <div className="w-[85%]">
                  <h3 className="flex p-4 font-semibold text-2xl"> {object.pregunta2} </h3>
                  <ul>
                    {object.respuesta2.map((item, index) => (
                      <li key={index} className="text-white text-2x">
                        <div className="flex">
                          <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
                          {item} <br /> <br />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>  
              </div>
              <div className="w-full h-6/6 rounded-tl-[430px] bg-[#00C1DE] z-19">
                <div className="grid grid-cols-2 place-items-center justify-items-center">
                  <div className="grid grid-rows-2 justify-items-center mt-[100px] w-full">
                    <div className="w-[65%]">
                      <h3 className="flex p-4 font-semibold text-5xl text-[#15284B] mb-[50px]"> {object.pregunta3} </h3>
                      {object.respuesta3.map((item, index) => (
                        <p key={index} className="text-white text-2x">
                          {item} <br /> <br />
                        </p>
                      ))}
                    </div>
                    <div className="w-[65%]">
                      <ul>
                        {object.preguntas.map((item, index) => (
                          <li key={index} className="text-white text-2x">
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
                  </div>
                  <div className="w-auto h-auto grid place-items-center">
                    {/* TODO: cambiar imagen por icon */}
                    <img
                      src={object.image}
                      alt="Como Actuar"
                      style={{ borderRadius: "55%", width: '600px', height: "600px" }}
                    />
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
  // return (
  //   <div className="text-white w-full h-full">
  //     <details className="group w-full">
  //       <summary className="list-none flex flex-wrp items-center cursor-pointer ml-[9%]">
  //         <h3 className="flex p-4 font-semibold text-3xl"> {array[0].title} </h3>
  //         <div className="flex w-10 items-center justify-center">
  //           <div className="border-8 border-transparent border-l-gray-600 ml-2
  //           group-open:rotate-90 transition-transform origin-left"></div>
  //         </div>
  //       </summary>
  //       <div className="grid grid-rows-1">
  //         <div className="grid grid-cols-2 gap-0 place-items-center">
  //           <div className="w-[65%]">
  //             <h3 className="flex p-4 font-semibold text-2xl"> {array[0].pregunta1} </h3>
  //             {array[0].respuesta1.map((item, index) => (
  //               <p key={index} className="text-white text-2x">
  //                 {item} <br /> <br />
  //               </p>
  //             ))}
  //           </div>
  //           <div className="w-[85%]">
  //             <h3 className="flex p-4 font-semibold text-2xl"> {array[0].pregunta2} </h3>
  //             <ul>
  //               {array[0].respuesta2.map((item, index) => (
  //                 <li key={index} className="text-white text-2x">
  //                   <div className="flex">
  //                     <AiOutlineCheckCircle size={30} className="p-1" color="#00C1DE" /> &nbsp;
  //                     {item} <br /> <br />
  //                   </div>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>  
  //         </div>
  //         <div className="w-full h-6/6 rounded-tl-[430px] bg-[#00C1DE] z-19">
  //           <div className="grid grid-cols-2 place-items-center justify-items-center">
  //             <div className="grid grid-rows-2 justify-items-center mt-[100px] w-full">
  //               <div className="w-[65%]">
  //                 <h3 className="flex p-4 font-semibold text-5xl text-[#15284B]"> {array[0].pregunta3} </h3>
  //                 {array[0].respuesta3.map((item, index) => (
  //                   <p key={index} className="text-white text-2x">
  //                     {item} <br /> <br />
  //                   </p>
  //                 ))}
  //               </div>
  //               <div className="w-[65%]">
  //                 <ul>
  //                   {array[0].preguntas.map((item, index) => (
  //                     <li key={index} className="text-white text-2x">
  //                       <div className="flex">
  //                         <div>
  //                           <AiOutlineCheckCircle size={30} className="m-1" color="#15284B" />
  //                         </div>
  //                         <div>
  //                           {item} <br /> <br />
  //                         </div>
  //                       </div>
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             </div>
  //             <div className="w-auto h-auto grid place-items-center">
  //               {/* TODO: cambiar imagen por icon */}
  //               <img
  //                 src="../assets/comoActuar.jpg"
  //                 alt="Como Actuar"
  //                 style={{ borderRadius: "55%", width: "60%", height: "100%" }}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </details>
  //   </div>
  // );