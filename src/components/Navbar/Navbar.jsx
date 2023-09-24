import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-12">
      <div className="flex-1">
        <img
          href="#"
          src="src\assets\Logo.png"
          width={200}
          alt="Website Logo"
        />
      </div>
      <div className="flex-none">
        <ul className="flex px-3 gap-4 md:gap-8 lg:gap-12">
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
  );
};

export default Navbar;
