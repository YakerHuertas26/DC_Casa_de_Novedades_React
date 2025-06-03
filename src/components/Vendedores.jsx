const Vendedores = () => {
    return ( 
        <div className="p-4 text-[15px]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border px-7">
                <h3 className="order-2 sm:order-1"> Mis vendedores </h3>
                <button className="bg-morado-bajo-400 px-4 py-1 rounded-lg order-1 "
                        type="button">
                            Añadir vendedor
                </button>
            </div>
        </div>
    );
}

export { Vendedores };