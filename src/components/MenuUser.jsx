import { NavLink, useNavigate} from "react-router";
import { apiAxios } from "../config/apiAxios";
import { useStoreAuth, useStoreDashboard, useStoreMode } from "../hooks/Store";
import { toast } from "sonner";
import { forwardRef, memo, useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";

const MenuUser = memo(forwardRef((props, ref) => {
    const navigate=useNavigate()
    const Logout= useStoreAuth(useShallow((store)=>store.logout));
    const mode=useStoreMode(useShallow((store)=>store.mode));
    const setMode=useStoreMode(useShallow((store)=>store.setMode));
    const setMenuUser = useStoreDashboard(useShallow((store) => store.setMenuUser));

    async function logout(){
        try {
        await apiAxios.post('/api/logout',null)
        Logout();
        navigate('/login');
        setMenuUser();
        } catch (error) {
            toast.error('Error al cerrar sesión');
            console.log(error); 
        }
    }
    return ( 
        <div 
        ref={ref}
        className="absolute top-9 right-0 border mx-4 p-3 rounded-2xl bg-morado-bajo-200
        transition-opacity duration-200">
            <div className="flex flex-col gap-2">
                <div className="hover:bg-red-300 hover:rounded-lg cursor-pointer p-2 flex items-center gap-2" 
                onClick={setMode}>
                    <p>{mode=='light'?'Modo  Oscuro':'Modo Claro'}</p>
                    <img src={mode=='light'? '../icons/night.svg':'../img/light.png'} alt="editar usuario" className="w-6"/>
                </div>

                <NavLink to={'/admin/perfil'}  className="hover:bg-red-300 hover:rounded-lg cursor-pointer p-2 flex items-center gap-2">
                    <p>Editar Perfil</p>
                    <img src="../icons/edit-user.svg" alt="editar usuario" className="w-6"/>
                </NavLink>

                <button className="hover:bg-red-300 hover:rounded-lg cursor-pointer p-2 flex gap-2 items-center"
                    onClick={logout}
                >
                    <p>Cerrar sesion</p>
                    <img src="../icons/logout.svg" alt="cerrar sesión" className="w-6"/>
                </button>
            </div>
        </div>
    );
}))

export { MenuUser };
