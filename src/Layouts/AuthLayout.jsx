import { Outlet } from "react-router";

Outlet
const AuthLayout = () => {
    return ( 
        <main className="h-screen bg-[url(/img/fondo_mobile.png)] bg-cover bg-center p-4 
        md:flex md:justify-evenly md:gap-10 md:items-center md:bg-[url(/img/fondo_desktop.png)] md:px-20 md:py-10" data-theme="light">
                
                <div className="flex flex-col h-[44%] justify-evenly items-center py-2 
                md:h-[90%] md:w-[70%] lg:w-[40%]">
                    <img src="/img/logo.png" alt="Logo"
                        className="h-[70%] w-[60%] md:h-[40%] md:w-[70%] lg:w-[60%] lg:h-[50%]"/>
                    <h2 className="font-mochiy font-bold uppercase text-center tracking-widest text-lg 
                    md:text-[30px]">
                        Bienvenido
                    </h2>
                </div>
                <Outlet/>
        </main>
    );
}

export { AuthLayout };