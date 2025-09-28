const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const organisationSchema = new Schema({
   user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orgname: {
      type: String,
      required: [true, "Organisation name is required."],
      trim: true,
      minLength: [2, "Name must be larger than 2 characters"],
      maxLength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    donatePage: {
        type: String,
        required: [true, 'Donate page link is required'],
        match: [/(https?:\/\/[^\s]+)/, 'Donate page link is invalid']
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
  

const Organisations =
  mongoose.models.Organisations || mongoose.model("Organisations", organisationSchema);

module.exports=Organisations;