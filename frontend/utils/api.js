import axios from 'axios';

// Create an axios instance with a custom base URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default api;
