const express = require('express');
const router = express.Router();
const {getAllEvents, createEvents} = require('../controllers/EventsController.js')

router.get('/',  getAllEvents);

router.post('/', createEvents);

module.exports = router;