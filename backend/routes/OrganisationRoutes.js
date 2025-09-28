const express = require('express');
const router = express.Router();
const { getOrganisation, createOrganisation, updateOrganisation, deleteOrganisation, getOrganisationById } = require('../controllers/OrganisationController');
const { protect } = require('../middleware/authMiddleware.js');

// Public Route: GET all organisations
// Protected Route: POST a new organisation
router.route('/').get(getOrganisation).post(protect, createOrganisation);

// Protected Routes: PUT (update) or DELETE a specific organisation by its ID
router.route('/:id').get(protect, getOrganisationById).put(protect, updateOrganisation).delete(protect, deleteOrganisation);

module.exports = router;
