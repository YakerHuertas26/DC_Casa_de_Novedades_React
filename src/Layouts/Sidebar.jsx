import { memo, useState } from "react";
import { AdministrarTienda } from "../components/AdministarTienda";
import { useStoreDashboard } from "../hooks/Store";
import { NavLink } from "react-router";

const Sidebar =memo(() => {
    const selectedIndex = useStoreDashboard((state) => state.selectedIndex);
    const setSelectedIndex = useStoreDashboard((state) => state.setSelectedIndex);
    return (
            <div className="overflow-y-auto w-full flex">
                <div className="text-md flex w-full">
                    <ul className="flex flex-col w-full overflow-y-hidden">

                        <li className={`flex px-2  hover:bg-celeste-400 cursor-pointer justify-center items-center ${selectedIndex==0?'bg-celeste-400':''}`}
                        onClick={()=>setSelectedIndex(0)}>
                            <img src="../icons/home.svg" alt="icono_tienda" 
                            className="w-5 "/>
                            <NavLink to={'/admin'} className="w-full p-1 font-semibold text-[13px] md:text-[15px]">Inicio</NavLink>
                        </li>

                        <AdministrarTienda index={1}/>
                        {/* <AdministarWeb/> */}
                    </ul>
                </div>
            </div>

    );
});

export { Sidebar };
