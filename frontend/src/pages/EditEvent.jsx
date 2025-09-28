import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const EditEvent = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [siteLink, setSiteLink] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const { data } = await api.get(`/events/${id}`);
                if (data.success) {
                    const { fullname, email, message, organiser, siteLink } = data.event;
                    setFullname(fullname);
                    setEmail(email);
                    setMessage(message);
                    setOrganiser(organiser);
                    setSiteLink(siteLink);
                }
            } catch (err) {
                setError('Failed to fetch event data.');
                console.error(err);
            }
        };
        fetchEvent();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.put(`/events/${id}`, {
                fullname,
                email,
                message,
                organiser,
                siteLink,
            });

            if (data.success) {
                navigate('/'); // Redirect to home on successful update
            } else {
                setError(data.message || 'An error occurred.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update event.');
            console.error('Error updating event:', err);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Edit Event</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" required className="w-full p-2 border rounded" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="w-full p-2 border rounded"></textarea>
                <input type="text" value={organiser} onChange={(e) => setOrganiser(e.target.value)} placeholder="Organiser" required className="w-full p-2 border rounded" />
                <input type="url" value={siteLink} onChange={(e) => setSiteLink(e.target.value)} placeholder="Website Link" required className="w-full p-2 border rounded" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
            </form>
        </div>
    );
};

export default EditEvent;