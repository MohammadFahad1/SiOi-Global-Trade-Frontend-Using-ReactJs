import axios from "axios";

export default axios.create({
  baseURL: "https://sioi-global-trade-backend-using-drf.vercel.app/api/v1",
  // baseURL: "http://127.0.0.1:8000/api/v1",
});
