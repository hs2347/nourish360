import React from 'react';

 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Home/Navbar';
import Join from './components/Home/Join';
import AboutUs from './components/Home/AboutUs';
import Vision from './components/Home/Vision';
import Donate from './components/Donate/Donate';
import DonateButton from './components/Donate/DonateButton';
import Events from './components/Events';
import AddEvent from './components/AddEvent'; 
import { Auth0Provider } from '@auth0/auth0-react';
import Organisations from './components/Organisations';
import AddOrganisation from './components/AddOrganisation';
import Hero from './components/Hero';
import MapComponent from './components/Map';
import Footer from './components/Footer';
//import PaymentSuccess from "./PaymentSuccess";
function App() {
  return (
    <Auth0Provider
    domain="dev-n2x6dhgek5x7hwum.us.auth0.com"
    clientId="ZXYHUfxj63vTy2oJmwDvMJIY6yMhkBBP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Router>
        <Navbar />
        <Routes>
           <Route path="/donate" element={<Donate />} />
          <Route path="/" element={<><Hero/><Join /><AboutUs /><Vision /><Events /><Organisations /><Footer/></>} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/add-organisation" element={<AddOrganisation />} />
          <Route path="/maps" element={<MapComponent />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;

