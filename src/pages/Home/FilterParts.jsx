import React from "react";
import { NavLink } from "react-router";

const FilterParts = () => {
  const partTypes = [
    {
      id: 1,
      title: "Body Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 2,
      title: "Engine Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 3,
      title: "Transmission Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 4,
      title: "Brake Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 5,
      title: "Suspension Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 6,
      title: "Steering Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 7,
      title: "Electrical Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 8,
      title: "Interior Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 9,
      title: "Exterior Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 10,
      title: "Lighting Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 11,
      title: "Mirrors & Glass Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 12,
      title: "Wheels & Tire Parts",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];
  return (
    <section className="px-10 pb-10">
      {/* Section Info Starts */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex gap-2 items-center px-6 py-3 rounded-full bg-blue-100 uppercase text-md font-semibold text-blue-600 border border-blue-600 my-8 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <h4>Auto Parts</h4>
        </div>
        <h4
          className="font-bold text-2xl md:text-4xl lg:text-5xl text-center"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          Quality Parts That
        </h4>
        <h4
          className="font-bold text-2xl md:text-4xl lg:text-5xl text-blue-600 my-2 text-center"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          Deliver Performance
        </h4>
        <span
          className="block w-25 h-0.75 bg-blue-600 my-2"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="50"
        ></span>
        <p
          className="text-gray-700 text-lg max-w-175 text-center mb-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          Explore our comprehensive range of authentic Japanese automotive parts
          and accessories, organized by category for easy shopping.
        </p>
      </div>
      {/* Section Info Ends */}

      {/* Filter Cards Starts */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {partTypes?.map((part) => (
          <NavLink
            to="/"
            key={part.id}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="50"
            className="bg-white shadow-sm hover:bg-blue-100 duration-300 rounded-xl hover:shadow-sm hover:shadow-blue-600 hover:transform hover:scale-110 transition-all relative top-0 left-0 group"
          >
            <div className="card">
              <figure className="p-0">
                <img
                  src={part.image}
                  alt={part.title}
                  className="rounded-t-xl w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title mb-5">{part.title}</h2>
              </div>
            </div>
            <div className="p-3 bg-blue-600 w-12 h-12 rounded-full  text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex group-hover:items-center group-hover:justify-center">
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </NavLink>
        ))}
      </div>
      {/* Filter Cards Ends */}
    </section>
  );
};

export default FilterParts;
