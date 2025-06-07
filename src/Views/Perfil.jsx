import { apiAxios } from "../config/apiAxios";
import useSWR from "swr";
import { Loading } from "../_elements/Loading";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputError } from "../_elements/InputError";
import { validate } from "../config/validaciones";
import { toast, Toaster } from "sonner";

const Perfil = () => {
    const { register, handleSubmit, setError, formState: { errors }, unregister, reset } = useForm();
    const [editPassword, setEditPassword] = useState(false);

    // 👉 Unregister campos si no se va a editar la clave
    useEffect(() => {
        if (!editPassword) {
            unregister('password');
            unregister('confirm_password');
            unregister('keyWordConfirm'); // solo si existe este campo
        }
    }, [editPassword, unregister]);

    const fetcher = () => apiAxios.get('/api/user').then(res => res.data.data);
    const { data, error, isLoading } = useSWR('/api/user', fetcher);


    useEffect(() => {
        if (error) {
            toast.error("No se pudo cargar datos del usuario.");
            console.error("Error al cargar usuario:", error);
        }
    }, [error]);


    useEffect(() => {
        if (data) {
            reset({
                name: data.name || '',
                userName: data.userName || '',
                email: data.email || '',
                keyWord: data.keyWord || '',
                password: '',
                password_confirmation: ''
            });
        }
    }, [data, reset]);

    const guardarDatos = handleSubmit((dataUser) => {
            // Validación de palabra clave (si ya existe en la base de datos)
            if (data?.keyWord && dataUser.keyWordConfirm !== data.keyWord  && editPassword) {
                setError('keyWordConfirm', { message: 'La palabra clave no coincide.' });
                return;
            }

            // Filtrar datos según si se va a cambiar la contraseña o no
            let datosAEnviar = {
                name: dataUser.name,
                userName: dataUser.userName,
                email: dataUser.email,
                keyWord: dataUser.keyWord,
            };

            if (editPassword) {
                datosAEnviar = {
                    ...datosAEnviar,
                    password: dataUser.password,
                    password_confirmation: dataUser.password_confirmation,
                };
            }

            // Enviar datos al backend
            apiAxios.put('/api/userEdit', datosAEnviar)
                .then(res => {
                    toast.success("Perfil actualizado correctamente.");
                    reset(dataUser); // Resetea el formulario con los datos nuevos
                })
                .catch(error => {
                    if (error.response?.status === 422) {
                        const errors = error.response.data.errors;
                        if (errors) {
                            Object.entries(errors).forEach(([field, messages]) => {
                                setError(field, { message: messages[0] });
                            });
                        }
                    } else {
                        toast.error("Error al actualizar el perfil.");
                        console.error("Error al actualizar usuario:", error);
                    }
                });
        });
    return (
        isLoading ? <Loading /> :

            <div className="text-[15px] py-2 md:p-5 w-[90%] h-[100%] m-auto overflow-y-auto flex flex-col gap-2 sm:w-[90%] sm:justify-center sm:items-center md:text-[18px] md:gap-4   ">
                <h2 className="w-full text-center text-[17px] font-mochiy md:text-3xl text-morado-oscuro-500 font-black">Editar Perfil</h2>

                <form onSubmit={guardarDatos} className="sm:w-full md:w-full flex flex-col items-center gap-5">
                    <div className="w-full flex flex-col gap-4 sm:flex-row md:justify-evenly ms:w-full">

                        <fieldset className="border border-celeste-600 p-5">
                            <legend className="text-center text-celeste-600 text-md font-bold px-1">Información personal</legend>

                            <div>
                                <label htmlFor="name" className="font-semibold">Nombre:</label>
                                <input
                                    {...register('name', validate.name)}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border rounded-lg px-2"
                                />
                                {errors.name && <InputError>{errors.name.message}</InputError>}
                            </div>

                            <div className="mt-2">
                                <label htmlFor="userName" className="font-semibold">Nombre de usuario:</label>
                                <input
                                    {...register('userName', validate.userName)}
                                    type="text"
                                    id="userName"
                                    className="w-full border rounded-lg px-2"
                                />
                                {errors.userName && <InputError>{errors.userName.message}</InputError>}
                            </div>

                            <div className="mt-2">
                                <label htmlFor="email" className="font-semibold">Correo:</label>
                                <input
                                    {...register('email', validate.email)}
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="w-full border rounded-lg px-2"
                                />
                                {errors.email && <InputError>{errors.email.message}</InputError>}
                            </div>

                            {data?.keyWord.length === 0 &&
                                <div className="mt-2">
                                    <label htmlFor="keyWord" className="font-semibold">Palabra clave:</label>
                                    <input
                                        {...register('keyWord', validate.keyWord)}
                                        type="text"
                                        id="keyWord"
                                        name="keyWord"
                                        className="w-full border rounded-lg px-2"
                                    />
                                    {errors.keyWord && <InputError>{errors.keyWord.message}</InputError>}
                                </div>
                            }

                            {!editPassword &&
                                <div className="flex justify-center mt-8 sm:mt-4">
                                    <button
                                        type="button"
                                        className="border rounded-lg px-4 py-1 bg-red-400 mx-auto font-bold cursor-pointer hover:bg-red-500 hover:text-white"
                                        onClick={() => setEditPassword(true)}
                                    >
                                        Quiero cambiar mi clave
                                    </button>
                                </div>
                            }
                        </fieldset>

                        {editPassword &&
                            <EditClave
                                register={register}
                                errors={errors}
                                setEditPassword={setEditPassword}
                                data={data}
                            />
                        }
                    </div>

                    <input
                        type="submit"
                        value="Guardar"
                        className="bg-morado-bajo-500 mx-10 rounded-lg p-1 px-4 font-black text-lg sm:w-[200px] hover:bg-morado-bajo-700 hover:text-white cursor-pointer"
                    />
                </form>
                <Toaster position="top-center" richColors closeButton />
            </div>
    );
};

export { Perfil };

// Componente hijo
const EditClave = ({ register, errors, setEditPassword, data }) => {
    return (
        <fieldset className="border border-red-600 p-5">
            <legend className="text-red-500 text-center px-2 font-bold">Cambiar contraseña</legend>

            <div>
                <label htmlFor="password" className="font-semibold">Contraseña</label>
                <input
                    {...register('password', validate.password)}
                    type="password"
                    id="password"
                    name="password"
                    className="border w-full border-lg rounded-lg px-1"
                />
                {errors.password && <InputError>{errors.password.message}</InputError>}
            </div>

            <div className="mt-4">
                <label htmlFor="password_confirmation" className="font-semibold">Confirmar Contraseña</label>
                <input
                    {...register('password_confirmation', validate.confir_password)}
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="border w-full border-lg rounded-lg px-1"
                />
                {errors.password_confirmation && <InputError>{errors.password_confirmation.message}</InputError>}
            </div>

            {data?.keyWord.length > 0 &&
                <div className="mt-4">
                    <label htmlFor="keyWordConfirm" className="font-semibold">Confirmar Palabra clave</label>
                    <input
                        {...register('keyWordConfirm', validate.keyWordConfim)}
                        type="text"
                        id="keyWordConfirm"
                        className="border w-full border-lg rounded-lg px-1"
                    />
                    {errors.keyWordConfirm && <InputError>{errors.keyWordConfirm.message}</InputError>}
                </div>
            }

            <div className="flex justify-center mt-8 sm:mt-4">
                <button
                    type="button"
                    className="border rounded-lg px-4 py-1 bg-red-400 mx-auto font-bold cursor-pointer hover:bg-red-500 hover:text-white"
                    onClick={() => setEditPassword(false)}
                >
                    No quiero cambiar mi clave
                </button>
            </div>
        </fieldset>
    );
};


