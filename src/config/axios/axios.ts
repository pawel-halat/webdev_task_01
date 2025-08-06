import axios from "axios";
import { API_CONFIG } from "../api";
import { onError } from "./helpers/on-error";

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use((response) => {
  return response;
}, onError);

export default apiClient;
