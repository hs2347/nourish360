import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#9ed1e1] text-black px-8 mx-8">
      <h1 className="text-7xl pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">ABOUT US</h1>
      <div className=" text-center py-10 px-36 text-3xl mb-6">
        At Nourish360, we're dedicated to transforming the fight against hunger with a powerful vision: zero hunger. 
        Our community-driven approach revolves around the core of our initiative – the Mobile Food Library.
         By connecting passionate volunteers with organizations and strategically optimizing resource distribution, we strive to create a world where no one goes to bed hungry.
          Our commitment extends beyond immediate relief; we are focused on building sustainable, empowering solutions that address the root causes of food insecurity.
           Through innovative programs and strategic partnerships, we work tirelessly to ensure that every individual gains access to meals. Nourish360 is more than an organization; it's a movement fueled by compassion and shared determination. 
           Together, we weave a tapestry of change, where communities unite, volunteers empower, and organizations collaborate to make a lasting impact.
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">WANT TO KNOW, HOW TO CONTRIBUTE?</h2>
      </div>
      <div>
        <a href="https://taskrecommendation-nsxsq9zcb4p782ieggq6cp.streamlit.app/" className="inline-block bg-black text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-800">
          Click here!
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
