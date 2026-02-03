import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    apiClient.get("/brands/").then((res) => {
      setBrands(res.data);
    });
  }, []);

  return brands;
};

export default useFetchBrands;
