import React, { useEffect, useState } from 'react';



const Join = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <div className=" relative slideshow-container px-8 h-2/3">
  
  <div className="mySlides fade" style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
          <img src="/image1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="mySlides fade" style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
          <img src="/image2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="mySlides fade" style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
          <img src="/image3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="mySlides fade" style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
          <img src="/image4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
        </div>
        <div className="mySlides fade" style={{ display: currentSlide === 4 ? 'block' : 'none' }}>
          <img src="/image5.jpg" alt="Slide 5" className="w-full h-full object-cover" />
        </div>

 
  <div className="absolute bottom-0 left-0 mb-0 ml-7 pl-3">
        <h1 className="text-white text-9xl font-bold rounded">
          JOIN THE COMMUNITY
        </h1>
      </div>
     
=======
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
>>>>>>> 0f9990975651182f6f6d194ba8f942e22560b550
</div>

  );
};

export default Join;

