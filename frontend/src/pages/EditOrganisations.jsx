import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const EditOrganisation = () => {
    const [orgname, setOrgname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [donatePage, setDonatePage] = useState('');
    const [siteLink, setSiteLink] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Get the ID from the URL

    useEffect(() => {
        const fetchOrganisation = async () => {
            try {
                // This route needs to exist on the backend to get a single organisation
                const { data } = await api.get(`/organisations/${id}`);
                if (data.success) {
                    const { orgname, email, location, donatePage, siteLink } = data.organisation;
                    setOrgname(orgname);
                    setEmail(email);
                    setLocation(location);
                    setDonatePage(donatePage);
                    setSiteLink(siteLink);
                }
            } catch (err) {
                setError('Failed to fetch organisation data.');
                console.error(err);
            }
        };
        fetchOrganisation();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.put(`/organisations/${id}`, {
                orgname,
                email,
                location,
                donatePage,
                siteLink,
            });

            if (data.success) {
                navigate('/'); // Redirect to home on successful update
            } else {
                setError(data.message || 'An error occurred.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update organisation.');
            console.error('Error updating organisation:', err);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Edit Organisation</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" value={orgname} onChange={(e) => setOrgname(e.target.value)} placeholder="Organisation Name" required className="w-full p-2 border rounded" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded" />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required className="w-full p-2 border rounded" />
                <input type="url" value={donatePage} onChange={(e) => setDonatePage(e.target.value)} placeholder="Donate Page URL" required className="w-full p-2 border rounded" />
                <input type="url" value={siteLink} onChange={(e) => setSiteLink(e.target.value)} placeholder="Website URL" required className="w-full p-2 border rounded" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
            </form>
        </div>
    );
};

export default EditOrganisation;