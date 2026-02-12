import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://sioi-global-trade-backend-using-drf.vercel.app/api/v1",
});

authApiClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authTokens")).access;

    if (token) {
      config.headers.Authorization = `JWT ${token}`;
      return config;
    }
    return config;
  },
  (errors) => Promise.reject(errors),
);

export default authApiClient;
