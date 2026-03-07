const ErrorResponse = require("../utils/ErrorResponse");

/**
 * Centralized error-handling middleware.
 * Catches errors thrown or passed via next(err) and returns
 * a uniform JSON error response.
 */
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Log for dev
    console.error(err);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        const message = "Resource not found";
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key (e.g. duplicate email)
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Server Error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};

module.exports = errorHandler;
