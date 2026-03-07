const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    slot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DarshanSlot",
        required: true,
    },
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple",
        required: true,
    },
    status: {
        type: String,
        enum: ["BOOKED", "CANCELLED"],
        default: "BOOKED",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Booking", bookingSchema);
