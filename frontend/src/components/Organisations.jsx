import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import orgImg from '../assets/organisation.jpg'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const Organisations = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("${BACKEND_URL}/api/organisations/org");
        setUsers(response.data.organisations);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch organisations.');
      }
    };

    fetchUsers();
  }, []);



  return (
    <>
    <div className='w-[95vw] mt-16 font-[Archivo-Bold, Helvetica] mx-auto text-black  bg-[#e3e3e174] pb-12 mb-8 overflow-x-hidden'>
        <h1 className="text-4xl md:text-7xl text-black  pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold">ORGANISATIONS</h1>
    <div className='w-[95%] md:w-[70vw] mx-auto'>
      {users.map((user, index) => (
        <div key={index} className='w-[100%] p-4 bg-white shadow-md rounded-md mx-auto flex gap-4 flex-wrap mb-2'>
          <div className='font-bold text-6xl my-auto border-r-2 pr-4'>{index+1}</div>
          <div className='ml-4 border-r-2 pr-8'>
            <div><h1 className='font-bold text-2xl'>{user.orgname}</h1></div>
            <div><h1 className='text-md'>{user.email}</h1></div>
            <div><h1 className='text-md'>Location : {user.location}</h1></div>
          </div>
         
          <div className='flex flex-wrap justify-center items-center gap-5'>
           <div> <a href={user.siteLink}><button className='bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium pr-5 hover:opacity-80'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
Site</button></a></div>
           <div><a href={user.donatePage}><button className='bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium pr-5 hover:opacity-80'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>Donate
</button></a></div>
           <div><button onClick={() => navigate('/maps')} className='bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium pr-5 hover:opacity-80'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>Location
</button></div>
          </div>
        </div>
      ))}
    </div>  
    
  </div>
  <div  className='flex md:mx-32 items-center mt-16 mb-8 flex-col md:flex-row'>
  <div className='flex flex-col w-[100%] md:ml-32'>
    <h1 className='text-center text-4xl font-bold px-4 md:px-0'>Be a part of this wonderful community and feed the needy!</h1>
      <button
        onClick={() => navigate('/add-organisation')} // Use navigate for redirection
        className='bg-black text-center text-white px-4 py-2 rounded md:w-[17vw] mx-auto my-11 hover:opacity-80'>
        Register as Organisation
      </button></div>
      <div className=''>
      <img src={orgImg} className='w-[90%] md:w-[50%] mx-auto' alt="" />
      </div>
      </div>
  </>
  );
};

export default Organisations;
