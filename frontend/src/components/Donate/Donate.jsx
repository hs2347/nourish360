import React, { useState } from 'react';
import DonationOptions from './DonationOptions';
import DonationForm from './DonationForm';
import { useNavigate } from 'react-router-dom';
import api from '../../api'; // Use the api instance

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
   const navigate = useNavigate();

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  const paymentHandler = async () => {
    if (!name || !phone || !selectedAmount) {
        alert("Please fill in your name, phone number, and an amount.");
        return;
    }

    try {
      const { data: { order, key } } = await api.post('/checkout', {
        amount: selectedAmount,
        name,
        phone,
        note
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Nourish360",
        description: "Donation Transaction",
        image: "/logo.png", 
        order_id: order.id,
        handler: async function (response) {
            const dataToVerify = {
                ...response,
                name,
                phone,
                note
            };
            try {
                 await api.post('/paymentverification', dataToVerify);
      
                alert("Payment successful! Thank you for your donation.");
                
                // Clear the form fields
                setName('');
                setPhone('');
                setNote('');
                setSelectedAmount('');

                // Navigate to the homepage
                navigate('/');
            } catch (error) {
                console.error("Payment Verification Error:", error);
            }
        },
        prefill: {
          name: name,
          contact: phone,
          // You could add an email field to the form too
        },
        notes: {
          note: note,
        },
        theme: {
         color: "#ff7e7e",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert("Payment failed. Please try again.");
        console.error(response);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-fixed" style={{ backgroundImage: `url(/donate.jpg)` }}>
      <div className="bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-center text-red-500 text-4xl mb-6">DONATE</h1>
        <DonationOptions selectAmount={selectAmount} />
        <DonationForm 
            selectedAmount={selectedAmount} 
            setSelectedAmount={setSelectedAmount}
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            note={note}
            setNote={setNote}
        />
        <div className="p-4 rounded-lg text-white text-center">
          <button onClick={paymentHandler} className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded">
            Donate
          </button>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-black mt-6">
          <ul className="list-disc list-inside">
            <li>A payment of Rs 1000 can feed up to 10 people.</li>
            <li>Our weekly food libraries are a unique initiative in eradicating hunger in local communities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
