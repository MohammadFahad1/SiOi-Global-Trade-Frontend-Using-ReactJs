import React from "react";
import { NavLink, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const NavbarUserAvatarOrLoginBtn = () => {
  const { user, logoutUser, setErrorMsg } = useAuthContext();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    logoutUser();
    navigate("/login");
    setErrorMsg("");
  };
  return (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-blue-600 shadow-xl rounded-box z-1 mt-3 w-48 p-3"
          >
            <li>
              <NavLink to="/dashboard" className="justify-between py-3">
                Profile
                {/* <span className="badge">New</span> */}
              </NavLink>
            </li>
            <li>
              <a className="py-3">Settings</a>
            </li>
            <li>
              <button className="py-3" onClick={handleLogoutUser}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="tooltip btn btn-soft btn-info text-blue-600 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 ml-2 hidden md:flex"
          data-tip="Login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>{" "}
          Login
        </NavLink>
      )}
    </>
  );
};

export default NavbarUserAvatarOrLoginBtn;
