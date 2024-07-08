import React, { useState } from 'react';
import DonationOptions from './DonationOptions';
import DonationForm from './DonationForm';

import axios from "axios";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };
  const amount = selectedAmount*100;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_ZeF9KRTpIM8SyQ", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Nourish360", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
       
        name: "William", //your customer's name
        email: "william@gmail.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-fixed" style={{ backgroundImage: `url(/donate.jpg)` }}>   
      <div className="bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-center text-red-500 text-4xl mb-6">DONATE</h1>
        <DonationOptions selectAmount={selectAmount} />
        <DonationForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} paymentHandler={paymentHandler} />
        <div className="bg-red-500 p-4 rounded-lg text-white text-center">
        <button onClick={() => paymentHandler(selectedAmount)} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded">
      Donate
        </button>
       
          <p className="mt-2">You are donating: Rs {selectedAmount}</p>
        
      </div>
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
