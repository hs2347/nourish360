const express = require('express');
const router = express.Router();
const {
    getAllEvents,
    createEvents,
    updateEvent, 
    getEventById,
    deleteEvent 
} = require('../controllers/EventsController.js');
const { protect } = require('../middleware/authMiddleware.js');
// Public Route: GET all events
// Protected Route: POST a new event
router.route('/').get(getAllEvents).post(protect, createEvents);

// Protected Routes: PUT (update) or DELETE a specific event by its ID
router.route('/:id').get(getEventById).put(protect, updateEvent).delete(protect, deleteEvent);


module.exports = router;