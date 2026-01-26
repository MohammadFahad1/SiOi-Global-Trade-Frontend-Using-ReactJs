import React from "react";
import { NavLink } from "react-router";

const PartnerBrandCard = () => {
  return (
    <NavLink
      to=""
      className="block w-auto rounded-xl border-2 border-blue-100 bg-white hover:border-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 ease-in-out"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&q=80&w=1160"
        className="h-18 w-full rounded-tr-xl rounded-bl-xl object-cover"
      />
      <div className="font-bold text-center text-sm uppercase my-2">
        Company
      </div>
    </NavLink>
  );
};

export default PartnerBrandCard;
