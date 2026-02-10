import React from "react";

const ProductQuantity = ({ product, quantity, setQuantity }) => {
  return (
    <div className="relative z-10 grid grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
          Quantity
        </label>
        <div className="group flex items-center border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white hover:border-blue-500/50 transition-colors duration-300">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            className="p-2 sm:p-2 md:p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-l-lg sm:rounded-l-xl group-hover:text-blue-600 touch-manipulation"
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
              className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            min={1}
            max={product.stock}
            value={quantity}
            onChange={(e) =>
              setQuantity(
                e.target.value >= 1 && e.target.value <= product.stock
                  ? parseInt(e.target.value)
                  : quantity,
              )
            }
            className="w-14 sm:w-16 md:w-20 text-center border-0 focus:ring-0 font-bold text-gray-900 bg-transparent text-sm sm:text-base md:text-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
          />
          <button
            onClick={() =>
              setQuantity((prev) => (prev < product.stock ? prev + 1 : prev))
            }
            className="p-2 sm:p-2 md:p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-r-lg sm:rounded-r-xl group-hover:text-blue-600 touch-manipulation"
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
              className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
          Total Price
        </label>
        <div className="text-xl sm:text-2xl font-bold text-blue-600 leading-tight inter-font">
          ৳{(product.price * quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
