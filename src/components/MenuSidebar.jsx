import { AdministarWeb } from "../_elements/AdministrarWeb";
import { AdministrarTienda } from "../_elements/AdministarTienda";
import useStore from "../hooks/Store";

const MenuSidebar = () => {
    return ( 
        <>
            <div className="text-md flex w-full">
                    <ul className="flex flex-col gap-1 w-full overflow-y-hidden">
                        <AdministrarTienda/>
                        <AdministarWeb />
                    </ul>
            </div>
            <BtnCollapse/>
        </>
    );
}

// boton colpsable
const BtnCollapse = () => {
    const collapse=useStore((state)=>state.collapse);
    const setCollapse=useStore((state)=>state.setCollapse);
    return ( 
        <div className="flex items-center border-l border-r">
            <button type="button" className="cursor-pointer" 
                        onClick={setCollapse}>
                        <img 
                            src="../icons/left-circle.svg" 
                            alt="icono_despegable" 
                            className={`w-10 transition-transform duration-300`} 
                        /> 
                    <div>{collapse?'si':'no'}</div>
            </button>
        </div>
    );
}

export { BtnCollapse,MenuSidebar };
