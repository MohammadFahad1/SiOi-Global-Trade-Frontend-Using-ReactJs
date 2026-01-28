import React, { useState } from "react";
import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <div className="group card bg-white text-black hover:border border-blue-300 rounded-xl shadow-sm hover:shadow-2xl hover:transform hover:scale-105 shadow-blue-200 transition-all duration-300">
      {/* content */}
      <figure className="relative top-0 left-0">
        <img
          src={
            product?.images.length > 0
              ? product?.images[0]?.image
              : "product_default.jpg"
          }
          alt={product?.name}
        />
        <div className="absolute top-2 left-0 flex justify-between w-full px-2 font-semibold  uppercase">
          <div className="badge badge-success text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-3 w-3 sm:h-4 sm:w-4"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
          <div className="badge badge-error text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-3 w-3 sm:h-4 sm:w-4"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            -40%
          </div>
        </div>
        <div className="absolute bottom-2 left-0 flex justify-start gap-2 w-full px-2">
          <button className="hidden group-hover:block badge badge-neutral badge-outline border-0 shadow-xl font-semibold bg-gray-100 hover:bg-blue-100 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-9 w-9 p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button className="hidden group-hover:block badge badge-neutral badge-outline border-0 shadow-xl font-semibold bg-gray-100 hover:bg-blue-100 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-9 w-9 p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </figure>
      <div className="card-body pt-3">
        <div className="flex justify-end items-center gap-2">
          <div className="badge badge-neutral badge-outline font-semibold bg-gray-100 hover:shadow-xl transition-shadow duration-300">
            {product.brand ? product.brand : "HITACHI"}
          </div>
        </div>
        <NavLink to="/">
          <h2 className="card-title transition-colors duration-300 group-hover:text-blue-600">
            {product?.name ? product.name : "PIAA LED Bulb 6000K LEH120E H4"}
          </h2>
        </NavLink>
        <h3 className="text-xl font-bold text-blue-600 inter-font">
          ৳{product?.price && product.price.toFixed(2)}
        </h3>
        {/* Product Quantity Starts */}
        <div className="bg-gray-100 p-2 rounded-2xl flex justify-center items-center gap-2 font-semibold text-md">
          <h5>Qty:</h5>
          <button
            className="bg-gray-200 border rounded-sm w-8 h-8 p-2 hover:shadow-md cursor-pointer"
            onClick={() =>
              productQuantity > 1
                ? setProductQuantity(productQuantity - 1)
                : productQuantity
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </button>
          <span className="px-3">{productQuantity}</span>
          <button
            className="bg-gray-200 border rounded-sm w-8 h-8 p-2 hover:shadow-md cursor-pointer"
            onClick={() => setProductQuantity(productQuantity + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        {/* Product Quantity Ends */}
        <div className="card-actions flex flex-row flex-nowrap justify-between items-center gap-2">
          <button className="btn btn-neutral bg-black font-bold text-white px-5 text-center w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Add
          </button>
          <button className="btn btn-info bg-blue-600 font-bold text-white px-5 text-center w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
