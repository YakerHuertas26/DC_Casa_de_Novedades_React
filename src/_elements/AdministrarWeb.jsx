import useStore from "../hooks/Store";

const AdministarWeb = () => {
    const collapse= useStore((store)=> store.collapse)
    return ( 
        <>
            <div className="flex px-2  hover:bg-celeste-400 cursor-pointer">
                <img src="../icons/web.svg" alt="icono_web" 
                className="w-7"/>
                {collapse && <p className="w-full p-2 font-semibold">Administar Web </p>}
            </div>
            <li className="overflow-y-auto">
                {/* <ul className="flex flex-col pl-5">
                    <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                        <img src="../icons/sales.svg" alt="icono_ventas" className="w-8"/>
                        <a href="">Ventas</a>
                    </li>

                    <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                        <img src="../icons/sales.svg" alt="icono_ventas" className="w-8"/>
                        <a href="">Ventas</a>
                    </li>

                </ul>           */}
            </li>
        </>
    );
}

export { AdministarWeb };