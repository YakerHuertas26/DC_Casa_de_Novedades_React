
import { apiAxios } from "../config/apiAxios";
import useSWR from "swr";
import { Loading } from "../_elements/Loading";
import { toast, Toaster } from "sonner";
import { useState } from "react";

const Perfil = () => {
    // función de petición axios 
    const fetcher= ()=> apiAxios.get('/api/user').then(res=>res.data.data);
    // swr
    const { data, error, isLoading } = useSWR('/api/user', fetcher,{
        refreshInterval:1000
    })
    if (error) {
        toast.error('error al cargar los datos')
    }
    
    const [editPassword,setEditPassword] = useState(false);
    // console.log(data.keyWord.length);
    
    return (
        
        isLoading? <Loading/>:
            
            <div className="text-[15px]  py-2 md:p-5 w-[90%] h-full flex flex-col gap-2 sm:w-[80%] md:text-[18px] md:gap-4 sm:justify-center sm:items-center m-auto overflow-y-auto ">
                <h2 className="w-full text-center text-[17px] font-mochiy md:text-3xl text-morado-oscuro-500 font-black ">Editar Perfil</h2>
                <form action="" className="md:w-full flex flex-col items-center gap-5">
                    <div className="w-full flex flex-col gap-4 md:flex-row md:justify-evenly md:w-full">
                        <fieldset className="border border-celeste-600 p-5">
                            <legend className="text-center text-celeste-600 text-md font-bold px-1">Información personal</legend>
                            <div>
                                <label htmlFor="name" className="font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userName" className="font-semibold">Nombre de usuario:</label>
                                <input
                                    type="text"
                                    id="userName"
                                    value={data.userName}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="font-semibold">Correo:</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={data.email}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            {data.keyWord.length===0 &&
                                <div className="mt-2">
                                <label htmlFor="keyWord" className="font-semibold">Palabra clave:</label>
                                <input
                                    type="text"
                                    id="keyWord"
                                    value={data.keyWord}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            }
                            
                            <div className="mt-2">
                            <div className={`flex justify-center mt-8 sm:mt-4 ${editPassword?'hidden':''}`}>
                                <button
                                    type="button"
                                    className="border rounded-lg px-4 py-1 bg-red-400 mx-auto font-bold cursor-pointer hover:bg-red-500 hover:text-white"
                                    onClick={()=>setEditPassword(!editPassword)}
                                    >
                                        Quiero cambiar mi clave
                                </button>
                            </div>
                            </div>
                        </fieldset>

                        <fieldset className={`border border-red-600 p-5 ${editPassword?'':'hidden'}`}>
                            <legend className="text-red-500 text-center px-2 font-bold">Camabiar contraseña</legend>
                            <div className="">
                                <label htmlFor="password" className="font-semibold">Contraseña</label>
                                <input type="password"
                                    id="password"
                                    className="border w-full border-lg rounded-lg" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="confirm_password" className="font-semibold">Confirmar Contraseña</label>
                                <input type="password"
                                    id="confirm_password"
                                    
                                    className="border w-full border-lg rounded-lg" />
                            </div>
                            {data.keyWord.length>0 &&
                                <div className="mt-4">
                                <label htmlFor="keyWord" className="font-semibold">Confirmar Palabra clave</label>
                                <input type="text"
                                    id="keyWord"
                                    className="border w-full border-lg rounded-lg" />
                            </div>
                            }
                        </fieldset>
                    </div>

                    <input 
                        type="submit" 
                        value="Guardar" 
                        className="bg-morado-bajo-500 mx-10 rounded-lg p-1 px-4 font-black text-lg sm:w-[200px] hover:bg-morado-bajo-700 hover:text-white cursor-pointer" 
                    />
                </form>
                <Toaster 
                    position="top-center" 
                    richColors
                    />
            </div>
            
        );
};

export { Perfil };
