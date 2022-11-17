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
            className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
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
            className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('email')}
          />
        </div>
        <div className="flex flex-col py-2">
          <input
            id="telefono"
            type="number"
            placeholder="Teléfono"
            className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
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
            className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('message')}
          />
        </div>
        <div className="flex justify-start text-white">
          <button className="outline outline-offset-8 rounded mt-10">
            <p className="text-blue-300 text-1x text-white">ENVIAR</p>
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact;