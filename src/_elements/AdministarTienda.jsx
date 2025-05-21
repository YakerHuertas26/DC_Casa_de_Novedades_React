import { useState, } from "react";
import { Link } from "react-router";
import menuItems from "../js/menuItems";
import useStore from "../hooks/Store";


const AdministrarTienda = () => {
    // colapsar option
    const [collapsed, setCollapsed] = useState(false);

    function desplegar(){
        setCollapsed (!collapsed)
    }
    const collapse= useStore((store)=> store.collapse)
    return ( 
        <>
            <div className={`flex px-2 ${collapsed? 'bg-celeste-400': ''} hover:bg-celeste-400 cursor-pointer`}
                onClick={desplegar}>
                <img src="../icons/store.svg" alt="icono_tienda" 
                className="w-7"/>
                {collapse && <p className="w-full p-2 font-semibold">Administar Tienda </p>}
                
                { collapsed ?
                    <img src="../icons/right.svg" alt="icono_despegable" 
                    className="w-7"/>
                    :
                    <img src="../icons/down.svg" alt="icono_despegable" 
                    className="w-7"/> 
                }
            </div>
            

            {collapsed  &&<Menu/>}
        </>
    );
}
const Menu = () => {
     // seleccionar una option 
    const[selectOption,setSelectOption]=useState('')

    function handleSelect(e,name){
        e.preventDefault()
        setSelectOption(name)
    }
    const collapse= useStore((store)=> store.collapse)
    return ( 
        <li className="overflow-y-auto">
            <ul className="flex flex-col pl-5 overflow-y-auto">
                {menuItems.map(menu=>
                    <li key={menu.id} className={` hover:bg-melonh-300 p-2 ${
                        selectOption === menu.name ? 'bg-melonh-300' : ''}`}>
                        <Link to={''}
                            onClick={(e)=>handleSelect(e,menu.name)}
                            className="flex items-center gap-1">
                        <img src={menu.icon} alt={`icono_${menu.name}`} className="w-8"/>
                        {collapse &&
                        <p>{menu.name}</p>}
                        </Link>
                    </li>
                )}
            </ul>
        </li>

    );
}


export { AdministrarTienda,Menu  };