import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AddOrganisation = () => {
  const [orgname, setOrgname] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [donatePage, setDonatePage] = useState("");
  const [siteLink, setSiteLink] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/organisations', {
                orgname,
                email,
                location,
                donatePage,
                siteLink,
            });

            if (data.success) {
                navigate('/');
            } else {
                setError(data.message || 'An unknown error occurred.');
            }
        } catch (err) {
            console.error('Error submitting organisation:', err);
            setError(err.response?.data?.message || 'Failed to add organisation.');
        }
    };

  return (
    <div className="mx-10 lg:mx-[30vw] lg:min-h-[80vh] mt-5 lg:mt-32 overflow-hidden">
      <h1 className="text-4xl font-semibold">Add Your Organisation</h1>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label htmlFor="orgname">Organisation Name</label>
          <input
            onChange={(e) => setOrgname(e.target.value)}
            value={orgname}
            type="text"
            id="orgname"
            placeholder="Organisation Name"
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
          <label htmlFor="location">Location</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            id="location"
            placeholder="Type your location here..."
            className="ml-3 p-2 border rounded-md w-96"
        />
        </div>

        <div>
          <label htmlFor="donatePage">Donate page link</label>
          <input
            onChange={(e) => setDonatePage(e.target.value)}
            value={donatePage}
            type="text"
            id="donatePage"
            placeholder="Enter your donate page link"
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
          Add Organisation
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

export default AddOrganisation;
