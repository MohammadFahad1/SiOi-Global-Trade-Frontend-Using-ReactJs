import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (currentPage, priceRange, selectedCategory) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const FetchProducts = async () => {
      setLoading(true);
      setProducts([]);
      const url = `/products/?category_id=${selectedCategory}&price__gte=${priceRange[0]}&price__lte=${priceRange[1]}&page=${currentPage}`;
      try {
        const response = await apiClient.get(url);
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
  }, [currentPage, priceRange, selectedCategory]);

  return { products, loading, totalPages };
};

export default useFetchProducts;
