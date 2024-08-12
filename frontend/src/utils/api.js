import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,
  headers: {
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});

export default api;
