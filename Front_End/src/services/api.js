import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

export const getReporteAccesos = (params) =>
  API.get('/reportes/accesos', { params });
