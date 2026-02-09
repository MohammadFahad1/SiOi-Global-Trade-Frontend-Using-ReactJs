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
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";
import { Outlet } from "react-router";

const DashboardLayout = () => {
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
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar and Mobile Drawer*/}
      <Sidebar menuItems={menuItems} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header navbar */}
        <HeaderNavbar />

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
