import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor to refresh token automatically
API.interceptors.request.use(
    (config) => {
        const tokens = JSON.parse(localStorage.getItem('authTokens'));
        if (tokens) {
            config.headers['Authorization'] = `Bearer ${tokens.access}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const login = (credentials) => API.post('token/', credentials);
export const register = (userData) => API.post('register/', userData);
export const getNotes = () => API.get('notes/');
export const refreshToken = (refresh) => API.post('token/refresh/', { refresh });

export const addNote = (noteData, token) => 
    API.post('notes/create/', noteData, {
        headers: { Authorization: `Bearer ${token}` },
    });


export default API;
