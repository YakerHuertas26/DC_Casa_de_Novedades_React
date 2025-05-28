import axios from "axios";

const apiAxios= axios.create({
    baseURL:import.meta.env.VITE_URL_API,
    timeout:10000, 
    withCredentials: true, // ¡Habilita el envío de cookies!
    headers:{
        'Accept': 'application/json', //recibe formato json
        'Content-Type':'application/json', //envio en formato json
        },
    
});

export {apiAxios}