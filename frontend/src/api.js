import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api' // Your backend API base URL
});
// https://nourish360-backend.onrender.com/api',
api.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo && userInfo.token) {
      config.headers['Authorization'] = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;