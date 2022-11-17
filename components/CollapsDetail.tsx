
import { BsChevronDown } from "react-icons/bs";

type ArrayProps = {
  id: number;
  title: string;
  pregunta1: string;
  respuesta1: string[];
  pregunta2: string;
  respuesta2: string[];
};

type Props = {
  array: ArrayProps[];
}
export default function CollapsDetail({
  array
}: Props) {
  console.log(array);
  return (
    <div className="w-full h-full grid grid-cols-1 place-items-center gap-4 font-sans">
      <div className={`relative w-[400px] overflow-hidden text-white`}>
        <input type="checkbox" className={`peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer bg-[#0b233f]`} />
        <div className="w-full">
          <h1 className="font-semibold" >ALCOHOLISMO</h1>
        </div> 
        {/* Arrow Icon */}
        <BsChevronDown className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180" size={20}/>
        {/* Content */}
        <div className="overflow-hidden transition-all duration-400 max-h-0 peer-checked:max-h-full h-full w-full">
          <div className="grid grid-cols-2 gap-4 place-items-center h-full relative">
            <div className="h-full">
            <br/>
              <h1 className="font-semibold">{array[0].pregunta1}<br/><br/></h1>
              {array[0].respuesta1.map((item, index) => (
                <p className="text-1xl" key={index}>{item} <br/><br/></p> 
              ))}
            </div>
            <div className="h-full w-full text-white z-0">
              <h1 className="font-semibold">{array[0].pregunta2}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}