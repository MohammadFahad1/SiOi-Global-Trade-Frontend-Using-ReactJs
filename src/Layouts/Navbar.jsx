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
        <label className="input lg:w-[55%] hidden md:flex">
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

        {/* Contact Info */}
        <div>
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
          <div className="flex items-center gap-1 text-2xl font-medium text-[#bf1d1e]">
            <svg
              fill="#bf1d1e"
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

        <ul className="menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <a className="tooltip" data-tip="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Stats">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
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
