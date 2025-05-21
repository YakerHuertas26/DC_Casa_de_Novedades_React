import { AdministarWeb } from "../_elements/AdministrarWeb";
import { AdministrarTienda } from "../_elements/AdministarTienda";

const MenuSidebar = () => {
    return ( 
        <>
            <div className="text-md flex w-full ">
                <ul className="flex flex-col gap-1 w-full overflow-y-hidden">
                    <AdministrarTienda/>
                    <AdministarWeb/>
                </ul>
                
            </div>
            <div className="flex items-center border-l border-r">
                <img src="../icons/left-circle.svg" alt="icono_despegable" 
                    className="w-10 cursor-pointer"/> 
            </div>
        </>
    );
}

export { MenuSidebar };