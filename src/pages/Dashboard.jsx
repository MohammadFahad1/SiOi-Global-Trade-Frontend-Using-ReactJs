import { useState } from "react";
import {
  Squares2X2Icon,
  CubeIcon,
  RectangleStackIcon,
  TagIcon,
  ShoppingBagIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Squares2X2Icon className="w-5 h-5" /> },
    { name: "Products", icon: <CubeIcon className="w-5 h-5" /> },
    { name: "Categories", icon: <RectangleStackIcon className="w-5 h-5" /> },
    { name: "Brands", icon: <TagIcon className="w-5 h-5" /> },
    { name: "Orders", icon: <ShoppingBagIcon className="w-5 h-5" /> },
    { name: "Reviews", icon: <StarIcon className="w-5 h-5" /> },
    { name: "Users", icon: <UsersIcon className="w-5 h-5" /> },
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
      {/* Sidebar */}
      <aside className="w-72 bg-blue-100 shadow-xl hidden md:flex flex-col">
        <div className="p-5 text-2xl font-bold border-b flex items-center gap-2">
          🛒 <span>Dashboard</span>
        </div>
        <ul className="menu p-4 gap-1 text-blue">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-3 rounded-xl transition ${
                  active === item.name
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-200"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Drawer */}
      <div className="md:hidden drawer">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar bg-blue-100 shadow">
            <div className="flex-none">
              <label
                htmlFor="admin-drawer"
                className="btn btn-square btn-ghost"
              >
                ☰
              </label>
            </div>
            <div className="flex-1 px-2 font-bold">🛒 Dashboard</div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="admin-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-blue-100 gap-1 min-h-screen">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 rounded-xl transition ${
                    active === item.name
                      ? "bg-primary text-primary-content"
                      : "hover:bg-blue-200"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{active}</h1>
          <button className="btn btn-info bg-blue-600 text-white btn-sm rounded-full">
            + Add New
          </button>
        </div>

        {active === "Dashboard" && (
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

        {active !== "Dashboard" && (
          <div className="card bg-blue-100 shadow-lg">
            <div className="card-body">
              <p className="text-gray-500">
                Manage <span className="font-semibold">{active}</span> here.
              </p>
            </div>
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
