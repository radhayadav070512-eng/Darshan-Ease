const mongoose = require("mongoose");

const darshanSlotSchema = new mongoose.Schema({
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple",
        required: [true, "Please add a temple reference"],
    },
    date: {
        type: Date,
        required: [true, "Please add a date"],
    },
    time: {
        type: String,
        required: [true, "Please add a time"],
    },
    capacity: {
        type: Number,
        required: [true, "Please add total capacity"],
    },
    availableSeats: {
        type: Number,
        required: [true, "Please add available seats"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("DarshanSlot", darshanSlotSchema);
