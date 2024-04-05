import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link className="navbar-link" to="about" smooth={true} duration={800}>About</Link>
      <Link className="navbar-link" to="services" smooth={true} duration={800}>Services</Link>
      <Link className="navbar-link" to="location" smooth={true} duration={800}>Location</Link>
    </nav>
  );
};

export default Navbar;