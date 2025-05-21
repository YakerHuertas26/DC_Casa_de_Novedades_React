import { useState } from "react";

const AdministrarTienda = () => {

    const [collapsed, setCollapsed] = useState(false);

    function desplegar(){
        setCollapsed (!collapsed)
    }

    return ( 
        <>
            <div className={`flex px-2 ${collapsed? 'bg-celeste-400': ''} hover:bg-celeste-400 cursor-pointer`}
                onClick={desplegar}>
                <img src="../icons/store.svg" alt="icono_tienda" 
                className="w-7"/>
                <p className="w-full p-2 font-semibold">Administar Tienda </p>
                { collapsed ?
                    <img src="../icons/right.svg" alt="icono_despegable" 
                    className="w-7"/>
                    :
                    <img src="../icons/down.svg" alt="icono_despegable" 
                    className="w-7"/> 
                }
            </div>

            {collapsed  &&
                <li className="overflow-y-auto">
                    <ul className="flex flex-col pl-5 overflow-y-auto">
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/sales.svg" alt="icono_ventas" className="w-8"/>
                            <a href="">Ventas</a>
                        </li>

                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/product.svg" alt="icono_producto" className="w-8"/>
                            <a href="">Producto</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/productxcategory.svg" alt="icono_product por categoria" className="w-8"/>
                            <a href="" className="truncate">Producto por categoría</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/category.svg" alt="icono_categoría" className="w-8"/>
                            <a href="" className="truncate">Categoría</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/seller.svg" alt="icono_Vendedores" className="w-8"/>
                            <a href="" className="truncate">Vendedores</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/shopping.svg" alt="icono_Compras" className="w-8"/>
                            <a href="" className="truncate">Compras</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/customer.svg" alt="icono_Clientes" className="w-8"/>
                            <a href="" className="truncate">Clientes</a>
                        </li>
                        
                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/payment.svg" alt="icono_Pagos a crédito" className="w-8"/>
                            <a href="" className="truncate">Pagos a crédito</a>
                        </li>

                        <li className="flex items-center gap-1 hover:bg-melonh-300 p-2">
                            <img src="../icons/box.svg" alt="icono_caja" className="w-8"/>
                            <a href="" className="truncate">Caja</a>
                        </li>
                    </ul>
            </li>
            }

        </>
    );
}

export { AdministrarTienda };