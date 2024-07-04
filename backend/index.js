const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./connectDB');
const EventRouter = require('./routes/EventsRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); 

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use('/api/events', EventRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
