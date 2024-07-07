import React from 'react';
import vision1 from '../../assets/vision1.png';
import vision2 from '../../assets/vision2.png';
import vision3 from '../../assets/vision3.png';

const Vision = () => {
  return (
    <div className="vision py-12 mx-8 overflow-hidden">
      <h1 className="text-7xl pt-6 mb-16 text-center font-bold hover:scale-105 transition-transform duration-300 ease-in-out">OUR VISION</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 w-[100%] md:w-[80%] mx-auto mb-12">
        <div className="vision-holder size-[30%] w-[80vw] md:w-[20vw] md:h-[20vw] border bg-white py-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img1 mx-auto size-3/5" src={vision1} alt="" />
          <h4 className="text-lg text-center mt-4">Zero hunger: <br/> A battle to conquer</h4>
        </div>
        <div className="vision-holder size-[30%] border  w-[80vw] md:w-[20vw] md:h-[20vw] bg-white py-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img2 mx-auto size-3/5" src={vision2} alt="" />
          <h4 className="text-lg text-center mt-4">Building a Powerful Community: United for Change</h4>
        </div>
        <div className="vision-holder size-[30%] border  w-[80vw] md:w-[20vw] md:h-[20vw] bg-white py-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img3 mx-auto size-3/5" src={vision3} alt="" />
          <h4 className="text-lg text-center mt-4">Raising Awareness: <br/> Educate, Inspire, Transform</h4>
        </div>
      </div>
    </div>
  );
};

export default Vision;

