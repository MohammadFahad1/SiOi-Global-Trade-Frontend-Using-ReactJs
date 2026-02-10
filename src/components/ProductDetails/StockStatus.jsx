import React from "react";

const StockStatus = ({ stock }) => {
  return (
    <>
      {stock < 1 ? (
        <div className="inline-flex items-center bg-red-500/10 text-red-700 border border-red-500/30 px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
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
            className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
          <span className="hidden sm:inline">Out of Stock</span>
          <span className="sm:hidden">Out of Stock</span>
        </div>
      ) : (
        <div className="inline-flex items-center bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
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
            className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span className="hidden sm:inline">In Stock - {stock} Available</span>
          <span className="sm:hidden">In Stock ({stock})</span>
        </div>
      )}
    </>
  );
};

export default StockStatus;
