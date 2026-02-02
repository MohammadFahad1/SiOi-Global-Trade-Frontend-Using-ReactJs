import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (currentPage) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const FetchProducts = async () => {
      try {
        setLoading(true);
        setProducts([]);
        const response = await apiClient.get(`/products/?page=${currentPage}`);
        const data = response.data;
        setProducts(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        // setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchProducts();
  }, [currentPage]);

  return { products, loading, totalPages };
};

export default useFetchProducts;
