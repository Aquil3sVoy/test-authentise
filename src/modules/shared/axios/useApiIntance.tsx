import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "src/config";

/* Creating an Axios instance with a base URL */
const api: AxiosInstance = Axios.create({
  baseURL: config.backendUrl,
});

api.interceptors.request.use(async function (
  options: AxiosRequestConfig<any> | any
) {
  return options;
});

export default api;
