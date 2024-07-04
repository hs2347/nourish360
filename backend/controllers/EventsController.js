const mongoose = require('mongoose');
const Events = require('../models/EventsModel.js');
const connectDB = require('../connectDB.js');

const getAllEvents = async (req, res) => {
    try {
        await connectDB();
        const events = await Events.find({});
        res.status(200).json({ success: true, events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ success: false, message: 'Error fetching events', error: error.message });
    }
};

const createEvents = async (req, res) => {
    try {
        const { fullname, email, message, organiser, siteLink } = req.body;

        // Ensure all required fields are present
        if (!fullname || !email || !message || !organiser || !siteLink) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        await connectDB();
        await Events.create({ fullname, email, message, organiser, siteLink });
        res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            res.status(400).json({ success: false, errors: errorList });
        } else {
            console.error('Error creating events:', error);
            res.status(500).json({ success: false, message: "Unable to send message.", error: error.message });
        }
    }
};


module.exports = { getAllEvents, createEvents };
