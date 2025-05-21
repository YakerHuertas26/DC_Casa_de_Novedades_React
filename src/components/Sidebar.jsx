import { MenuSidebar } from "./MenuSidebar";

const Sidebar = () => {
    return (
        <aside className="md:w-70 flex flex-col md:h-screen">
                <div className="w-full flex p-2 shadow-lg/15 bg-rosadoh-400">
                    <img src="../img/logo.png" alt="Logo" 
                        className="w-16"/>
                    <div className="flex flex-col text-center w-full">
                        <h2 className="font-mochiy text-[18px]">DC</h2>
                        <h2 className="font-mochiy text-[17px]">Casa de Novedades</h2>
                    </div>
                </div>
                
                <div className=" flex-1 overflow-y-auto w-full flex py-1">
                    <MenuSidebar/>
                </div>
                
        </aside>
    );
};

export { Sidebar };
