import React from 'react';
<<<<<<< HEAD
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> 0f9990975651182f6f6d194ba8f942e22560b550
import Navbar from './components/Home/Navbar';
import Join from './components/Home/Join';
import AboutUs from './components/Home/AboutUs';
import Vision from './components/Home/Vision';
<<<<<<< HEAD
import Donate from './components/Donate/Donate';
import DonateButton from './components/Donate/DonateButton';
//import PaymentSuccess from "./PaymentSuccess";
function Home() {
  return (
    <>
      <Navbar />
      <Join />
      <AboutUs />
      <Vision />
      <DonateButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        
      </Routes>
    </Router>
  );
}

export default App
=======
import Events from './components/Events';
import AddEvent from './components/AddEvent'; 
import { Auth0Provider } from '@auth0/auth0-react';
import Organisations from './components/Organisations';
import AddOrganisation from './components/AddOrganisation';
import Hero from './components/Hero';
import MapComponent from './components/Map';

function App() {
  return (
    <Auth0Provider
      domain="dev-wx0wzhodkgnv7da8.us.auth0.com"
      clientId="ZKi2jjNqTOLitVw0zK1hEZ8FtO4soPty"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero/><Join /><AboutUs /><Vision /><Events /><Organisations /></>} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/add-organisation" element={<AddOrganisation />} />
          <Route path="/maps" element={<MapComponent />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
>>>>>>> 0f9990975651182f6f6d194ba8f942e22560b550
