import React from "react";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";

export default function Dashboard() {
  return (
    <>
      {/* Stats Card Starts */}
      {window.location.pathname.endsWith("dashboard") && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Orders", "Products", "Users"].map((item, i) => (
            <StatCard
              key={i}
              item={item}
              i={i === 0 ? 1245 : i === 1 ? 320 : 890}
            />
          ))}
        </div>
      )}
      {/* Stats Card Ends */}

      {/* Content Starts */}
      <Order />
      {/* Content Ends */}
    </>
  );
}
