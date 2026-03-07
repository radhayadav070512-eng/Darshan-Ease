const DarshanSlot = require("../models/DarshanSlot");
const ErrorResponse = require("../utils/ErrorResponse");

/**
 * @desc    Get all darshan slots (optionally filter by temple)
 * @route   GET /api/slots
 * @access  Public
 */
const getSlots = async (req, res, next) => {
    try {
        let filter = {};
        if (req.query.temple) {
            filter.temple = req.query.temple;
        }
        const slots = await DarshanSlot.find(filter).populate("temple", "name location");
        res.status(200).json({ success: true, count: slots.length, data: slots });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create a darshan slot
 * @route   POST /api/slots
 * @access  ADMIN / ORGANIZER
 */
const createSlot = async (req, res, next) => {
    try {
        const slot = await DarshanSlot.create(req.body);
        res.status(201).json({ success: true, data: slot });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update a darshan slot
 * @route   PUT /api/slots/:id
 * @access  ADMIN / ORGANIZER
 */
const updateSlot = async (req, res, next) => {
    try {
        const slot = await DarshanSlot.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!slot) {
            return next(new ErrorResponse("Slot not found", 404));
        }
        res.status(200).json({ success: true, data: slot });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete a darshan slot
 * @route   DELETE /api/slots/:id
 * @access  ADMIN / ORGANIZER
 */
const deleteSlot = async (req, res, next) => {
    try {
        const slot = await DarshanSlot.findByIdAndDelete(req.params.id);
        if (!slot) {
            return next(new ErrorResponse("Slot not found", 404));
        }
        res.status(200).json({ success: true, message: "Slot removed" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getSlots, createSlot, updateSlot, deleteSlot };
