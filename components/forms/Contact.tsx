import { useForm } from "react-hook-form";

type ContactProps = {
  name: string;
  telefono: string;
  email: string;
  message: string;
};

function Contact(){
  const { register, formState: { errors } , handleSubmit} = useForm<ContactProps>();
  const onSubmit = (data: ContactProps) => console.log(data);
  return (
    <div className="w-full flex flex-col justify-center">
      <form className="w-full h-full p-8 px-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col py-2">
          <input
            id="name"
            placeholder="Nombre*"
            type="text"
            className="rounded-full mt-2 p-3 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
            {...register('name',{
              required: true
            })}
          />
          {errors.name && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div className="flex flex-col py-2">
          <input
            id="email"
            placeholder="Correo"
            type="email"
            className="rounded-full mt-2 p-3 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
            {...register('email')}
          />
        </div>
        <div className="flex flex-col py-2">
          <input
            id="telefono"
            type="number"
            placeholder="Teléfono"
            className="rounded-full mt-2 p-3 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
            {...register('telefono',{
                required: true,
                minLength: 10,
                maxLength: 10
              }
            )}
          />
        </div>
        <div className="flex flex-col py-2">
          <textarea
            id="message"
            placeholder="¿Cuál es tu situacíon?"
            className="rounded-md mt-2 h-32 p-3 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
            {...register('message')}
          />
        </div>
        <div className="flex justify-start text-white">
          <button className="outline outline-offset-8 p-3 text-xl rounded-full mt-10">
            <p className="text-blue-300 text-1x text-white">ENVIAR</p>
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact;