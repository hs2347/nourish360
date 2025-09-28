const mongoose = require('mongoose');
const Organisations = require('../models/OrganisationModel.js');
const connectDB = require('../connectDB.js');

const getOrganisation = async (req, res) => {
    try {
        await connectDB();
        const organisations = await Organisations.find({});
        res.status(200).json({ success: true, organisations });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching Organisations' });
    }
};

const createOrganisation = async (req, res) => {
    try {
        const { orgname, email, location, donatePage, siteLink } = req.body;
        if (!orgname || !email || !location || !donatePage || !siteLink) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        await connectDB();
        await Organisations.create({
            orgname, email, location, donatePage, siteLink,
            user: req.user.id // Link the organisation to the logged-in user
        });
        res.status(200).json({ success: true, message: "Organisation saved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Unable to save." });
    }
};

const updateOrganisation = async (req, res) => {
    try {
        const organisation = await Organisations.findById(req.params.id);

        if (!organisation) {
            return res.status(404).json({ success: false, message: 'Organisation not found' });
        }

        // Authorization Check
        if (organisation.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        const updatedOrganisation = await Organisations.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, organisation: updatedOrganisation });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating organisation" });
    }
};

const deleteOrganisation = async (req, res) => {
    try {
        const organisation = await Organisations.findById(req.params.id);

        if (!organisation) {
            return res.status(404).json({ success: false, message: 'Organisation not found' });
        }

        // Authorization Check
        if (organisation.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }

        await organisation.deleteOne();
        res.status(200).json({ success: true, message: 'Organisation removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting organisation" });
    }
};
const getOrganisationById = async (req, res) => {
    try {
        await connectDB();
        const organisation = await Organisations.findById(req.params.id);
        if (organisation) {
            res.status(200).json({ success: true, organisation });
        } else {
            res.status(404).json({ success: false, message: 'Organisation not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching Organisation' });
    }
};


module.exports = { getOrganisation, createOrganisation, updateOrganisation, deleteOrganisation, getOrganisationById };
