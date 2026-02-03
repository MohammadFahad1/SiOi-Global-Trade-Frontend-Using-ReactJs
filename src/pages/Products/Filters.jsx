import React from "react";

const Filters = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  brands,
  selectedBrand,
  handleBrandChange,
}) => {
  return (
    <div className="sticky top-6">
      {/* Heading starts */}
      <div className="bg-linear-to-br from-slate-800 via-blue-900 to-slate-900 text-white p-6 rounded-t-2xl shadow-xl border border-blue-800/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <div className="bg-white/20 p-2 rounded-xl mr-3">
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
                className="w-5 h-5"
              >
                <line x1={21} x2={14} y1={4} y2={4} />
                <line x1={10} x2={3} y1={4} y2={4} />
                <line x1={21} x2={12} y1={12} y2={12} />
                <line x1={8} x2={3} y1={12} y2={12} />
                <line x1={21} x2={16} y1={20} y2={20} />
                <line x1={12} x2={3} y1={20} y2={20} />
                <line x1={14} x2={14} y1={2} y2={6} />
                <line x1={8} x2={8} y1={10} y2={14} />
                <line x1={16} x2={16} y1={18} y2={22} />
              </svg>
            </div>
            Dynamic Filters
          </h2>
        </div>
        <p className="text-slate-200 text-sm leading-relaxed">
          Dynamic product filtering system
        </p>
      </div>
      {/* Heading Ends */}

      {/* Different Filter Parameters wil go here */}
      <div className="bg-linear-to-b from-white to-gray-50/50 border-x border-b border-gray-200/60 rounded-b-2xl shadow-xl backdrop-blur-sm max-h-[80vh] overflow-y-auto">
        <div className="p-2 md:p-3 lg:p-4 space-y-8">
          {/* Price range filter section starts */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-3 bg-linear-to-r from-green-50 to-emerald-50 border-b border-green-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <h3 className="text-sm font-bold text-gray-900">Price Range</h3>
              </div>
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
                className="w-4 h-4 text-gray-600 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div
              className="overflow-hidden"
              style={{ height: "auto", opacity: 1 }}
            >
              <div className="p-3 flex items-center gap-2 justify-between text-center text-sm text-gray-600 inter-font">
                <input
                  type="text"
                  min="0"
                  max={100000}
                  value={priceRange[0]}
                  onChange={(e) =>
                    parseInt(e.target.value) < priceRange[1] &&
                    handlePriceChange(0, parseInt(e.target.value))
                  }
                  name="from"
                  id="from"
                  className="border rounded w-1/3 px-2 py-1"
                  placeholder="From"
                />
                <input
                  type="range"
                  name="from-range"
                  disabled={true}
                  min={0}
                  max={100000}
                  step={100}
                  value={priceRange[0]}
                  className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  onChange={(e) =>
                    parseInt(e.target.value) < priceRange[1] &&
                    handlePriceChange(0, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="p-3 flex items-center gap-2 justify-between text-center text-sm text-gray-600 inter-font">
                <input
                  type="text"
                  min={0}
                  max={100000}
                  value={priceRange[1]}
                  onChange={(e) =>
                    parseInt(e.target.value) > priceRange[0] &&
                    handlePriceChange(1, parseInt(e.target.value))
                  }
                  name="to"
                  id="to"
                  className="border rounded w-1/3 px-2 py-1"
                  placeholder="to"
                />
                <input
                  type="range"
                  name="to-range"
                  disabled={true}
                  min={0}
                  max={100000}
                  step={100}
                  value={priceRange[1]}
                  className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  onChange={(e) =>
                    parseInt(e.target.value) > priceRange[0] &&
                    handlePriceChange(1, parseInt(e.target.value))
                  }
                />
              </div>

              <div className="px-3"></div>
              <div className="p-3 text-center text-xs text-gray-600 inter-font">
                ৳{priceRange[0]} - ৳{priceRange[1]}
              </div>
            </div>
          </div>
          {/* Price range filter section ends */}

          <div className="relative">
            {/* Brand Filter Section Starts */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-linear-to-r from-blue-50 to-blue-50 border-b border-blue-200">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  <h3 className="text-sm font-bold text-gray-900">Brand</h3>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-3 space-y-2">
                  <label
                    className="flex items-center justify-between p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                    tabIndex={0}
                    onChange={() => handleBrandChange("")}
                  >
                    <div className="flex items-center flex-1">
                      <input
                        type="radio"
                        name="brands"
                        value=""
                        checked={selectedBrand == ""}
                        className="radio radio-xs bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600 mr-1"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                        All Brands
                      </span>
                    </div>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                      {/* {category.product_count} */}
                    </span>
                  </label>
                  {brands.map((brand) => (
                    <label
                      className="flex items-center justify-between p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                      tabIndex={0}
                      key={brand.key}
                      onChange={() => handleBrandChange(brand.id)}
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="radio"
                          name="brands"
                          value={brand.id}
                          checked={selectedBrand == brand.id}
                          className="radio radio-xs bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600 mr-1"
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                          {brand.name}
                        </span>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                        {brand.product_count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Brand Filter Section Ends */}

            {/* Category Filter Section Starts */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mt-5">
              <div className="flex items-center justify-between p-3 bg-linear-to-r from-blue-50 to-blue-50 border-b border-blue-200">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Product Category
                  </h3>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-3 space-y-2">
                  <label
                    className="flex items-center justify-between p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                    tabIndex={0}
                    onChange={() => handleCategoryChange("")}
                  >
                    <div className="flex items-center flex-1">
                      <input
                        type="radio"
                        name="categories"
                        value=""
                        checked={selectedCategory == ""}
                        className="radio radio-xs bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600 mr-1"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                        All Categories
                      </span>
                    </div>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                      {/* {category.product_count} */}
                    </span>
                  </label>
                  {categories.map((category) => (
                    <label
                      className="flex items-center justify-between p-2 rounded-xl border-2 cursor-pointer transition-all duration-200 group bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
                      tabIndex={0}
                      key={category.key}
                      onChange={() => handleCategoryChange(category.id)}
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="radio"
                          name="categories"
                          value={category.id}
                          checked={selectedCategory == category.id}
                          className="radio radio-xs bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600 mr-1"
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                        {category.product_count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Category Filter Section Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
