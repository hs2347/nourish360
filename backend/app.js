import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import eventsRoute from "./routes/EventsRoutes.js";
import organisationRoute from "./routes/OrganisationRoutes.js";
import authRoutes from './routes/authRoutes.js';
import cors from "cors";

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", paymentRoute);
app.use("/api/events", eventsRoute);
app.use("/api/organisations", organisationRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);