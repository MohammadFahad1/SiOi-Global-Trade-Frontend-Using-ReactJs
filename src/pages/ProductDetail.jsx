import React, { useState } from "react";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import AddToCardAndBuyNowBtn from "../components/ProductDetails/AddToCardAndBuyNowBtn";
import ProductQuantity from "../components/ProductDetails/ProductQuantity";
import StockStatus from "../components/ProductDetails/StockStatus";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 40,
    name: "Fantasy Novel",
    description: "High-quality fantasy novel for everyday use.",
    images: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dqbvevj3i/image/upload/v1766337668/bzhttguahnbvsqzhjime.jpg",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dqbvevj3i/image/upload/v1766337668/bzhttguahnbvsqzhjime.jpg",
      },
    ],
    price: 347.72,
    category: {
      id: 4,
      name: "Brakes",
      description: "Break Pads from different international and local brands",
      image:
        "https://res.cloudinary.com/dqbvevj3i/image/upload/v1769752275/za0kjgnvzkzhspcxyl9f.webp",
    },
    brand: "BMW",
    stock: 101,
    category_info:
      "https://sioi-global-trade-backend-using-drf.vercel.app/api/v1/categories/4/",
    price_with_tax: 382.49,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 md:p-6">
      <div>
        <div className="space-y-4 ">
          <div className="relative aspect-square w-full bg-gray-100 rounded-2xl overflow-hidden group">
            {/* Product image gallery */}
            <ProductImageGallery
              images={product.images}
              productName={product.name}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
              <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="View fullscreen"
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
                    className="h-4 w-4 md:h-5 md:w-5 text-gray-700"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} x2="16.65" y1={21} y2="16.65" />
                    <line x1={11} x2={11} y1={8} y2={14} />
                    <line x1={8} x2={14} y1={11} y2={11} />
                  </svg>
                </button>
                <button
                  className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="Share image"
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
                    className="h-4 w-4 md:h-5 md:w-5 text-gray-700"
                  >
                    <circle cx={18} cy={5} r={3} />
                    <circle cx={6} cy={12} r={3} />
                    <circle cx={18} cy={19} r={3} />
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </button>
                <button
                  className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="Download image"
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
                    className="h-4 w-4 md:h-5 md:w-5 text-gray-700"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} x2={12} y1={15} y2={3} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-3" style={{ opacity: 1, transform: "none" }}>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-700 border-2 border-blue-500/40 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-500/30 transition-all duration-300">
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
                className="h-3.5 w-3.5 mr-1.5"
              >
                <circle cx={12} cy={8} r={6} />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              {product.brand}
            </div>
            {/* Product Stock Status */}
            <StockStatus stock={product.stock} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-600 rounded-full" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 inter-font">
                ৳{(quantity * product.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div
          className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100 hover:border-blue-300/50 overflow-hidden"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="bg-linear-to-r from-blue-500 to-blue-600 px-4 py-2.5 relative">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
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
                  className="h-3.5 w-3.5 text-white"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </div>
              <h3 className="font-bold text-sm text-white">
                Product Specifications
              </h3>
            </div>
          </div>
          <div className="p-3 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
              <div className="bg-linear-to-br from-gray-50 to-gray-100/50 hover:from-blue-50/50 hover:to-blue-100/30 rounded-lg p-2.5 border border-gray-200/50 hover:border-blue-300/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Product ID#
                  </span>
                </div>
                <div className="text-xs font-bold text-gray-900 truncate font-mono ml-7">
                  {product.id}
                </div>
              </div>
              <div className="bg-linear-to-br from-gray-50 to-gray-100/50 hover:from-blue-50/50 hover:to-blue-100/30 rounded-lg p-2.5 border border-gray-200/50 hover:border-blue-300/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <path d="M16.5 9.4 7.55 4.24" />
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1={12} x2={12} y1={22} y2={12} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Brand
                  </span>
                </div>
                <div className="text-xs font-bold text-gray-900 truncate ml-7">
                  {product.brand}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div
          className="bg-linear-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>
        <div
          className="lg:sticky lg:top-4 group relative bg-linear-to-br from-white via-gray-50 to-white rounded-2xl p-4 sm:p-5 space-y-3 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          {/* Product Quantity and Total Price */}
          <ProductQuantity
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className="relative z-10 space-y-2">
            {/* Add to Card and Buy Now Button */}
            <AddToCardAndBuyNowBtn />
            <div className="grid grid-cols-2 gap-2">
              <button
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 border-2 rounded-xl transition-all duration-300 font-medium border-gray-300 text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                aria-label="Add to wishlist"
                tabIndex={0}
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
                  className="h-4 w-4 transition-all duration-300 "
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span className="text-xs font-bold hidden sm:inline">
                  Wishlist
                </span>
              </button>
              <button
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 border-2 border-gray-300 text-gray-600 rounded-xl hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-medium"
                aria-label="Share product"
                tabIndex={0}
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
                  className="h-4 w-4"
                >
                  <circle cx={18} cy={5} r={3} />
                  <circle cx={6} cy={12} r={3} />
                  <circle cx={18} cy={19} r={3} />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
                <span className="text-xs font-bold hidden sm:inline">
                  Share
                </span>
              </button>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
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
                  <path d="M10 17h4V5H2v12h3" />
                  <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                  <path d="M14 17h1" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-tight">
                  Fast Ship
                </div>
                <div className="text-xs text-gray-600">24-48 Hours</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-tight">
                  Warranty
                </div>
                <div className="text-xs text-gray-600" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
