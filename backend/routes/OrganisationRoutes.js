const express = require('express');
const router = express.Router();
const { getOrganisation, createOrganisation } = require('../controllers/OrganisationController');

router.get('/org', getOrganisation);
router.post('/org', createOrganisation);

module.exports = router;
