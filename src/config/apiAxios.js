import axios from "axios";

const apiAxios= axios.create({
    baseURL:import.meta.env.VITE_URL_API,
    timeout:10000,
    headers:{
        'Accept': 'aplication/json', //recibe formato json
        'Content-Type':'aplication/json', //envio en formato json
        },
    
});

export {apiAxios}