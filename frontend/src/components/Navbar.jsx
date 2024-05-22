// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <div id="nav-part2">
        <h4><a href="#home">Home</a></h4>
        <h4><a href="#about">About</a></h4>
        <h4><a href="#services">Services</a></h4>
        <h4><a href="#contact">Contact</a></h4>
      </div>
    </nav>
  );
};

export default Navbar;
