import React from 'react';

const DonationOptions = ({ selectAmount }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-white text-xl mb-4">Choose an amount:</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button className="amount-option bg-red-500  hover:bg-red-800 rounded-full px-4 py-2" onClick={() => selectAmount(100)}>Rs 100</button>
        <button className="amount-option bg-red-500   hover:bg-red-800 rounded-full px-4 py-2" onClick={() => selectAmount(500)}>Rs 500</button>
        <button className="amount-option bg-red-500  hover:bg-red-800 rounded-full px-4 py-2" onClick={() => selectAmount(1000)}>Rs 1000</button>
        <button className="amount-option bg-red-500  hover:bg-red-800  rounded-full px-4 py-2" onClick={() => selectAmount(2000)}>Rs 2000</button>
      </div>
    </div>
  );
};

export default DonationOptions;