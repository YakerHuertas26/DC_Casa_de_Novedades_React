const Login = () => {
    return (
        <div className="p-8 shadow-2xl/50 border-5 border-verde-600 md:mt-10 rounded-2xl md:py-10">
            <form action="">
                <div>
                    <label htmlFor="name"
                            className="text-[18px]">
                        Usuario:</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Tu usuario"
                        className="w-full p-1 md:mt-2 border-1 border-morado-oscuro-800 bg-plomo-bajo-100 focus:outline-none rounded-md"
                        />
                </div>
                <div className="md:mt-8 mt-3">
                    <label htmlFor="password"
                        className="text-[18px]">
                        Contraseña:</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        placeholder="********"
                        className="w-full p-1 border-1 md:mt-2 focus:outline-none rounded-md border-morado-oscuro-800 bg-plomo-bajo-100"
                        />
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesión"
                    className="w-full text-center mt-5  py-1 font-semibold text-white bg-celeste-500
                    md:mt-10 cursor-pointer hover:bg-celeste-600 "
                />
            </form>
        </div>
    );
}

export { Login };