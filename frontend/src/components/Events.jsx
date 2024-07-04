import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        const response = await axios.get("http://localhost:5000/api/events");
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
    <div className='w-[95vw] font-[Archivo-Bold, Helvetica] mx-auto text-black max-[768px]:w-[74vw] max-[768px]:ml-[14vw] bg-[#9ed1e1]'>
        <h1 className="text-7xl text-black  pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">UPCOMING EVENTS</h1>
    <Slider {...settings} className='w-[70vw] mx-auto'>
      {users.map((user, index) => (
        <div key={index} className=' w-[100vw] h-[28vw] mt-[3vw] max-[768px]:h-[32vw] '>
          <div className='p-8 mx-auto w-[30vw] h-[25vw]  rounded-[1vw] bg-white relative border-2 border-white flex flex-col justify-center items-left max-[768px]:w-[22vw] max-[768px]:h-[32vw] '>
            <h1 className='text-bold text-2xl'>ORAGNISER: {user.organiser}</h1>
            
            <h1 className='mb-4' >Email Id: {user.email}</h1>
            <div className=' text-2xl max-[768px]:text-[1.3vw]'>
             EVENT: {user.fullname}
            </div>
            <div className='  text-lg max-[768px]:text-[1.3vw]'>
             Message : "{user.message}"
            </div>
            <div className='text-lg max-[768px]:text-[1.3vw] mx-auto mt-5'>
            <a href={user.siteLink } className='border-[2px] rounded-md text-white bg-black px-2 py-1'>Site Link</a>
            </div>
            <div className='mt-[1vw]'></div>
          </div>
        </div>
      ))}
    </Slider>
    
    <div className='flex flex-col '>
    <h1 className='text-center text-3xl'>Have an Event coming ahead?</h1>
      <button
        onClick={() => navigate('/add-event')} // Use navigate for redirection
        className='bg-black text-center text-white px-4 py-2 rounded w-[17vw] mx-auto my-11' 
      >
        Include your event!
      </button></div>
  </div>
  );
};

export default Events;
