import { useNavigate } from "react-router";
import { apiAxios } from "../config/apiAxios";
import { useStoreAuth } from "../hooks/Store";


const EditarPerfil = () => {
    const navigate=useNavigate()
    const Logout= useStoreAuth((store)=>store.logout);
    async function logout(){
        try {
            await apiAxios.post('/api/logout',null)
        Logout();
        navigate('/login');
        
        } catch (error) {
            console.log(error);
            
        }
        
        
    }
    return ( 
        <div className="absolute top-9 right-0 border mx-4 p-3 rounded-2xl bg-morado-bajo-200
        shadow-md/30 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
            <div className="flex flex-col gap-2">
                <div  className="hover:bg-red-300 cursor-pointer p-2 flex items-center gap-2">
                    <p>Editar Perfil</p>
                    <img src="../icons/edit-user.svg" alt="editar usuario" className="w-6"/>
                </div>

                <button className="hover:bg-red-300 cursor-pointer p-2 flex gap-2 items-center"
                    onClick={logout}
                >
                    <p>Cerrar sesion</p>
                    <img src="../icons/logout.svg" alt="cerrar sesión" className="w-6"/>
                </button>
            </div>
        </div> 
    );
}

export { EditarPerfil };
