import { useState } from "react";

const AddEvent = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [siteLink, setSiteLink] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from reloading the page

    try {
      const res = await fetch("https://nourish360-backend.onrender.com/api/events/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
          organiser,
          siteLink,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      const { message: msg, success } = data;
      setError([msg]);
      setSuccess(success);

      if (success) {
        setFullname("");
        setEmail("");
        setMessage("");
        setOrganiser("");
        setSiteLink("");
      }
    } catch (error) {
      console.error('Error submitting event:', error);
      setError([error.message]);
      setSuccess(false);
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
