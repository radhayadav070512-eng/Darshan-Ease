const dotenv = require("dotenv");

// Load environment variables (must be called before anything else)
dotenv.config();

const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
    );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});
