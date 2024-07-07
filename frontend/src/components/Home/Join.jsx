import React, { useEffect, useState } from 'react';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

const Join = () => {
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentSlide by 1
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container mt-4 md:mt-0 px-8 w-[98%] mx-auto overflow-x-hidden">
  {/* Slides */}
  <div className="mySlides fade" style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
    <img src={image1} alt="Slide 1" className="w-full h-[54vh] md:h-[80vh] object-cover" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
    <img src={image2} alt="Slide 2" className="w-full h-[54vh] md:h-[80vh] object-cover object-center" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
    <img src={image3} alt="Slide 3" className="w-full h-[54vh] md:h-[80vh] object-cover object-center" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
    <img src={image4} alt="Slide 4" className="w-full h-[54vh] md:h-[80vh] object-cover object-top" />
  </div>
  <div className="mySlides fade" style={{ display: currentSlide === 4 ? 'block' : 'none' }}>
    <img src={image5} alt="Slide 5" className="w-full h-[54vh] md:h-[80vh] object-cover object-center" />
  </div>

  {/* Caption */}
  {/* <div className="absolute bottom-0 left-0 mb-0 ml-7 pl-3">
        <h1 className="text-white text-9xl font-bold rounded">
          JOIN THE COMMUNITY
        </h1>
      </div> */}
</div>

  );
};

export default Join;

