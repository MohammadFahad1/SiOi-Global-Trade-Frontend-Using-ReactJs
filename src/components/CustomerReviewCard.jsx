import React from "react";

const CustomerReviewCard = () => {
  return (
    <div style={{ maxWidth: "380px" }} role="group" aria-label="4 / 6">
      <article
        className="group relative bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-blue-300/50 h-full flex flex-col"
        style={{ transform: "none" }}
      >
        <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center rounded-xl transition-colors duration-300">
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
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <div className="px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border-emerald-500/30">
              SUSPENSION
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1">
              <div style={{ transform: "none" }}>
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
                  className="h-5 w-5 transition-all duration-300 text-blue-500 fill-blue-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div style={{ transform: "none" }}>
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
                  className="h-5 w-5 transition-all duration-300 text-blue-500 fill-blue-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div style={{ transform: "none" }}>
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
                  className="h-5 w-5 transition-all duration-300 text-blue-500 fill-blue-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div style={{ transform: "none" }}>
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
                  className="h-5 w-5 transition-all duration-300 text-blue-500 fill-blue-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div style={{ transform: "none" }}>
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
                  className="h-5 w-5 transition-all duration-300 text-blue-500 fill-blue-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="ml-2 text-sm font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                5.0
              </span>
            </div>
          </div>
          <blockquote className="text-gray-700 leading-relaxed mb-6 text-base group-hover:text-gray-900 transition-colors duration-300 grow">
            "Superior suspension quality with immediate performance improvement.
            Authentic Japanese engineering deliveblue with professional
            packaging."
          </blockquote>
          <div className="bg-gray-50 group-hover:bg-blue-50/50 rounded-lg p-4 mb-6 transition-colors duration-300 border border-gray-100 group-hover:border-blue-200">
            <div className="text-sm font-bold text-gray-900 mb-2 flex items-center">
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
                className="h-4 w-4 text-emerald-500 mr-2 shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Nissan March Suspension Kit
            </div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Vehicle:</span> 2017 Nissan March
            </div>
            <div className="text-sm text-blue-700 font-medium">
              <span className="text-gray-600">Part ID#:</span> JP-MAR-SK-004
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-200 group-hover:border-blue-300/50 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  R
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm leading-tight flex items-center">
                    Rashida Begum
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
                      className="h-4 w-4 text-emerald-500 ml-2 shrink-0"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">
                    Rajshahi, Bangladesh - Workshop Owner
                  </div>
                  <div className="text-xs text-gray-500 mt-1">2024-01-08</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 flex items-center bg-gray-100 group-hover:bg-blue-100 px-2 py-1 rounded-full transition-colors duration-300">
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
                  className="h-3 w-3 mr-1"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="font-medium">29</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </article>
    </div>
  );
};

export default CustomerReviewCard;
