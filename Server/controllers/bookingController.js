const Booking = require("../models/Booking");
const DarshanSlot = require("../models/DarshanSlot");
const ErrorResponse = require("../utils/ErrorResponse");

/**
 * @desc    Create a new booking (decrements available seats)
 * @route   POST /api/bookings
 * @access  USER
 */
const createBooking = async (req, res, next) => {
    try {
        const { slotId, templeId } = req.body;

        // Find the slot
        const slot = await DarshanSlot.findById(slotId);
        if (!slot) {
            return next(new ErrorResponse("Darshan slot not found", 404));
        }

        // Check seat availability
        if (slot.availableSeats <= 0) {
            return next(new ErrorResponse("No seats available for this slot", 400));
        }

        // Create booking
        const booking = await Booking.create({
            user: req.user._id,
            slot: slotId,
            temple: templeId,
            status: "BOOKED",
        });

        // Decrease available seats by 1
        slot.availableSeats -= 1;
        await slot.save();

        res.status(201).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get bookings for the logged-in user
 * @route   GET /api/bookings
 * @access  USER
 */
const getMyBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user._id })
            .populate("slot", "date time")
            .populate("temple", "name location");

        res.status(200).json({ success: true, count: bookings.length, data: bookings });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Cancel a booking (increments available seats)
 * @route   PUT /api/bookings/:id/cancel
 * @access  USER
 */
const cancelBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return next(new ErrorResponse("Booking not found", 404));
        }

        // Ensure the booking belongs to the logged-in user
        if (booking.user.toString() !== req.user._id.toString()) {
            return next(new ErrorResponse("Not authorized to cancel this booking", 403));
        }

        // Prevent cancelling an already cancelled booking
        if (booking.status === "CANCELLED") {
            return next(new ErrorResponse("Booking is already cancelled", 400));
        }

        // Update booking status
        booking.status = "CANCELLED";
        await booking.save();

        // Restore the seat
        const slot = await DarshanSlot.findById(booking.slot);
        if (slot) {
            slot.availableSeats += 1;
            await slot.save();
        }

        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

module.exports = { createBooking, getMyBookings, cancelBooking };
