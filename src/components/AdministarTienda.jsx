import { useEffect, useState, } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import menuItems from "../js/menuItems";
import { useStoreDashboard } from "../hooks/Store";



const AdministrarTienda = ({ index}) => {
    // colapsar option
    const [collapse, setCollapse] = useState(true);
    const selectedIndex = useStoreDashboard((state) => state.selectedIndex);
    const setSelectedIndex = useStoreDashboard((state) => state.setSelectedIndex);

    function desplegar(){
        setSelectedIndex(index);
        if (selectedIndex) {
            setCollapse (!collapse)
        }
    }
    
    return ( 
        <>
            <li className={`flex px-2 ${  selectedIndex === index? 'bg-celeste-400': ''} hover:bg-celeste-400 cursor-pointer`}
                onClick={desplegar}>
                <img src="../icons/store.svg" alt="icono_tienda" 
                className="w-5"/>
                <p className="w-full p-1 font-semibold text-[13px] md:text-[15px]">Administar Tienda </p>
                    <img src={`${collapse?"../icons/right.svg":"../icons/down.svg"}`} alt="icono_despegable" 
                    className="w-6"/>
            </li>
            

            {collapse  &&<Menu/>}
        </>
    );
}
const Menu = () => {
    
    const setSelectedIndex = useStoreDashboard((state) => state.setSelectedIndex);
    const selectedIndex = useStoreDashboard((state) => state.selectedIndex);

     // seleccionar una option 
    const selectOption=useStoreDashboard((state)=>state.selectOption);
    const setSelectOption= useStoreDashboard ((state)=>state.setSelectOption);
    const navigate=useNavigate();

    function handleSelect(e,name,route){
        e.preventDefault()
        setSelectedIndex(1)
        setSelectOption(name)
        navigate(route);
        
    }

    useEffect(() => {
        if (selectedIndex !== 1) {
            setSelectOption('');
        }
    }, [selectedIndex]);

    
    return ( 
        <li className="overflow-y-auto">
            <ul className="flex flex-col pl-5 overflow-y-auto">
                {menuItems.map(menu=>
                    <li key={menu.id} className={` hover:bg-melonh-300 p-2 ${
                        selectOption === menu.name ? 'bg-melonh-300' : ''}`}>
                        <NavLink
                            onClick={(e)=>handleSelect(e,menu.name,menu.route)}
                            className="flex items-center gap-1">
                            <img src={menu.icon} alt={`icono_${menu.name}`} className="w-5"/>
                            <p className="text-[13px] md:text-[14px]">{menu.name}</p>
                        </NavLink>
                    </li>
                )}
            </ul>
        </li>

    );
}


export { AdministrarTienda,Menu  };