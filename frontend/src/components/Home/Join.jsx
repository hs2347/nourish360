import React, { useEffect, useState } from 'react';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

const Join = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative slideshow-container px-8 h-2/3">
  
  <div className="mySlides fade" style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
    <img src={image1} alt="Slide 1" className="w-full h-full object-cover" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
    <img src={image2} alt="Slide 2" className="w-full h-full object-cover" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
    <img src={image3} alt="Slide 3" className="w-full h-full object-cover" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
    <img src={image4} alt="Slide 4" className="w-full h-full object-cover" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 4 ? 'block' : 'none' }}>
    <img src={image5} alt="Slide 5" className="w-full h-full object-cover" />
  </div>

 
  <div className="absolute bottom-0 left-0 mb-0 ml-7 pl-3">
        <h1 className="text-white text-9xl font-bold rounded">
          JOIN THE COMMUNITY
        </h1>
      </div>
     
</div>

  );
};

export default Join;

