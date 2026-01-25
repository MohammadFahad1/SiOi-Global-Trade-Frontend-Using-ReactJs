import React from "react";

const FeaturedProductBottom = () => {
  return (
    <section
      className="py-15 px-10 border-y border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="50"
    >
      <div className="text-center group" style={{ transform: "none" }}>
        <div className="bg-[#fef2f2] hover:bg-[#f8d2d2] text-[#ee4444] px-4 py-6 rounded-2xl border border-red-200 transition-all duration-500 shadow-lg shadow-red-100 hover:shadow-[#ee4444]/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#ee4444]/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative">
            <div className="w-12 h-12 bg-[#ee4444] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#ee4444]/25">
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
                className="h-6 w-6 text-white"
              >
                <path d="M10 17h4V5H2v12h3" />
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                <path d="M14 17h1" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
            </div>
            <div className="font-bold text-sm mb-1">Free Shipping</div>
            <div className="text-xs">Minimum purchase required</div>
          </div>
        </div>
      </div>

      <div className="text-center group" style={{ transform: "none" }}>
        <div className="bg-[#fef2f2] hover:bg-[#f8d2d2] text-[#ee4444] px-4 py-6 rounded-2xl border border-red-200 transition-all duration-500 shadow-lg shadow-red-100 hover:shadow-[#ee4444]/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#ee4444]/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative">
            <div className="w-12 h-12 bg-[#ee4444] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-600/25">
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
                className="h-6 w-6 text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="font-bold text-sm mb-1">Genuine Parts</div>
            <div className="text-xs">100% Authentic</div>
          </div>
        </div>
      </div>

      <div className="text-center group" style={{ transform: "none" }}>
        <div className="bg-[#fef2f2] hover:bg-[#f8d2d2] text-[#ee4444] px-4 py-6 rounded-2xl border border-red-200 transition-all duration-500 shadow-lg shadow-red-100 hover:shadow-[#ee4444]/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#ee4444]/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative">
            <div className="w-12 h-12 bg-[#ee4444] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-yellow-700/25">
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
                className="h-6 w-6 text-white"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="font-bold text-sm mb-1">Fast Delivery</div>
            <div className="text-xs">2-5 business days</div>
          </div>
        </div>
      </div>

      <div className="text-center group" style={{ transform: "none" }}>
        <div className="bg-[#fef2f2] hover:bg-[#f8d2d2] text-[#ee4444] px-4 py-6 rounded-2xl border border-red-200 transition-all duration-500 shadow-lg shadow-red-100 hover:shadow-[#ee4444]/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#ee4444]/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative">
            <div className="w-12 h-12 bg-[#ee4444] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#ee4444]/25">
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
                className="h-6 w-6 text-white"
              >
                <circle cx={12} cy={8} r={6} />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="font-bold text-sm mb-1">Quality guaranteed</div>
            <div className="text-xs">We ensure premium quality</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductBottom;
