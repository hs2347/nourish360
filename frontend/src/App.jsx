import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Join from './components/Home/Join';
import AboutUs from './components/Home/AboutUs';
import Vision from './components/Home/Vision';
function App() {

   return (
    <>
     <Navbar/>
     <Join/>
     <AboutUs/>
     <Vision/>
    </>
  );
}

export default App
