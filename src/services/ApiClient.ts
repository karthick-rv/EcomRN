import axios from 'axios';
import Config from '../constants/config';

const apiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

//   apiClient.interceptors.request.use(
//     config => {
//       // Add token to headers
//     //   config.headers.Authorization = `Bearer ${token}`;
//       return config;
//     },
//     error => Promise.reject(error)
//   );

//   apiClient.interceptors.response.use(
//     response => response,
//     error => {
//       // Handle errors globally
//       return Promise.reject(error);
//     }
//   );

export default apiClient;
