import React from 'react';
import { Link } from 'react-scroll';
import BookNowButton from './BookNow';

const Navbar = () => {
  return (
    <nav id="navbar">
      <BookNowButton />
      <Link className="navbar-link" to="services" smooth={true} duration={800}>Services</Link>
      <Link className="navbar-link" to="location" smooth={true} duration={800}>Location</Link>
    </nav>
  );
};

export default Navbar;