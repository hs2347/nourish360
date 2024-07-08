import React from 'react';

const Vision = () => {
  return (
<<<<<<< HEAD
    <div className="vision py-12 bg-orange-100 mx-8">
      <h1 className="text-7xl pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
        OUR VISION
      </h1>
      <div className="flex justify-center gap-8">
        <div className="vision-holder size-3/5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img1 mx-auto size-3/5" src="/vision1.png" alt="Zero hunger: A battle to conquer" />
          <h4 className="text-lg text-center mt-4">Zero hunger: <br/> A battle to conquer</h4>
        </div>
        <div className="vision-holder size-3/5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img2 mx-auto size-3/5" src="/vision2.png" alt="Building a Powerful Community: United for Change" />
          <h4 className="text-lg text-center mt-4">Building a Powerful Community: United for Change</h4>
        </div>
        <div className="vision-holder size-3/5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="img3 mx-auto size-3/5" src="/vision3.png" alt="Raising Awareness: Educate, Inspire, Transform" />
=======
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
>>>>>>> 0f9990975651182f6f6d194ba8f942e22560b550
          <h4 className="text-lg text-center mt-4">Raising Awareness: <br/> Educate, Inspire, Transform</h4>
        </div>
      </div>
    </div>
  );
};

export default Vision;




