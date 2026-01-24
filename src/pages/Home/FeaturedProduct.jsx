import React from "react";
import ProductCard from "../../components/ProductCard";
import { NavLink } from "react-router";

const FeaturedProduct = () => {
  return (
    <section className="px-10 pb-10 flex flex-col items-center justify-center">
      {/* Section Info Starts */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex gap-2 items-center px-6 py-3 rounded-full bg-[#bf1d1e] uppercase text-md font-semibold text-white border border-[#bf1d1e] my-8 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <h4>HANDPICKED SELECTION</h4>
        </div>
        <h4
          className="font-bold text-2xl md:text-4xl lg:text-5xl text-center mb-2"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          Premium Quality{" "}
          <span
            className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#bf1d1e] my-2 text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            Featured Premium Parts
          </span>
        </h4>
        <span
          className="block w-25 h-0.75 bg-[#bf1d1e] my-2"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="50"
        ></span>
        <p
          className="text-gray-700 text-lg max-w-175 text-center mb-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          Hand-picked automotive components that represent the finest in
          Japanese engineering and quality.
        </p>

        {/* Quality Icons Starts */}
        <div
          className="hidden md:flex justify-center items-center gap-6"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
            <div className="w-7 h-7 md:w-9 md:h-9 p-2 rounded-full bg-green-200 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
            Most Popular
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
            <div className="w-7 h-7 md:w-9 md:h-9 p-2 rounded-full bg-red-200 text-[#bf1d1e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            Premium Quality
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
            <div className="w-7 h-7 md:w-9 md:h-9 p-2 rounded-full bg-blue-200 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            Verified Authentic
          </div>
        </div>
        {/* Quality Icons Ends */}
      </div>
      {/* Section Info Ends */}

      {/* Product Cards Starts */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 my-10"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="50"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* Product Cards Ends */}

      <div
        className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center my-5"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="50"
      >
        <NavLink
          to="/"
          className="btn btn-error bg-red-600 font-bold text-white text-md md:text-xl rounded-2xl py-4 md:py-8 px-5 text-center w-1/2 hover:shadow-sm hover:transform hover:scale-105 transition-all duration-300 hover:shadow-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
          View All Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </NavLink>
        <NavLink
          to="/"
          className="btn btn-outline btn-error bg-white hover:bg-red-100 font-bold text-gray-400 text-md md:text-xl border-2 border-gray-400 rounded-2xl py-4 md:py-8 px-5 text-center w-1/2 hover:text-red-600 hover:border-red-600 hover:shadow-sm hover:transform hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
          Request a Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </NavLink>
      </div>

      <p
        className="text-gray-800 max-w-110 text-center text-md mb-5"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="50"
      >
        Explore our complete catalog of authentic Japanese auto parts with fast
        nationwide shipping
      </p>
    </section>
  );
};

export default FeaturedProduct;
