import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import event from '../assets/event.jpg';

const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick} style={{ right: '10px', zIndex: 1 }}>›</div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick} style={{ left: '10px', zIndex: 1 }}>‹</div>
  );

const Events = () => {
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://nourish-360.vercel.app/api/events/event");
        setUsers(response.data.events);
        // console.log(response);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch events.');
      }
    };

    fetchUsers();
  }, []);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: slidesToShow,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
  }, [slidesToShow]);
  function getSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      return 2;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    function handleResize() {
      const newSlidesToShow = getSlidesToShow();
      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slidesToShow]);

  return (
    <>
    <div className='w-[95vw]  font-[Archivo-Bold, Helvetica] mx-auto text-black  bg-gray-100 overflow-hidden mb-8 pb-6'>
        <h1 className="text-6xl md:text-7xl text-black  pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold">UPCOMING EVENTS</h1>
    <Slider {...settings} className='w-[90vw] h-[fit-content] md:w-[70vw] md:h-[67vh] mx-auto'>
      {users.map((user, index) => (
        <div key={index} className=' w-[90vw] mt-[3vw]'>
          <div className='p-8 mx-auto md:w-[30vw] w-[70vw] h-[fit-content]  md:h-[25vw] bg-white relative border-2 rounded-md border-white flex flex-col justify-center items-left  shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] '>
            <h1 className='font-bold text-2xl'>ORAGNISER: {user.organiser}</h1>
            
            <h1 className='mb-4 border-b-2 pb-1' >Email Id: {user.email}</h1>
            <div className='text-[#f69841] font-semibold text-2xl  '>
             EVENT: {user.fullname}
            </div>
            <div className='text-gray-500 text-md md:text-md '>
            "{user.message}"
            </div>
            <div className='text-lg mx-auto mt-5 flex flex-wrap md:flex-row justify-center gap-6'>
            <a href={user.siteLink } className='border-[2px] rounded-md text-white bg-black px-2 py-1'>Site Link</a>
            <a href="" onClick={() => navigate('/maps')} className='border-[2px] rounded-md text-white bg-black px-2 py-1'>Location</a>
            <a href={user.siteLink } className='border-[2px] rounded-md text-white bg-black px-2 py-1'>Donate</a>
            </div>
            <div className='mt-[1vw]'></div>
          </div>
        </div>
      ))}
    </Slider>
    
   
  </div>
  <div className='m-auto flex flex-col md:flex-row items-center justify-between px-12'>
    <div className='flex flex-col items-center md:ml-36'>
  <h1 className="text-5xl text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold">HAVE AN EVENT COMING AHEAD?</h1>
      <button
        onClick={() => navigate('/add-event')} // Use navigate for redirection
        className='bg-black  text-center text-white md:mx-4 py-2 text-lg rounded md:w-[17vw] px-4 md:px-0 my-11 hover:opacity-80' 
      >
        Include your event!
      </button></div>
      <div>
        <img src={event} className='w-[100%] md:w-[60%] mx-auto' alt="" />
      </div>
      </div>
  </>
  );
};

export default Events;
//bg-[#9ed1e1] ==blue