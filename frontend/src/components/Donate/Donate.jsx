import React, { useState } from 'react';
import DonationOptions from './DonationOptions';
import DonationForm from './DonationForm';


const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  const amount = selectedAmount * 100;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async () => {
    try {
      const response = await fetch("https://nourish360-backend.onrender.com/order", {
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
      }

      const order = await response.json();
      console.log(order);

      var options = {
        key: "rzp_test_ZeF9KRTpIM8SyQ", // Replace with your live Key ID
        amount,
        currency,
        name: "Nourish360",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          try {
            const validateRes = await fetch("https://nourish360-backend.onrender.com/paymentverification", {
              method: "POST",
              body: JSON.stringify(response),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (!validateRes.ok) {
              const errorText = await validateRes.text();
              throw new Error(`Validation error! Status: ${validateRes.status}, Response: ${errorText}`);
            }

            const jsonRes = await validateRes.json();
            console.log(jsonRes);
          } catch (error) {
            console.error("Validation Error:", error);
          }
        },
        prefill: {
          name: "William",
          email: "william@gmail.com",
          contact: "9000000000",
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
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-fixed" style={{ backgroundImage: `url(/donate.jpg)` }}>
      <div className="bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-center text-red-500 text-4xl mb-6">DONATE</h1>
        <DonationOptions selectAmount={selectAmount} />
        <DonationForm selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
        <div className="p-4 rounded-lg text-white text-center">
          <button onClick={paymentHandler} className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded">
            Donate
          </button>
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
