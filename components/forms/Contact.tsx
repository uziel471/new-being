import { useForm } from "react-hook-form";

type ContactProps = {
  name: string;
  telefono: string;
  email: string;
  message: string;
};

function Contact(){
  const { register, formState: { errors } , handleSubmit, reset} = useForm<ContactProps>();
  const onSubmit = async (data: ContactProps) => {  
    try {
      await fetch('https://clinicasaludmental.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      reset();
      alert('correo enviado');
    } catch (error) {
      alert('Error al enviar el correo');
    }
  }
  return (
    <div className="flex flex-col justify-center">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col py-2">
          <input
            id="name"
            placeholder="Nombre*"
            type="text"
            className="rounded-full mt-2 lg:p-2 p-2 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
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
            type="tel"
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
            className="rounded-3xl mt-2  p-4 focus:border-blue-500 text-xl focus:bg-gray-100 focus:outline-none"
            {...register('message')}
          />
        </div>
        <div className="flex justify-start text-white">
          <button className="outline outline-offset-4 p-2 outline-[#00C1DE] text-xl rounded-full mt-10">
            <p className="text-1x text-white">ENVIAR</p>
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact;