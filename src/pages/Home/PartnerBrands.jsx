import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductCard from "../../components/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PartnerBrandCard from "../../components/PartnerBrandCard";

const PartnerBrands = () => {
  let arr = new Array(20).fill(0);
  return (
    <section className="py-12 md:py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500/15 via-blue-400/10 to-blue-500/15 backdrop-blur-sm border border-blue-500/30 px-6 md:px-8 py-3 md:py-4 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span
              className="text-blue-700 font-bold text-sm md:text-base uppercase tracking-wider"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="50"
            >
              Premium Partners
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <span>Shop </span>
            <span>Premium </span>
            <span>
              <span className="bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Brands
              </span>
            </span>
          </h2>
          <div
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <p className="text-gray-600 text-lg md:text-xl mb-4 leading-relaxed">
              Discover authentic Japanese automotive parts from world-renowned
              manufacturers. Click any brand to explore their exclusive
              collection of genuine OEM and aftermarket parts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 font-medium">
                  Click to browse collections
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
                  />
                </svg>
                <span className="text-blue-700 font-medium">
                  1000+ authentic parts
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-2">
          <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            {/* Brand Cards will be placed here */}
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              pagination={{ clickable: true }}
              loop={false}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {arr.map((_, index) => (
                <SwiperSlide key={index}>
                  <PartnerBrandCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex md:hidden items-center justify-center mt-4 text-sm text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Scroll to see more brands</span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 ml-2 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div
            className="text-center mt-8"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="group inline-flex items-center gap-3 bg-linear-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              href="/collections"
            >
              <span className="text-sm md:text-base">
                Explore All Collections
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
