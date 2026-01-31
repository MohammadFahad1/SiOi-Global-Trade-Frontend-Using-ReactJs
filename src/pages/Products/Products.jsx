import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import apiClient from "../../services/api-client";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const FetchProducts = async () => {
    try {
      setLoading(true);
      setProducts([]);
      const response = await apiClient.get(`/products/?page=${currentPage}`);
      const data = response.data;
      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, [currentPage]);

  return (
    <section>
      {/* Heading Section of the page */}
      <div className="p-8 text-center md:py-20 md:px-16 md:text-left bg-linear-to-br from-slate-900 to-gray-700">
        <h1 className="text-2xl font-bold text-white md:text-7xl">
          Products Page
        </h1>
        <p className="text-white mt-5 text-sm md:text-xl md:mt-8">
          Rev up your ride with Bangladesh's most reliable genuine car parts,
          delivered straight to your door!
        </p>
      </div>
      {/* Filters & Products Section */}
      <div className="px-6 md:px-8 lg:px-10 grid grid-cols-12 gap-5 my-7 md:my-10">
        {/* Filters Section Starts */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Filters />
        </div>
        {/* Filters Section Ends */}

        {/* Products Section Starts */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-white shadow-xl">
          {/* Section Heading */}
          <div className="px-6 py-8 shadow-xl rounded-xl mb-6 flex flex-wrap justify-center items-center md:flex-nowrap md:justify-between">
            <h3 className="text-xl font-semibold flex gap-3 items-center">
              <span className="text-4xl text-blue-600">75</span>{" "}
              <span>products found</span>
            </h3>

            {/* Searching and Sorting Section Starts */}
            <form className="flex flex-wrap items-center justify-center md:flex-nowrap md:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <label className="block text-gray-700">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search by product name"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="block text-gray-700">
                    <select
                      name="sort"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                    </select>
                  </label>
                </div>
              </div>
            </form>
            {/* Searching and Sorting Section Ends */}
          </div>

          {/* Products Cards Starts */}
          {loading && (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-info h-20 w-20"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {products.length === 0
              ? null
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
          {/* Products Cards Ends */}

          {/* Pagination Section Starts */}
          {products.length > 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          {/* Pagination Section Ends */}
        </div>
        {/* Products Section Ends */}
      </div>
    </section>
  );
};

export default Products;
