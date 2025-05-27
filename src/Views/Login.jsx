import { apiAxios } from "../config/apiAxios";
import { useForm} from "react-hook-form"
import { InputError } from "../_elements/InputError";
import { Toaster, toast } from 'sonner';

const Login = () => {
    const {register, handleSubmit,formState:{errors},setError,clearErrors}= useForm();

    // funtion del handleSubmit / obtengo la data 
    const  handleClickLogin=  handleSubmit(async(datos)=>{
        try {
            // peticion post con axios
            const {data}= await apiAxios.post('/api/login',datos)
            // redirecciono 
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
            if (error.response?.status==422) {
                // añadir los errores al hook form
                if (error.response.data.errors) {
                    Object.entries(error.response.data.errors).forEach(([field, messages]) => {
                        setError(field, { message: messages[0] });
                    });
                }
                toast.error(error.response.data.message)
            }
            else if(error.response?.status==429){
                toast.error('Has superado los intetos de inicio de sesión')
            }
            else{
                console.log('Errores del servidor');
            }
        }
        // limpio mis errores
        clearErrors(); 
    });

    return (
        <div className="p-8 shadow-2xl/50 border-5 border-verde-600 md:mt-10 rounded-2xl md:py-10">
            <form action="" onSubmit={handleClickLogin}>
                <div>
                    <label htmlFor="userName"
                            className="text-[18px]">
                        Nombre de Usuario:</label>

                    <input  
                    {...register('userName',
                        {
                        required:{value:true, message:'El campo es requerido'},
                        minLength:{value:'2', message:'El nombre de usuario debe ser mayor a 2 carácteres'},
                        maxLength:{value:'30', message:'El nombre de usuario debe ser menos de 30 carácteres'}
                        })}

                        type="text" 
                        name="userName"
                        id="userName"
                        placeholder="Tu usuario"
                        className={`w-full p-1 md:mt-2 border-1 ${errors.userName?'border-red-600 border-2':'border-morado-oscuro-800 border-2'} bg-plomo-bajo-100 focus:outline-none rounded-md`}
                        />
                        {errors.userName &&(
                            <InputError>{errors.userName.message}</InputError>
                        )}
                </div>
                <div className="md:mt-8 mt-3">
                    <label htmlFor="password"
                        className="text-[18px]">
                        Contraseña:</label>
                    <input 
                        {...register ('password',
                            {
                        required:{value:true, message:'La contraseña es requerida'},
                        minLength:{value:'5', message:'La contraseña deber ser mayor a 5 carácteres'},
                        maxLength:{value:'15', message:'El contraseña debe ser menor a 20 carácteres'}
                        })}

                        type="password" 
                        name="password"
                        id="password"
                        placeholder="********"
                        className={`w-full p-1 md:mt-2 border-1 ${errors.userName?'border-red-600 border-2':'border-morado-oscuro-800 border-2'} bg-plomo-bajo-100 focus:outline-none rounded-md`}
                        />
                        {errors.password &&(
                            <InputError>{errors.password.message}</InputError>
                        )}
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesión"
                    className="w-full text-center mt-5  py-1 font-semibold text-white bg-celeste-500
                    md:mt-10 cursor-pointer hover:bg-celeste-600 "
                />
            </form>
            <Toaster 
                position="top-center" 
                richColors
                text-center
                />
        </div>
    );
}

export { Login };