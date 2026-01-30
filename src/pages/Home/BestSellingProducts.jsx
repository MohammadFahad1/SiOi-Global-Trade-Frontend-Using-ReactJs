import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "../../components/ProductCard";
import LoadingCards from "../../components/LoadingCards";
import ErrorAlert from "../../components/ErrorAlert";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import apiClient from "../../services/api-client";
const BestSellingProducts = () => {
  const swiperRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get(`/products/`)
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingCards />;
  if (error) return <ErrorAlert error={error} />;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-blue-400/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-6 sm:mb-8 md:mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            className="inline-flex items-center bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg shadow-blue-500/25"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            MOST POPULAR
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            Best Selling
            <span className="text-blue-600 block sm:inline sm:ml-3">
              Auto Parts
            </span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            Discover our most trusted and popular authentic Japanese automotive
            parts
          </p>
        </div>
        <div
          className="flex items-center justify-between mb-4 sm:mb-6 px-4 sm:px-0"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {products.length > 0 ? products.length : 0} Popular Products
            </span>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Scroll left"
              className="group relative p-3 rounded-2xl bg-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 border border-gray-100 transition-all duration-500 overflow-hidden cursor-pointer"
              type="button"
              tabIndex={0}
              style={{ minHeight: "44px", minWidth: "44px" }}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Scroll right"
              className="group relative p-3 rounded-2xl bg-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 border border-gray-100 transition-all duration-500 overflow-hidden cursor-pointer"
              type="button"
              tabIndex={0}
              style={{ minHeight: "44px", minWidth: "44px" }}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative" style={{ opacity: 1, transform: "none" }}>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-linear-to-r from-white via-white/80 to-transparent z-10 rounded-l-xl sm:rounded-l-2xl hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-linear-to-l from-white via-white/80 to-transparent z-10 rounded-r-xl sm:rounded-r-2xl hidden sm:block" />
          <div
            className="carousel-container flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 pb-3 sm:pb-4 scrollbar-hide snap-x snap-mandatory rounded-xl sm:rounded-2xl bg-white shadow-lg shadow-blue-500/10 border border-gray-100 p-3 sm:p-4 md:p-6 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 relative overflow-hidden mx-4 sm:mx-0"
            tabIndex={0}
            aria-label="Best Sellers Carousel"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/3 to-blue-600/3 pointer-events-none" />
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products?.map((product) => (
                <SwiperSlide className="bg-blue-100 h-40 flex items-center justify-center rounded-lg">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
