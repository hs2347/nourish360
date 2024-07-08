const express = require('express');
const router = express.Router();
const {getAllEvents, createEvents} = require('../controllers/EventsController.js')

router.get('/event',  getAllEvents);

router.post('/event', createEvents);

module.exports = router;