import { memo, useEffect, useRef, useState } from "react";
import { Sidebar } from "../Layouts/Sidebar";
import { useStoreAuth, useStoreDashboard, useStoreMode } from "../hooks/Store";
import { MenuUser } from "../components/MenuUser";
import { Outlet } from "react-router";
import { useShallow } from "zustand/shallow";


const Dashboard = () => {
    const user = useStoreAuth((store) => store.user);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const mode = useStoreMode(useShallow((store) => store.mode));
    const menuUser = useStoreDashboard(useShallow((store) => store.menuUser));
    const setMenuUser = useStoreDashboard(useShallow((store) => store.setMenuUser));
    const menuRef = useRef(null);
    const imgRef = useRef(null);

    // Efecto para cerrar al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                imgRef.current && !imgRef.current.contains(event.target)) {
                setMenuUser(false);
            }
        };

        if (menuUser) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuUser, setMenuUser]);

    return (
        <div className="flex flex-col h-screen">
            <header className=" flex flex-col " data-theme="light">
                <div className="w-full flex p-2 justify-center gap-4 items-center bg-rosadoh-300  md:p-1">
                    <img src="../img/logo.png" alt="Logo"
                        className="w-10" />
                    <h2 className="font-mochiy text-md font-bold md:text-[16px]"> DC Casa de Novedades</h2>
                </div>

                <div className="text-sm px-2 md:px-6 flex justify-between items-center bg-verde-200 md:w-full relative ">
                    <button className="cursor-pointer"
                        onClick={() => setDropdownMenu(!dropdownMenu)}>
                        <img src="../icons/menu.svg" alt="Menu" className="w-6" />
                    </button>

                    <div className="flex gap-4 items-center ">
                        <i >Hola
                            <span className="ml-2 font-bold">{user.name}</span>
                        </i>
                        <img
                            src={user.role === 'admin' ? '../img/administracion.png' : '../img/cajero.png'}
                            alt={user.role}
                            className="w-7 cursor-pointer rounded-xl m-1 border"
                            onClick={setMenuUser}
                            ref={imgRef}
                        />
                        {menuUser && <MenuUser ref={menuRef} />}
                    </div>
                </div>
            </header>

            <div className="flex h-screen overflow-hidden" data-theme={mode}>
                <aside className={`flex flex-col ${dropdownMenu ? 'border-r-1' : ''}`}>
                    {dropdownMenu && <Sidebar />}
                </aside>
                <MainContent />
            </div>
        </div>

    );
};
export { Dashboard }

const MainContent = memo(() => (
    <main className="flex-1">
        <Outlet />
    </main>
));