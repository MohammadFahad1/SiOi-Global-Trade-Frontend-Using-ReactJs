import React from "react";
import { NavLink } from "react-router";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <header>
      {/* Search Section Starts */}
      <section className="flex px-8 py-6 justify-between items-center bg-[#111828] text-white font-bold text-xl">
        <NavLink to="/">
          {/* <img src="logo.png" alt="SiOi Global Trade Logo" className="h-15" /> */}
          <img
            src="sioi_logo.png"
            alt="SiOi Global Trade Logo"
            className="h-15"
          />
        </NavLink>
        <label className="input lg:w-[45%] hidden md:flex bg-white text-black rounded-full cursor-pointer hover:outline-2 hover:outline-blue-500">
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
          <input type="search" requiblue placeholder="Search Dorin Products" />
        </label>

        {/* Contact Info */}
        <div className="hidden md:block">
          <div className="flex items-center gap-1 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>Call Us (10.00am-8.00pm)</p>
          </div>
          <div className="flex items-center gap-1 text-2xl font-medium text-blue-600">
            <svg
              fill="currentColor"
              height="18px"
              width="18px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.001 512.001"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M498.816,371.03c-24.32-24.32-77.278-46.976-115.618-59.75c-54.741-18.244-36.497,72.994-72.994,72.994
			c-18.244,0-63.863-36.497-104.926-77.551c-41.054-41.062-77.551-86.682-77.551-104.926c0-36.497,91.238-18.253,72.994-72.994
			c-12.783-38.349-35.43-91.298-59.759-115.618C130.56,2.783,119.86-2.389,109.483,1.067C54.742,19.32,0,74.062,0,110.559
			c0,72.986,18.244,164.224,127.735,273.715c109.483,109.474,200.721,127.727,273.707,127.727
			c36.497,0,91.238-54.741,109.483-109.491C514.381,392.142,509.219,381.432,498.816,371.03z M401.451,486.196
			c-62.993,0-148.949-13.662-255.471-120.175C39.467,259.508,25.805,173.543,25.805,110.55c0-20.267,41.993-67.644,90.24-84.463
			c1.118,0.589,3.354,2.022,6.673,5.333c16.717,16.717,37.726,58.138,53.521,105.54c0.725,2.185,0.973,3.618,1.05,4.429
			c-3.635,2.918-14.874,6.46-21.768,8.636c-20.045,6.315-53.598,16.887-53.598,51.763c0,31.454,46.285,84.343,85.112,123.17
			c38.827,38.827,91.716,85.111,123.17,85.111c34.884,0,45.449-33.553,51.763-53.598c2.176-6.903,5.709-18.133,8.636-21.768
			c0.811,0.077,2.244,0.324,4.429,1.05c47.394,15.804,88.823,36.813,105.532,53.521c3.319,3.311,4.745,5.547,5.333,6.673
			C469.095,444.203,421.709,486.196,401.451,486.196z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,102.401v25.6c70.69,0,128,57.31,128,128h25.6C409.6,171.307,340.694,102.401,256,102.401z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,51.201v25.6c98.97,0,179.2,80.23,179.2,179.2h25.6C460.8,143.071,368.931,51.201,256,51.201z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,0.001v25.6c127.249,0,230.4,103.151,230.4,230.4H512C512,114.842,397.159,0.001,256,0.001z" />
                </g>
              </g>
            </svg>
            <h3>01905400666</h3>
          </div>
        </div>
        {/* Contact Info Ends */}

        <ul className="menu menu-horizontal bg-slate-950 rounded-box items-center text-white">
          <li>
            <a className="tooltip" data-tip="Favourite Product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="tooltip btn btn-soft btn-info text-blue-600 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 ml-2 hidden md:flex"
              data-tip="Login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>{" "}
              Login
            </a>
          </li>
        </ul>
      </section>
      {/* Search Section Ends */}
      <nav>
        <div className="navbar bg-blue-600 shadow-sm justify-between uppercase font-semibold text-xl px-10 text-white">
          <div className="lg:hidden dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn btn-dash btn-info bg-white rounded-xl font-bold hover:text-blue-600 hover:transform hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              Track Order
            </a>
          </div>
        </div>
      </nav>
      <ScrollToTopButton />
    </header>
  );
};

export default Navbar;
