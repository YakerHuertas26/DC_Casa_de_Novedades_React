const HeaderUItem = ({title,modal,setModal}) => {
    
    return ( 
        <div className="p-4 text-[15px]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-7 text-lg font-semibold">
                <h3 className="order-2 sm:order-1"> Mis {title} </h3>
                <button className="bg-morado-bajo-400 px-4 py-1 rounded-lg order-1 cursor-pointer font-bold hover:bg-morado-bajo-600"
                        type="button"
                        onClick={setModal}>
                            Añadir {title}
                </button>
            </div>
        </div>
    );
}

export { HeaderUItem };