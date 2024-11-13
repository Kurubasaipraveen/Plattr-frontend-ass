import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Movie Explorer</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;
