/**
 * Custom error class that carries an HTTP status code.
 * Throw this inside controllers and it will be caught by the
 * centralized error-handling middleware.
 */
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;
