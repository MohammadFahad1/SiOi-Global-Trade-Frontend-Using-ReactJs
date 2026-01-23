import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-[#111828] text-base-content p-10">
        <aside>
          <Link to="/">
            <img
              src="logo.png"
              className="h-12 hover:transform hover:scale-105 transition-transform duration-150"
            />
          </Link>
          <p>
            SiOi Global Trade Ltd.
            <br />
            Imports & Exports
          </p>
          <h4 className="font-bold text-xl">Contact</h4>
          <div className="flex items-center gap-1 text-md text-white">
            <svg
              fill="#bf1d1e"
              height="13px"
              width="13px"
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
          <div className="flex items-center gap-1 text-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#bf1d1e"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <h3>info@japanparts.com.bd</h3>
          </div>
          <div className="flex items-center gap-1 text-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#bf1d1e"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <h3>277 Tejgaon I/A, Dhaka -1208</h3>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="footer sm:footer-horizontal bg-[#111828] text-neutral-content items-center p-4 border-t border-gray-500">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Footer;
