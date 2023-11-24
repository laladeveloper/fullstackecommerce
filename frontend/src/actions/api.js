// api.js
import axios from 'axios';

const axiosInstance  = axios.create({
  baseURL: 'https://hanistyles.com',
  withCredentials: true // Set this to your backend URL
});

export default axiosInstance;
