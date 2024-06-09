import React from 'react';
import { Link } from 'react-router-dom';

import donateUsImage from '../../assets/donateUs.png';
const DonateButton = () => {
    
  
    return (
      <div 
        className="fixed bottom-8 left-4 z-50 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" >
         <Link to="/donate">
        <img src={donateUsImage} alt="Donate" className="w-36 md:w-48" />
        </Link>
       
      </div>
    );
  };
  
  export default DonateButton;