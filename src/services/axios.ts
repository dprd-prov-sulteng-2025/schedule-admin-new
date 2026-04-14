import axios from "axios";

const apiUrl = import.meta.env.VITE_PORT

export const axiosInstance = axios.create({
  baseURL: apiUrl
})