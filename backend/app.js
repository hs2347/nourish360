const express = require("express");
const cors = require("cors");
const paymentRoute = require("./routes/paymentRoutes.js"); // Ensure this is being used
const eventsRoute = require("./routes/EventsRoutes.js");
const organisationRoute = require("./routes/OrganisationRoutes.js");
const authRoutes = require('./routes/authRoutes.js');

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://nourish360-m9f7.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoute);
app.use("/api/organisations", organisationRoute);
app.use("/api", paymentRoute); // This uses your paymentRoutes.js


module.exports = app;