import React from "react";
import { NavLink } from "react-router";

const CategoryCard = ({ category }) => {
  return (
    <NavLink
      to="/"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="50"
      className="bg-white shadow-sm hover:bg-blue-100 duration-300 rounded-xl hover:shadow-sm hover:shadow-blue-600 hover:transform hover:scale-110 transition-all relative top-0 left-0 group"
    >
      <div className="card">
        <figure className="p-0">
          <img
            src={category.image}
            alt={category.name}
            className="rounded-t-xl h-30 w-full object-cover bg-amber-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-5">{category.name}</h2>
        </div>
      </div>
      <div className="p-3 bg-blue-600 w-12 h-12 rounded-full  text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex group-hover:items-center group-hover:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
