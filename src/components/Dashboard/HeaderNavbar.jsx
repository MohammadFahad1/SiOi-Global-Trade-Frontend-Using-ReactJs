import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { NavLink, useNavigate } from "react-router";

const HeaderNavbar = () => {
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between mb-6 border-b-2 border-b-blue-600 pb-2">
      <NavLink to="/" className="text-2xl font-bold text-blue-600">
        <h1 className="text-2xl font-bold">Back to Home Page</h1>
      </NavLink>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full border border-blue-600">
            <img
              alt="Tailwind CSS Navbar component"
              src="/default_profile.png"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-blue-600 text-white shadow-xl rounded-box z-100 mt-3 w-48 p-3 text-md"
        >
          <li>
            <NavLink
              to="/dashboard/profile"
              className="justify-between py-3 hover:font-bold"
            >
              Profile
              {/* <span className="badge">New</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="justify-between py-3 hover:font-bold"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <a className="py-3 hover:font-bold">Settings</a>
          </li>
          <li>
            <button className="py-3 hover:font-bold" onClick={handleLogoutUser}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavbar;
