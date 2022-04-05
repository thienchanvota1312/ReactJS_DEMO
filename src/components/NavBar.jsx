import React from "react";
import { NavLink } from "react-router-dom";
import {HOME, MOVIE, SERIES, EPISODE} from '../constants/constan'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            {HOME}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie">
            {MOVIE}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/series">
            {SERIES}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/episode">
            {EPISODE}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;