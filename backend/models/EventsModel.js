const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    fullname: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minLength: [2, "Name must be larger than 2 characters"],
      maxLength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
    },
    organiser: {
        type: String,
        required: [true, 'Organiser is required']
    },
    siteLink: {
        type: String,
        required: [true, 'Site link is required'],
        match: [/(https?:\/\/[^\s]+)/, 'Site link is invalid']
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  

const Events =
  mongoose.models.Events || mongoose.model("Events", eventSchema);

module.exports=Events