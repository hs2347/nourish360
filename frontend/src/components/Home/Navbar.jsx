// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Import your logo image
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect,logout } = useAuth0();
  console.log(user);
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right">
        {
        !isAuthenticated&&(
          <div id="nav-part2">
          <h4><a href="#home">Home</a></h4>
          <h4><a href="#blog">Blog</a></h4>
          <h4 onClick={() => loginWithRedirect()}><a href="#login">Login</a></h4>
          <h4 onClick={() => loginWithRedirect()}><a href="#signup">Sign up</a></h4>
        </div>
        )
        }
         {
        isAuthenticated&&(
          <div id="nav-part2">
          <h4><a href="#home">Home</a></h4>
          <h4><a href="#blog">Blog</a></h4>
          <h4 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><a href="#logout">Logout</a></h4>
          <><a href="#profile"><img src={user.picture} className='rounded-[50%] aspect-square w-16' alt="user profile" /></a></>
        </div>
        )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;

