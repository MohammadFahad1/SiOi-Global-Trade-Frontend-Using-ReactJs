import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (
  currentPage,
  debouncedPriceRange,
  selectedCategory,
  selectedBrand,
  debouncedSearchQuery,
  ordering,
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const FetchProducts = async () => {
      setLoading(true);
      setProducts([]);
      const url = `/products/?category_id=${selectedCategory}&brand_id=${selectedBrand}&price__gte=${debouncedPriceRange[0]}&price__lte=${debouncedPriceRange[1]}&search=${debouncedSearchQuery}&ordering=${ordering}&page=${currentPage}`;
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
  }, [
    currentPage,
    debouncedPriceRange,
    selectedCategory,
    selectedBrand,
    debouncedSearchQuery,
    ordering,
  ]);

  return { products, loading, totalPages };
};

export default useFetchProducts;
