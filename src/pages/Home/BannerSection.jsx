import React from "react";
import { NavLink } from "react-router";

const BannerSection = () => {
  return (
    <section className="bg-gray-50">
      <section className="relative ">
        <div className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Professional automotive service and car parts maintenance"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="100vw"
              src="https://japanparts.com.bd/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486262715619-67b85e0b08d3%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D1920%26h%3D1080%26q%3D80&w=1920&q=75"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-gray-900/70 to-slate-900/90" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40" />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div
              className="text-center"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-6"
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
                  className="text-blue-400 h-4 w-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                  Premium Service
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                Why Choose Japan Parts Direct
                <span
                  className="block bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="50"
                >
                  Excellence Deliveblue
                </span>
              </h1>
              <p
                className="text-gray-300 text-lg max-w-2xl mx-auto leading-normal mb-8"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                Experience the difference with our comprehensive automotive
                solutions and unmatched customer service.
              </p>
            </div>
          </div>
        </div>
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/3 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div
              className="text-center mb-8 sm:mb-10 md:mb-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="inline-flex items-center gap-1 sm:gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
                data-aos="fade-down"
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
                  className="text-blue-600 h-3 w-3 sm:h-4 sm:w-4"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  Our Advantages
                </span>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                Complete Automotive
                <span className="block text-blue-600">Solutions</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full" />
              <p
                className="text-gray-600 text-lg max-w-2xl mx-auto leading-normal"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                From genuine parts to expert support, we deliver comprehensive
                automotive services.
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              style={{ opacity: 1 }}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full ring-2 ring-blue-500/20">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-blue-500/20 text-blue-600">
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
                        className="h-6 w-6"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Authentic Guarantee
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      100% genuine OEM parts with authenticity certificates
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Verified{" "}
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>{" "}
                        coverage
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Quality inspection certified
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full border-gray-200">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-gray-100 text-gray-700">
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
                        className="h-6 w-6"
                      >
                        <path d="M10 17h4V5H2v12h3" />
                        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                        <path d="M14 17h1" />
                        <circle cx="7.5" cy="17.5" r="2.5" />
                        <circle cx="17.5" cy="17.5" r="2.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Fast Shipping
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Express nationwide delivery with real-time tracking
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Free shipping on ৳4000+
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Express delivery available
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        150+ countries served
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full border-gray-200">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-gray-100 text-gray-700">
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
                        className="h-6 w-6"
                      >
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Expert Support
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      24/7 technical assistance from automotive specialists
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Round-the-clock support
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Certified technicians
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Installation guidance
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full border-gray-200">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-gray-100 text-gray-700">
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
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Easy Returns
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      30-day hassle-free returns with free return shipping
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        30-day return policy
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Free return labels
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Quick refund processing
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full border-gray-200">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-gray-100 text-gray-700">
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
                        className="h-6 w-6"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Same-Day Processing
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Orders processed within hours for faster delivery
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Same-day processing
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Real-time inventory
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Priority handling
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div
                className="group relative"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300/50 h-full ring-2 ring-blue-500/20">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-blue-500/20 text-blue-600">
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
                        className="h-6 w-6"
                      >
                        <circle cx={12} cy={8} r={6} />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      Best Price Promise
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Competitive pricing with price matching guarantee
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Price match guarantee
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Member discounts
                      </li>
                      <li className="flex items-center text-xs text-gray-500">
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
                          className="h-3 w-3 text-emerald-500 mr-2 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Volume pricing available
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
            <div
              className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="flex items-center justify-center gap-8 text-sm text-gray-600"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-blue-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} x2={22} y1={12} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="font-medium">Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-emerald-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="font-medium">Trusted by Many</span>
                </div>
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-blue-600"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="font-medium">Industry Leading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-linear-to-r from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
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
                  className="h-8 w-8 text-blue-400"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                Experience Premium Quality
              </h3>
              <p
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-normal"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                Join thousands of automotive enthusiasts who trust Japan Parts
                for authentic quality and exceptional service.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                <NavLink
                  className="inline-flex items-center px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-gray-900 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                  to="/"
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
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M16.5 9.4 7.55 4.24" />
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1={12} x2={12} y1={22} y2={12} />
                  </svg>
                  Start Shopping
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
                    className="h-5 w-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </NavLink>
                <NavLink
                  className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-gray-900 rounded-xl font-bold transition-all duration-300"
                  to="/"
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
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                  Get Support
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BannerSection;
