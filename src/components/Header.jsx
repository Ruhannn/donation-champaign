import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-2 px-6">
      <div className="flex-1">
        <img
          href="#"
          src="src\assets\Logo.png"
          width={200}
          alt="Website Logo"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  px-1 gap-12">
          <li>
            <NavLink exact to="/" activeClassName="active-link" className="bg-orange-800">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/donation" activeClassName="active-link">
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="active-link">
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
