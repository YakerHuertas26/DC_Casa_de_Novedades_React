import { useEffect, useState } from "react";
import { apiAxios } from "../config/apiAxios";
import useSWR from "swr";
import { Loading } from "../_elements/Loading";

const Perfil = () => {
    // función de petición axios 
    const fetcher= ()=> apiAxios.get('/api/user').then(res=>res.data);

    const { data, error, isLoading } = useSWR('/api/user', fetcher,{
        refreshInterval:1000
    })
    
    return (
        isLoading? <Loading/>:
            <div className="text-[15px] md:text-[18px] py-3 md:p-7 w-[90%] sm:w-[80%] h-full flex flex-col gap-2 md:gap-10 sm:justify-center sm:items-center m-auto ">
                <h2 className="w-full text-center text-[17px] font-mochiy md:text-3xl text-morado-oscuro-500 font-black ">Editar Perfil</h2>
                <form action="" className="md:w-full flex flex-col items-center gap-10">
                    <div className="w-[90%] flex flex-col gap-4 md:flex-row md:justify-evenly md:w-full">

                        <div>
                            <div>
                                <label htmlFor="name" className="font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.data.name}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userName" className="font-semibold">Nombre de usuario:</label>
                                <input
                                    type="text"
                                    id="userName"
                                    value={data.data.userName}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="font-semibold">Correo:</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={data.data.email}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="keyWord" className="font-semibold">Palabra clave:</label>
                                <input
                                    type="text"
                                    id="keyWord"
                                    value={data.data.keyWord}
                                    className="w-full border rounded-lg px-2"
                                    />
                            </div>
                        </div>
                        <div>

                            <div className="mt-4">
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
                        </div>
                    </div>
                    <input type="submit" value="Guardar" className="bg-morado-bajo-500 mx-10 rounded-lg p-1 px-4 font-black text-lg sm:w-[200px] hover:bg-morado-bajo-700" />
                </form>
            </div>
            
        
        );
};

export { Perfil };
