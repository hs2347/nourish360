import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Join from './components/Home/Join';
import AboutUs from './components/Home/AboutUs';
import Vision from './components/Home/Vision';
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
