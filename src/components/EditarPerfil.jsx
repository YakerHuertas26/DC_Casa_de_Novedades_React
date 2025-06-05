import { useNavigate,NavLink } from "react-router";
import { apiAxios } from "../config/apiAxios";
import { useStoreAuth, useStoreDashboard } from "../hooks/Store";
import { toast, Toaster } from "sonner";


const EditarPerfil = () => {
    const navigate=useNavigate()
    const Logout= useStoreAuth((store)=>store.logout);
    const mode=useStoreDashboard((store)=>store.mode);
    const setMode=useStoreDashboard((store)=>store.setMode);
    
    async function logout(){
        try {
            await apiAxios.post('/api/logout',null)
        Logout();
        navigate('/login');
        
        } catch (error) {
            toast.error('Error al cerrar sesión');
            console.log(error);
            
        }
        
    }
    return ( 
        <>
        <div className="absolute top-9 right-0 border mx-4 p-3 rounded-2xl bg-morado-bajo-200
        shadow-md/30 z-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
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
            <Toaster
                position="top-center"
                richColors
            />
        </>
    );
}

export { EditarPerfil };
