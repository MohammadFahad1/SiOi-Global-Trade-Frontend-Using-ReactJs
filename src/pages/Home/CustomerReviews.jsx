// import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CustomerReviewCard from "../../components/CustomerReviewCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CustomerReviews = () => {
  //   const swiperRef = useRef(null);

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden bg-white ">
      <div className="absolute inset-0 w-full bg-linear-to-br from-gray-50/50 to-red-50/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-400/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            className="inline-flex items-center gap-3 bg-red-50 border border-red-200 px-6 py-3 rounded-full mb-8"
            style={{ transform: "none" }}
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
              className="text-red-600 h-5 w-5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">
              Customer Reviews
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Trusted by Car Enthusiasts Worldwide
            </span>
          </h2>
          <div
            className="w-24 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
            style={{ width: "6rem" }}
          />
        </div>
        {/* Review Cards will be added here */}
        <CustomerReviewCard />
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="w-12 h-12 bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer"
            tabIndex={0}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="w-12 h-12 bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer"
            tabIndex={0}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="mt-20" style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 lg:p-8 bg-linear-to-br from-white to-red-50/50 rounded-xl border border-red-200/50 shadow-sm hover:shadow-lg transition-all duration-500 group">
              <div className="w-12 h-12 bg-red-100 group-hover:bg-red-200 flex items-center justify-center rounded-xl mx-auto mb-4 transition-colors duration-300">
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
                  className="text-red-600 h-6 w-6"
                >
                  <circle cx={12} cy={8} r={6} />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                4.9<span className="text-gray-900">/5</span>
              </div>
              <div className="text-gray-900 font-bold text-lg mb-1">
                Excellence Rating
              </div>
              <div className="text-sm text-gray-600">
                Based on 2,847+ reviews
              </div>
            </div>
            <div
              className="text-center p-6 lg:p-8 bg-linear-to-br from-white to-emerald-50/50 rounded-xl border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all duration-500 group"
              style={{ transform: "none" }}
            >
              <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center rounded-xl mx-auto mb-4 transition-colors duration-300">
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
                  className="text-emerald-600 h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                15,000<span className="text-gray-900">+</span>
              </div>
              <div className="text-gray-900 font-bold text-lg mb-1">
                Satisfied Customers
              </div>
              <div className="text-sm text-gray-600">Worldwide trust</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-linear-to-br from-white to-blue-50/50 rounded-xl border border-blue-200/50 shadow-sm hover:shadow-lg transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center rounded-xl mx-auto mb-4 transition-colors duration-300">
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
                  className="text-blue-600 h-6 w-6"
                >
                  <path d="M10 17h4V5H2v12h3" />
                  <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                  <path d="M14 17h1" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                98<span className="text-gray-900">%</span>
              </div>
              <div className="text-gray-900 font-bold text-lg mb-1">
                On-Time Delivery
              </div>
              <div className="text-sm text-gray-600">Professional service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
