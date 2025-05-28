import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
    
    return (
        <div className="md:flex h-screen">
            <Sidebar/>

            <main className="flex-1">
                <div className="px-4 mb-2 flex justify-end">
                    <h2>
                        Hola User
                    </h2>
                </div>

                <div className="p-2 ">
                    Contenido principal
                </div>
            </main>
        </div>
        
    );
};
export {Dashboard}

// const [collapsed, setCollapsed] = useState(false);

    // const toggleSidebar = () => {
    //     setCollapsed(!collapsed);
    // };
/*<div className="flex h-screen bg-gray-100">
            
            <aside
                className={`bg-white shadow-md h-full transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    {!collapsed && <span className="text-lg font-semibold">Mi Panel</span>}
                    <button
                        className="text-gray-600 md:hidden"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                </div>

                <ul className="mt-4 space-y-2">
                    {menuItems.map(({ icon, label }, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            <span>{icon}</span>
                            {!collapsed && <span>{label}</span>}
                        </li>
                    ))}
                </ul>
            </aside>

            
            <main className="flex-1 p-6 overflow-auto">
                <h1 className="text-2xl font-bold">Contenido principal</h1>
                <p className="mt-4">Aquí va el contenido principal de tu aplicación.</p>
                <button
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded md:inline hidden"
                    onClick={toggleSidebar}
                >
                    {collapsed ? 'Expandir' : 'Colapsar'}
                </button>
            </main>
</div>*/
// const menuItems = [
//   { icon: '🏠', label: 'Inicio' },
//   { icon: '📄', label: 'Documentos' },
//   { icon: '⚙️', label: 'Configuración' },
// ];
// export { Dashboard };