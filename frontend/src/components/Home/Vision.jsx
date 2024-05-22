import React from 'react';
import vision1 from '../../assets/vision1.png';
import vision2 from '../../assets/vision2.png';
import vision3 from '../../assets/vision3.png';

const Vision = () => {
  return (
    <div className="vision py-12 bg-orange-100 mx-8">
      <h1 className="text-7xl pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">OUR VISION</h1>
      <div className="flex justify-center gap-8">
        <div className="vision-holder size-3/5  bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img1 mx-auto size-3/5" src={vision1} alt="" />
          <h4 className="text-lg text-center mt-4">Zero hunger: <br/> A battle to conquer</h4>
        </div>
        <div className="vision-holder size-3/5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img2 mx-auto size-3/5" src={vision2} alt="" />
          <h4 className="text-lg text-center mt-4">Building a Powerful Community: United for Change</h4>
        </div>
        <div className="vision-holder size-3/5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img3 mx-auto size-3/5" src={vision3} alt="" />
          <h4 className="text-lg text-center mt-4">Raising Awareness: <br/> Educate, Inspire, Transform</h4>
        </div>
      </div>
    </div>
  );
};

export default Vision;

