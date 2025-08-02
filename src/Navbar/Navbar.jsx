import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;