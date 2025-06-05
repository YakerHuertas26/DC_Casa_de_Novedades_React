import axios from "axios";
import { useStoreAuth } from "../hooks/Store";

const apiAxios = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    timeout: 10000,
    withCredentials: true, // ¡Habilita el envío de cookies!
    headers: {
        'Accept': 'application/json', //recibe formato json
        'Content-Type': 'application/json', //envio en formato json
    },

});

// interseptop de token expirado 
apiAxios.interceptors.response.use(
    response => response,
    error => {
        const store = useStoreAuth.getState(); // Accedemos al store fuera de React
        
        if (error.response?.status === 401 && error.response.data?.logout) {
            
                // Forzar cierre de sesión cuando el token expire
                store.forceLogout('Tu sesión ha expirado, por favor inicia sesión nuevamente');
                // Redirigir al login
                window.location.href = '/login'; // Usamos window.location para recargar completamente
            
        }

        return Promise.reject(error);
    }
);

export { apiAxios }