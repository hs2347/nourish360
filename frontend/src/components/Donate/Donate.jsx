import React, { useState } from 'react';
import DonationOptions from './DonationOptions';
import DonationForm from './DonationForm';
import donateBg from '../../assets/donate.jpg';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  const submitDonation = (additionalInfo) => {
    alert(`Thank you for your kindness. ${additionalInfo}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-fixed" style={{ backgroundImage: `url(${donateBg})` }}>   
      <div className="bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-center text-red-500 text-4xl mb-6">DONATE</h1>
        <DonationOptions selectAmount={selectAmount} />
        <DonationForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} submitDonation={submitDonation} />
        <div className="bg-blue-200 p-4 rounded-lg text-black mt-6">
          <ul className="list-disc list-inside">
            <li>A payment of Rs 1000 can feed up to 10 people. <a href="stats.html" className="text-red-500">Click here to explore statistics related to hunger.</a></li>
            <li>Our weekly food libraries are a unique initiative in eradicating hunger in local communities. <a href="link2.html" className="text-red-500">Click here to learn more about our food libraries.</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
