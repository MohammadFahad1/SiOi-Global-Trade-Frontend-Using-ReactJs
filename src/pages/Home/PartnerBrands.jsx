import React from "react";

const PartnerBrands = () => {
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
            <span className="text-blue-700 font-bold text-sm md:text-base uppercase tracking-wider">
              Premium Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            <span>Shop </span>
            <span>Premium </span>
            <span>
              <span className="bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Brands
              </span>
            </span>
          </h2>
          <div className="text-center max-w-3xl mx-auto">
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-full bg-linear-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none opacity-60" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-full bg-linear-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none opacity-60" />
          <div
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6 pt-2 px-4"
            style={{ scrollbarWidth: "none", opacity: 1, transform: "none" }}
          >
            <a
              className="block transform-gpu transition-transform duration-300"
              href="/collections/toyota"
            >
              <div
                className="shrink-0"
                style={{
                  opacity: 0,
                  transform: "translateY(20px) scale(0.95) translateZ(0px)",
                }}
              >
                <div className="relative w-32 h-24 bg-white rounded-xl border-2 transition-all duration-400 group overflow-hidden border-gray-200 hover:border-blue-400 hover:shadow-lg cursor-pointer transform-gpu">
                  <div className="absolute inset-0 bg-linear-to-br from-gray-50/50 via-white to-gray-50/30" />
                  <div className="absolute -top-1 -right-1 z-20">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-white">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out z-10" />
                  <div className="relative z-15 p-3 flex flex-col items-center justify-center h-full">
                    <div className="mb-1 flex items-center justify-center h-12">
                      <img
                        src="/images/brands/toyota.png"
                        alt="Toyota authentic parts"
                        className="max-w-full max-h-full object-contain filter group-hover:brightness-110 group-hover:saturate-110 transition-all duration-400"
                      />
                    </div>
                    <div className="text-center w-full">
                      <div className="text-xs font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 truncate">
                        Toyota
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                </div>
              </div>
            </a>
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
