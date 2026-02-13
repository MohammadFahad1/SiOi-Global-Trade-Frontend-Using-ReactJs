import React from "react";

const CartSummary = ({ localCart }) => {
  return (
    <div className="space-y-4">
      <div
        className="bg-white rounded-lg border border-gray-200 shadow-md sticky top-4 overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="bg-linear-to-r from-blue-500/5 to-blue-600/5 border-b border-gray-200 p-3">
          <h3 className="font-bold text-base text-gray-900 flex items-center">
            <div className="p-1.5 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg mr-2">
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
                className="h-4 w-4 text-white"
              >
                <rect width={16} height={20} x={4} y={2} rx={2} />
                <line x1={8} x2={16} y1={6} y2={6} />
                <line x1={16} x2={16} y1={14} y2={18} />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
            </div>
            Order Summary
          </h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between text-base md:text-lg text-gray-700">
              <span className="font-medium">
                Subtotal ({localCart.items.length} items)
              </span>
              <span className="font-bold text-lg md:text-xl">
                ৳{localCart.total_price.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-base md:text-lg text-gray-700">
              <span className="font-medium">Shipping</span>
              <span className="font-bold">
                <span className="text-green-600 font-bold flex items-center gap-1">
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
                    className="h-3 w-3 md:h-4 md:w-4"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                  120.00
                </span>
              </span>
            </div>
            <div className="flex justify-between text-base md:text-lg text-gray-700">
              <span className="font-medium">Tax</span>
              <span className="font-bold">৳0.00</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-4 md:pt-6">
              <div className="flex justify-between items-center">
                <span className="text-xl md:text-2xl font-bold text-gray-900">
                  Total
                </span>
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    ৳{(localCart.total_price + 120).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="group w-full mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-base md:text-md  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
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
              className="h-5 w-5 md:h-6 md:w-6"
            >
              <rect width={20} height={14} x={2} y={5} rx={2} />
              <line x1={2} x2={22} y1={10} y2={10} />
            </svg>
            <span>Checkout</span>
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
              className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
