// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right">
        <div id="nav-part2">
          <h4><a href="#home">Home</a></h4>
          <h4><a href="#blog">Blog</a></h4>
          <h4><a href="#services">Login</a></h4>
          <h4><a href="#register">Register</a></h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

