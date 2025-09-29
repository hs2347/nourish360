const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
  },
  phone: { 
    type: String,
    required: true,
  },
  note: { 
    type: String,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment };
