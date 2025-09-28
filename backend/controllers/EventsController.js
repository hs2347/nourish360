const mongoose = require('mongoose');
const Events = require('../models/EventsModel.js');
const connectDB = require('../connectDB.js');
//public
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

// CREATE (Protected)
const createEvents = async (req, res) => {
    try {
        const { fullname, email, message, organiser, siteLink } = req.body;
        if (!fullname || !email || !message || !organiser || !siteLink) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        await connectDB();
        await Events.create({ 
            fullname, email, message, organiser, siteLink, 
            user: req.user.id // Link the event to the logged-in user
        });
        res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Unable to send message." });
    }
};

// UPDATE (Protected & Authorized)
const updateEvent = async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        // Authorization Check
        if (event.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, event: updatedEvent });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating event" });
    }
};

// DELETE (Protected & Authorized)
const deleteEvent = async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        // Authorization Check
        if (event.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        await event.deleteOne();
        res.status(200).json({ success: true, message: 'Event removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting event" });
    }
};
const getEventById = async (req, res) => {
    try {
        await connectDB();
        const event = await Events.findById(req.params.id);
        if (event) {
            res.status(200).json({ success: true, event });
        } else {
            res.status(404).json({ success: false, message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching event' });
    }
};

module.exports = { getAllEvents, createEvents, updateEvent, deleteEvent, getEventById };