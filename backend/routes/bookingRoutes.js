const express = require("express");
const router = express.Router();
const {
    createBooking,
    getMyBookings,
    cancelBooking,
} = require("../controllers/bookingController");
const { protect, authorizeRoles } = require("../middleware/auth");

// All booking routes require authentication and USER role
router.use(protect);
router.use(authorizeRoles("USER"));

// POST /api/bookings — Create a booking
router.post("/", createBooking);

// GET /api/bookings — Get logged-in user's bookings
router.get("/", getMyBookings);

// PUT /api/bookings/:id/cancel — Cancel a booking
router.put("/:id/cancel", cancelBooking);

module.exports = router;
