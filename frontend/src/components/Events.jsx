import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../context/AuthContext';
import eventImg from '../assets/event.jpg';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { userInfo } = useAuth();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await api.get('/events');
                if (data.success) {
                    setEvents(data.events);
                }
            } catch (err) {
                console.error(err);
                setError('Failed to fetch events.');
            }
        };

        fetchEvents();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await api.delete(`/events/${id}`);
                setEvents(events.filter((event) => event._id !== id));
            } catch (error) {
                console.error('Failed to delete event', error);
                alert('Could not delete the event. You may not be the owner.');
            }
        }
    };

    return (
        <>
            <div className='w-[95vw] mt-16 font-[Archivo-Bold, Helvetica] mx-auto text-black bg-[#e3e3e174] pb-12 mb-8 overflow-x-hidden'>
                <h1 className="text-4xl md:text-7xl text-black pt-6 mb-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold">UPCOMING EVENTS</h1>
                <div className='w-[95%] md:w-[70vw] mx-auto'>
                    {events.map((event, index) => (
                        <div key={event._id} className='w-full p-4 bg-white shadow-md rounded-md mx-auto flex flex-col md:flex-row gap-4 mb-4 items-center'>
                            <div className='font-bold text-6xl my-auto border-r-2 pr-4'>{index + 1}</div>
                            <div className='flex-grow border-r-2 pr-8'>
                                <div><h1 className='font-bold text-2xl'>{event.organiser}</h1></div>
                                <div className='text-orange-500'><h1 className='text-lg'>{event.fullname}</h1></div>
                                <div><h1 className='text-md italic'>"{event.message}"</h1></div>
                            </div>
                            <div className='flex flex-wrap justify-center items-center gap-5'>
                                <div>
                                    <a href={event.siteLink} target="_blank" rel="noopener noreferrer">
                                        <button className='bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium hover:opacity-80'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                            Site
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <button onClick={() => navigate('/maps')} className='bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium hover:opacity-80'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Location
                                    </button>
                                </div>
                            </div>
                             {userInfo && userInfo._id === event.user && (
                                <div className='flex gap-2'>
                                     <button
                                        onClick={() =>{if (window.confirm('Are you sure you want to edit this event?'))
                                             navigate(`/edit-event/${event._id}`)}}
                                        className="bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium hover:opacity-80"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        className="bg-[#9ed1e1] px-4 py-2 rounded-full mx-auto flex gap-1 font-medium hover:opacity-80"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex md:mx-32 items-center mt-16 mb-8 flex-col md:flex-row'>
                <div className='flex flex-col w-full md:ml-32'>
                    <h1 className='text-center text-4xl font-bold px-4 md:px-0'>Have an event coming ahead?</h1>
                    <button
                        onClick={() => navigate('/add-event')}
                        className='bg-black text-center text-white px-4 py-2 rounded md:w-[17vw] mx-auto my-11 hover:opacity-80'>
                        Include your Event!
                    </button>
                </div>
                <div className='w-full'>
                    <img src={eventImg} className='w-[90%] md:w-[50%] mx-auto' alt="Events" />
                </div>
            </div>
        </>
    );
};

export default Events;