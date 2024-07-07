const mongoose = require('mongoose');
const Organisations = require('../models/OrganisationModel.js');
const connectDB = require('../connectDB.js');

const getOrganisation = async (req, res) => {
    try {
        await connectDB();
        const organisations = await Organisations.find({});
        res.status(200).json({ success: true, organisations });
    } catch (error) {
        console.error('Error fetching organisations:', error);
        res.status(500).json({ success: false, message: 'Error fetching Organisations', error: error.message });
    }
};

const createOrganisation = async (req, res) => {
    try {
        const { orgname, email, location, donatePage, siteLink } = req.body;
        // Ensure all required fields are present
        if (!orgname || !email || !location || !donatePage || !siteLink) {
            console.log('Missing required fields:', { orgname, email, location, donatePage, siteLink });
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        await connectDB();
        const newOrganisation = new Organisations({ orgname, email, location, donatePage, siteLink });
        await newOrganisation.save();
        res.status(200).json({ success: true, message: "Organisation saved successfully" });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log('Validation error:', errorList);
            res.status(400).json({ success: false, errors: errorList });
        } else {
            console.error('Error saving Organisation:', error);
            res.status(500).json({ success: false, message: "Unable to save.", error: error.message });
        }
    }
};

module.exports = { getOrganisation, createOrganisation };
