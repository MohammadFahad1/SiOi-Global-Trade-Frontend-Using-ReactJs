import React from "react";
import {
  Squares2X2Icon,
  CubeIcon,
  RectangleStackIcon,
  TagIcon,
  ShoppingBagIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "../components/Dashboard/Sidebar";
import HeaderNavbar from "../components/Dashboard/HeaderNavbar";

export default function Dashboard() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <Squares2X2Icon className="w-5 h-5" />,
      path: "dashboard",
    },
    {
      name: "Products",
      icon: <CubeIcon className="w-5 h-5" />,
      path: "products",
    },
    {
      name: "Categories",
      icon: <RectangleStackIcon className="w-5 h-5" />,
      path: "categories",
    },
    { name: "Brands", icon: <TagIcon className="w-5 h-5" />, path: "brands" },
    {
      name: "Orders",
      icon: <ShoppingBagIcon className="w-5 h-5" />,
      path: "orders",
    },
    {
      name: "Reviews",
      icon: <StarIcon className="w-5 h-5" />,
      path: "reviews",
    },
    { name: "Users", icon: <UsersIcon className="w-5 h-5" />, path: "users" },
  ];

  const orders = [
    {
      id: "ORD-1001",
      customer: "John Doe",
      status: "Pending",
      date: "2026-02-05",
      amount: "$120.00",
    },
    {
      id: "ORD-1002",
      customer: "Sarah Ahmed",
      status: "Completed",
      date: "2026-02-04",
      amount: "$340.00",
    },
    {
      id: "ORD-1003",
      customer: "Rahim Uddin",
      status: "Cancelled",
      date: "2026-02-03",
      amount: "$75.00",
    },
    {
      id: "ORD-1004",
      customer: "Emily Watson",
      status: "Shipped",
      date: "2026-02-02",
      amount: "$210.00",
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "badge-success";
      case "Pending":
        return "badge-warning";
      case "Cancelled":
        return "badge-error";
      case "Shipped":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar and Mobile Drawer*/}
      <Sidebar menuItems={menuItems} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header navbar */}
        <HeaderNavbar />

        {window.location.pathname.endsWith("dashboard") && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Orders", "Products", "Users"].map((item, i) => (
              <div
                key={i}
                className="card bg-blue-100 shadow-lg hover:shadow-xl transition"
              >
                <div className="card-body">
                  <h2 className="text-sm text-gray-500">Total {item}</h2>
                  <p className="text-4xl font-bold">
                    {i === 0 ? 1245 : i === 1 ? 320 : 890}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table of Contents Starts */}
        <div className="overflow-x-auto mt-6">
          <table className="table w-full border border-blue-600">
            <thead className="text-black">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover">
                  <td className="font-medium">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>
                    <span className={`badge ${statusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td className="text-right font-semibold">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* End of Table of Contents */}
      </main>
    </div>
  );
}
