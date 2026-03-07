const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");

// Route imports
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const templeRoutes = require("./routes/templeRoutes");
const slotRoutes = require("./routes/slotRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const donationRoutes = require("./routes/donationRoutes");

const app = express();

// --------------- Middleware ---------------

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// HTTP request logger
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// --------------- API Routes ---------------

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/donations", donationRoutes);

// --------------- Production Configuration ---------------

if (process.env.NODE_ENV === "production") {
    // Set static folder
    const buildPath = path.join(__dirname, "../Client/dist");
    app.use(express.static(buildPath));

    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(buildPath, "index.html"));
    });
} else {
    // Health check for development
    app.get("/", (req, res) => {
        res.json({ message: "DarshanEase API is running 🚀" });
    });
}

// --------------- Error Handler (must be last) ---------------
app.use(errorHandler);

module.exports = app;
