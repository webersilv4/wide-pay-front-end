import axios from 'axios';
import { getToken } from '../Authorization/Authorization';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_REQUEST
});

api.interceptors.request.use(async config => {
    
    const token = getToken();

    if (token !== null) {
        config.headers = {
            Authorization: `Bearer ${token}`
        };
    }
    return config;
});

export { api };