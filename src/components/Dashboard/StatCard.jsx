import React from "react";

const StatCard = ({ item, i }) => {
  return (
    <div className="card bg-blue-100 shadow-lg hover:shadow-xl transition">
      <div className="card-body">
        <h2 className="text-sm text-gray-500">Total {item}</h2>
        <p className="text-4xl font-bold">{i}</p>
      </div>
    </div>
  );
};

export default StatCard;
