import React from "react";
import { Link } from "react-router";

const CartItem = ({ items, handleUpdateQuantity }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 text-lg font-semibold">
        Your cart is empty
      </div>
    );
  }

  return (
    <>
      {items.length > 0 &&
        items.map((item) => (
          <div className="space-y-3" key={item.id}>
            <div
              className="group relative bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              style={{
                opacity: 1,
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <div className="relative p-3">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0 mx-auto sm:mx-0 group-hover:scale-105 transition-transform duration-500">
                    <img
                      alt="ELF Evolution 700 FT 10W40 4L Semi Synthetic"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      src={
                        item.product.images.length > 0
                          ? item.product.images[0].image
                          : "/product_default.jpg"
                      }
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 md:mb-4">
                      <div className="flex-1 sm:pr-4 mb-3 sm:mb-0">
                        <Link
                          className="font-bold text-base sm:text-lg md:text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight group-hover:text-blue-700 block"
                          to={`/products/${item.product.id}`}
                        >
                          {item.product.name}
                        </Link>
                        {/* Category and Brand can be placed here */}
                      </div>
                      <button
                        className="p-2 sm:p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110 mx-auto sm:mx-0"
                        aria-label="Remove item"
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
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1={10} x2={10} y1={11} y2={17} />
                          <line x1={14} x2={14} y1={11} y2={17} />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="mx-auto md:mx-0">
                          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider text-center md:text-left">
                            Quantity
                          </label>
                          <div className="flex items-center border-2 border-gray-300 rounded-xl bg-white w-fit mx-auto md:mx-0">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 md:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-l-xl"
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
                                className="h-3 w-3 md:h-4 md:w-4"
                              >
                                <path d="M5 12h14" />
                              </svg>
                            </button>
                            <input
                              min={1}
                              className="w-16 md:w-20 text-center border-0 focus:ring-0 font-bold text-gray-900 bg-transparent text-sm md:text-base"
                              type="number"
                              onChange={(e) =>
                                handleUpdateQuantity(item.id, e.target.value)
                              }
                              value={item.quantity}
                            />
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 md:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-r-xl"
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
                                className="h-3 w-3 md:h-4 md:w-4"
                              >
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                          ৳{item.subtotal}
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base md:text-lg">
                          ৳{item.product.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartItem;
