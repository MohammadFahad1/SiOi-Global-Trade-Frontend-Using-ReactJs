import React from "react";
import { NavLink } from "react-router";

const Sidebar = ({ menuItems }) => {
  return (
    <>
      <aside className="w-72 bg-blue-100 shadow-xl hidden md:flex flex-col">
        <div className="p-5 text-2xl font-bold border-b flex items-center gap-2">
          🛒 <span>Dashboard</span>
        </div>
        <ul className="menu p-4 gap-1 text-blue w-full">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={
                  item.path.toLowerCase() === "dashboard"
                    ? "/dashboard"
                    : `/dashboard/${item.path.toLowerCase()}`
                }
                className={`flex items-center gap-3 rounded-xl transition ${
                  window.location.pathname
                    .toLowerCase()
                    .endsWith(item.path.toLowerCase())
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-200"
                }`}
              >
                {item.icon}
                {item.name}
              </NavLink>
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
                <NavLink
                  to={
                    item.path.toLowerCase() === "dashboard"
                      ? "/dashboard"
                      : `/dashboard/${item.path.toLowerCase()}`
                  }
                  className={`flex items-center gap-3 rounded-xl transition ${
                    item.path.toLowerCase() ===
                    window.location.pathname.toLowerCase().split("/")[1]
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
