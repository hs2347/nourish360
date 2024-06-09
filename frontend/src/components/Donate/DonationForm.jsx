import React, { useState } from 'react';

const DonationForm = ({ selectedAmount, setSelectedAmount, submitDonation }) => {
  const [monthlyDonation, setMonthlyDonation] = useState(false);
  const [note, setNote] = useState('');

  const handleCustomAmountChange = (e) => {
    setSelectedAmount(e.target.value);
  };

  const handleDonateCustomAmount = () => {
    if (selectedAmount === "") {
      alert("Please enter a valid amount");
    } else {
      alert("Donating Rs " + selectedAmount);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <input
          type="number"
          id="custom-amount-input"
          placeholder="Enter Amount"
          value={selectedAmount}
          onChange={handleCustomAmountChange}
          className="p-2 w-48 bg-blue-200 border border-gray-800 rounded mb-4"
        />
        <div className="flex items-center justify-center text-white mb-4">
          <input
            type="checkbox"
            id="monthly-donation-checkbox"
            checked={monthlyDonation}
            onChange={() => setMonthlyDonation(!monthlyDonation)}
            className="mr-2"
          />
          <label htmlFor="monthly-donation-checkbox">Make this a monthly donation</label>
        </div>
        <button onClick={handleDonateCustomAmount} className="amount-option bg-red-500 text-white py-2 px-4 rounded">
          Confirm Amount
        </button>
      </div>

      <div className="mb-6">
        <textarea
          id="note-text"
          placeholder="A note you'd like to share with your donation..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="p-4 w-80 bg-blue-200 text-black rounded"
        ></textarea>
      </div>

      <div className="bg-red-500 p-4 rounded-lg text-white text-center">
        <button onClick={() => submitDonation(note)} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded">
          Donate
        </button>
       
          <p className="mt-2">You are donating: Rs {selectedAmount}</p>
        
      </div>
    </div>
  );
};

export default DonationForm;
