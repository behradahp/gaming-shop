import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});
