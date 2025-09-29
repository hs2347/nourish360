const Razorpay = require("razorpay");
const crypto = require('crypto');
const { Payment } = require('../models/paymentModel.js');


const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

const checkout = async (req, res) => {
    const { amount, name, phone, note } = req.body; // Get new fields from request

    const options = {
        amount: Number(amount * 100),
        currency: "INR",
        receipt: `receipt_order_${new Date().getTime()}`,
        notes: { // Pass note to Razorpay
            note: note
        }
    };
    
    try {
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order,
            key: process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Could not create order." });
    }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, phone, note } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Save payment details to database
    await Payment.create({
      name,
      phone,
      note,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    // Redirect to a frontend success page
      res.status(200).json({
      success: true,
      message: "Payment successful!"
    });

  } else {
    res.status(400).json({
      success: false,
      message: "Payment verification failed."
    });
  }
};

module.exports = {
  checkout,
  paymentVerification
};