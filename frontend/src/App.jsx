import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Join from './components/Home/Join';
import AboutUs from './components/Home/AboutUs';
import Vision from './components/Home/Vision';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {

   return (
    <Auth0Provider
    domain="dev-wx0wzhodkgnv7da8.us.auth0.com"
    clientId="ZKi2jjNqTOLitVw0zK1hEZ8FtO4soPty"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <>
     <Navbar/>
     <Join/>
     <AboutUs/>
     <Vision/>
    </>
    </Auth0Provider>
  );
}

export default App
