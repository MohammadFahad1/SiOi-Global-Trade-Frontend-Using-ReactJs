import React, { useState } from "react";

const AddToCardAndBuyNowBtn = ({ stock }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
    }, 1500);
  };

  const buyNow = () => {
    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="flex-1">
        <div className="relative">
          <button
            className="relative w-full py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-sm sm:text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group/add-to-cart cursor-pointer"
            aria-label="Add to cart"
            tabIndex={0}
            disabled={isAdding || isBuying || isAdded || stock <= 0}
            onClick={addToCart}
          >
            {isAdded ? "Added to Cart" : isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="flex-1">
        <button
          className="relative w-full py-3 px-4 bg-linear-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold text-sm sm:text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group/buy cursor-pointer"
          tabIndex={0}
          aria-label="Buy now"
          disabled={isAdding || isBuying || isAdded || stock <= 0}
          onClick={buyNow}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/buy:translate-x-full transition-transform duration-1000" />
          <div className="relative flex items-center justify-center gap-2">
            <span>{isBuying ? "Buying..." : "Buy Now"}</span>
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
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddToCardAndBuyNowBtn;
