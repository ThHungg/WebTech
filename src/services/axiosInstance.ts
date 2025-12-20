import axios, { InternalAxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';

const axiosRefresh = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

interface JwtPayload {
    exp: number;
}

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        // config.headers["x-api-key"] = process.env.NEXT_PUBLIC_API_KEY;
        if(config.headers?.skipAuth){
            delete config.headers.skipAuth;
            return config;
        }
        const token = localStorage.getItem('access_token');
        if (token){
            const deocoded: JwtPayload = jwtDecode(token);
            const expTime = deocoded.exp;
            const currentTime = Math.floor(Date.now() / 1000);
            if(expTime < currentTime){
                try {
                    const res = await axiosRefresh.post('/users/refresh-token');
                    console.log("refreshtoken", res);
                    localStorage.setItem('access_token', res.data.accessToken);
                    config.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
                } catch (e) {
                    console.log(e);
                    
                    localStorage.removeItem('access_token');
                }
            } else{
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }
        return config
    },
    (error) => {
        console.log("error", error);
        return Promise.reject(error);
    }
)

export default axiosInstance;

