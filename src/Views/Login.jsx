import { apiAxios } from "../config/apiAxios";
import { useForm } from "react-hook-form"
import { InputError } from "../_elements/InputError";
import { toast } from 'sonner';
import { useStoreAuth } from "../hooks/Store";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { validate } from "../config/validaciones";
import { errorMessages } from "../config/error";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const login = useStoreAuth((state) => state.login);
    const isLoggedIn = useStoreAuth((state) => state.isLoggedIn);
    const user = useStoreAuth((state) => state.user);
    const navigate = useNavigate();

    // funtion del handleSubmit / obtengo la data
    const handleClickLogin = handleSubmit(async (datos) => {
        try {
            // peticion post con axios
            const { data } = await apiAxios.post('/api/login', datos)

            // // obtendo los datos y añado a estado de zustan
            login(data.user)

        } catch (error) {
            if (error.response?.status == 422) {
                // añadir los errores al hook form ??
                if (error.response.data.errors) {
                    errorMessages(error.response.data.errors, setError);
                }
            }
            else if (error.response?.status == 401) {
                if (error.response.data.message === 'credenciales invalidas') {
                    toast.warning('Credenciales Inválidas')
                }
            }

            else if (error.response?.status == 429) {
                toast.warning('🔐 Has superado limites de intentos, vuelve en 30 segundo')
            }
            else {
                toast.warning('Errores del servidor');
                console.log(error);
            }
        }
        // limpio mis errores
        clearErrors();
    });

    // Redirige si el usuario ya está autenticado
    useEffect(() => {
        if (isLoggedIn && user) {
            const redirectUrl = user.role === 'admin' ? '/admin' : '/dashboardVendedor';
            navigate(redirectUrl);
        }
    }, [isLoggedIn, user, navigate]);

    return (
        <>
            <div className="p-8 shadow-2xl/50 border-5 border-verde-600 md:mt-10 rounded-2xl md:py-10">
                <form action="" onSubmit={handleClickLogin}>
                    <div>
                        <label htmlFor="userName"
                            className="text-[18px]">
                            Nombre de Usuario:</label>

                        <input
                            {...register('userName', validate.userName)}
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Tu usuario"
                            className={`w-full p-1 md:mt-2 border-1 ${errors.userName ? 'border-red-600 border-2' : 'border-morado-oscuro-800 border-2'} bg-plomo-bajo-100 focus:outline-none rounded-md`}
                        />
                        {errors.userName && (
                            <InputError>{errors.userName.message}</InputError>
                        )}
                    </div>
                    <div className="md:mt-8 mt-3">
                        <label htmlFor="password"
                            className="text-[18px]">
                            Contraseña:</label>
                        <input
                            {...register('password', validate.password)}

                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className={`w-full p-1 md:mt-2 border-1 ${errors.password ? 'border-red-600 border-2' : 'border-morado-oscuro-800 border-2'} bg-plomo-bajo-100 focus:outline-none rounded-md`}
                        />
                        {errors.password && (
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
            </div>
            
        </>
    );
}

export { Login };