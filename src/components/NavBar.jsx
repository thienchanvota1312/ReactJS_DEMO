import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie">
            Movie
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/series">
            Series
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/episode">
            Episode
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;