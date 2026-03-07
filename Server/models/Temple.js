const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a temple name"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Please add a location"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
    },
    image: {
        type: String, // URL to temple image
        default: "no-image.jpg",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Temple", templeSchema);
