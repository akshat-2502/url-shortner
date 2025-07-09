//axios ka instance bnao
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://url-shortner-gnhu.onrender.com",
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
