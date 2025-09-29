import React from 'react';

const DonationForm = ({ 
  selectedAmount, 
  setSelectedAmount, 
  name, 
  setName, 
  phone, 
  setPhone, 
  note, 
  setNote 
}) => {

  const handleCustomAmountChange = (e) => {
    setSelectedAmount(e.target.value);
  };

  return (
    <div className="text-center">
      {/* Name Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name (Organisation/Individual)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-80 bg-blue-200 border border-gray-800 rounded"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 w-80 bg-blue-200 border border-gray-800 rounded"
          required
        />
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <input
          type="number"
          placeholder="Enter Amount"
          value={selectedAmount}
          onChange={handleCustomAmountChange}
          className="p-2 w-80 bg-blue-200 border border-gray-800 rounded"
          required
        />
      </div>

      {/* Note Textarea */}
      <div className="mb-6">
        <textarea
          placeholder="A note you'd like to share..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="p-4 w-80 bg-blue-200 text-black rounded"
        ></textarea>
      </div>
    </div>
  );
};

export default DonationForm;