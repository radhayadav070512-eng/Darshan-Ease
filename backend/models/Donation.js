const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple",
        required: true,
    },
    amount: {
        type: Number,
        required: [true, "Please add a donation amount"],
        min: [1, "Donation amount must be at least 1"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Donation", donationSchema);
