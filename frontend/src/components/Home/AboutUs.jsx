import React from 'react';
import aboutus from '../../assets/aboutus.jpg';
const AboutUs = () => {
  return (
    <>
    <div className='flex items-center flex-col sm:flex-row '>
    <div className="bg-[] text-black px-8 my-2 py-8 overflow-x-hidden flex items-center flex-col" >
      <div className='ml-0 md:ml-12'>
      <h1 className="text-7xl pt-6 font-bold mb-3 text-center hover:scale-105 transition-transform duration-300 ease-in-out">ABOUT US</h1>
      <h3 className='text-xl text-gray-500 text-center'>A community that believes in sharing more than a meal</h3>
      </div>
      <div className="text-3xl mb-6 text-justify">
        <p className='text-lg py-4 pl-0 md:pl-12'>At Nourish360, we're dedicated to transforming the fight against hunger with a powerful vision: zero hunger. 
        Our community-driven approach revolves around the core of our initiative – the Mobile Food Library.
         By connecting passionate volunteers with organizations and strategically optimizing resource distribution, we strive to create a world where no one goes to bed hungry.
          Our commitment extends beyond immediate relief; we are focused on building sustainable, empowering solutions that address the root causes of food insecurity.
           Through innovative programs and strategic partnerships, we work tirelessly to ensure that every individual gains access to meals.</p>
      </div>
    </div>
    <div className='px-12 my-2'><img src={aboutus} alt="" />

    </div>
    </div>
    <div className='flex flex-col justify-center mx-2 px-8 md:px-0 md:mx-72 mt-16 mb-16 bg-gray-100 rounded-md'>
      <div>
    <h1 className="text-4xl font-bold pt-6 text-center">Interested in making a meaningful impact in our community? </h1>
    <h1 className="text-2xl pt-6 text-center">Click the button below to explore personalized volunteer tasks.</h1></div>
  <div  className='mb-8 flex justify-center mt-8'>
    <a href="https://taskrecommendation-nsxsq9zcb4p782ieggq6cp.streamlit.app/" className=" bg-black text-white py-2 px-4 text-lg rounded transition-colors duration-300 hover:bg-gray-800">
      Click here!
    </a>
  </div></div>
  </>
  );
};

export default AboutUs;
//bg-[#ffba8f]--orange