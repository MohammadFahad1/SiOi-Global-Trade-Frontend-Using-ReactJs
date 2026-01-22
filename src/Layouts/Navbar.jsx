import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      {/* Search Section Starts */}
      <section className="flex px-8 py-6 justify-between items-center bg-[#111828] text-white font-bold text-xl">
        <NavLink to="/">
          <img src="" alt="Logo" />
        </NavLink>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </section>
      {/* Search Section Ends */}
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-600" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-green-600" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-green-600" : "")}
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
