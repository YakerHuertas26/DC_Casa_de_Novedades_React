import React, { useState } from "react";

export default function SidebarLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleSidebar = () => setCollapsed(!collapsed);

    const toggleSubmenu = (label) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-white shadow-md h-full transition-all duration-300 ${collapsed ? "w-16" : "w-64"
                    } overflow-y-auto`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    {!collapsed && (
                        <span className="text-lg font-semibold">Mi Panel</span>
                    )}
                    <button className="text-gray-600 md:hidden" onClick={toggleSidebar}>
                        ☰
                    </button>
                </div>

                <ul className="mt-4 space-y-2">
                    {menuItems.map(({ icon, label, subItems }) => (
                        <li key={label}>
                            <div
                                className="flex items-center gap-4 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => (subItems ? toggleSubmenu(label) : null)}
                            >
                                <span>{icon}</span>
                                {!collapsed && (
                                    <>
                                        <span className="flex-1">{label}</span>
                                        {subItems && <span>{openSubmenus[label] ? "▲" : "▼"}</span>}
                                    </>
                                )}
                            </div>

                            {/* Submenu */}
                            {!collapsed && subItems && openSubmenus[label] && (
                                <ul className="ml-10 mt-1 space-y-1">
                                    {subItems.map((subLabel) => (
                                        <li
                                            key={subLabel}
                                            className="text-sm text-gray-600 hover:text-black cursor-pointer"
                                        >
                                            {subLabel}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                <h1 className="text-2xl font-bold">Contenido principal</h1>
                <p className="mt-4">Aquí va el contenido principal de tu aplicación.</p>
                <button
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded md:inline hidden"
                    onClick={toggleSidebar}
                >
                    {collapsed ? "Expandir" : "Colapsar"}
                </button>
            </main>
        </div>
    );
}

// 📁 Menú con submenús
const menuItems = [
    {
        icon: "🏠",
        label: "Inicio",
        subItems: ["Dashboard", "Estadísticas", "Resumen"],
    },
    {
        icon: "📄",
        label: "Documentos",
    },
    {
        icon: "⚙️",
        label: "Configuración",
        subItems: ["Perfil", "Seguridad", "Notificaciones"],
    },
];
