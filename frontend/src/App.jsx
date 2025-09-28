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
import Organisations from './components/Organisations';
import AddOrganisation from './components/AddOrganisation';
import Hero from './components/Hero';
import MapComponent from './components/Map';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EditEvent from './pages/EditEvent';
import EditOrganisation from './pages/EditOrganisations';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<><Hero/><Join /><AboutUs /><Events /><Organisations /><Vision /><Footer/></>} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/add-organisation" element={<AddOrganisation />} />
           <Route path="/edit-organisation/:id" element={<EditOrganisation />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
          <Route path="/maps" element={<MapComponent />} />
        </Routes>
      </Router>
    
  );
}

export default App;

