import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AddEvent = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [siteLink, setSiteLink] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const { data } = await api.post('/events', {
                fullname,
                email,
                message,
                organiser,
                siteLink,
            });

       
 if (data.success) {
                navigate('/'); // Redirect to events page on success
            } else {
                setError(data.message || 'An unknown error occurred.');
            }
        } catch (err) {
            console.error('Error submitting event:', err);
            setError(err.response?.data?.message || 'Failed to add event.');
        }
  };

  return (
    <div className="mx-10 lg:mx-[30vw] lg:min-h-[80vh] mt-5 lg:mt-32 overflow-hidden">
      <h1 className="text-4xl font-semibold">Create New Event</h1>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Your Name"
            className="ml-3 p-2 border rounded-md w-96"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="youremail@example.com"
            className="ml-3 p-2 border rounded-md w-96"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
            className="h-32 ml-3 p-2 border rounded-md w-96"
          ></textarea>
        </div>

        <div>
          <label htmlFor="organiser">Organiser</label>
          <input
            onChange={(e) => setOrganiser(e.target.value)}
            value={organiser}
            type="text"
            id="organiser"
            placeholder="Event Organiser"
            className="ml-3 p-2 border rounded-md w-96"
          />
        </div>

        <div>
          <label htmlFor="siteLink">Site Link</label>
          <input
            onChange={(e) => setSiteLink(e.target.value)}
            value={siteLink}
            type="text"
            id="siteLink"
            placeholder="https://example.com"
            className="ml-3 p-2 border rounded-md w-96"
          />
        </div>

        <button className="bg-[#29b6f6] p-3 text-white font-bold" type="submit">
          Create Event
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${success ? "text-[#29b6f6]" : "text-red-600"} px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddEvent;
