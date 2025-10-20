// api/api.js
import axios from 'axios';

// change baseURL if using physical device
const BASE_URL = 'http://192.168.10.201:3001';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
});

export default api;
