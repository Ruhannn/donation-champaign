import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:p-12 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                style={({ isActive, isPending }) => {
                  return {
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          {" "}
          <img
            href="/"
            src="src\assets\Logo.png"
            width={150}
            alt="Website Logo"
          />
        </a>
      </div>

      <div className="navbar-end">
        {" "}
        <div className="hidden lg:flex">
          <ul className="flex gap-12 px-1">
            <li>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                style={({ isActive, isPending }) => {
                  return {
                    color: isPending ? "" : "black",
                    color: isActive ? "#FF444A" : "black",
                    borderBottom: isActive ? "2px solid #FF444A" : "",
                  };
                }}>
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
