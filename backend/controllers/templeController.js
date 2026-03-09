const Temple = require("../models/Temple");
const ErrorResponse = require("../utils/ErrorResponse");

/**
 * @desc    Get all temples
 * @route   GET /api/temples
 * @access  Public
 */
const getTemples = async (req, res, next) => {
    try {
        const temples = await Temple.find();
        res.status(200).json({ success: true, count: temples.length, data: temples });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get single temple by ID
 * @route   GET /api/temples/:id
 * @access  Public
 */
const getTempleById = async (req, res, next) => {
    try {
        const temple = await Temple.findById(req.params.id);
        if (!temple) {
            return next(new ErrorResponse("Temple not found", 404));
        }
        res.status(200).json({ success: true, data: temple });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create a new temple
 * @route   POST /api/temples
 * @access  ADMIN
 */
const createTemple = async (req, res, next) => {
    try {
        const temple = await Temple.create(req.body);
        res.status(201).json({ success: true, data: temple });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update a temple
 * @route   PUT /api/temples/:id
 * @access  ADMIN
 */
const updateTemple = async (req, res, next) => {
    try {
        const temple = await Temple.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!temple) {
            return next(new ErrorResponse("Temple not found", 404));
        }
        res.status(200).json({ success: true, data: temple });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete a temple
 * @route   DELETE /api/temples/:id
 * @access  ADMIN
 */
const deleteTemple = async (req, res, next) => {
    try {
        const temple = await Temple.findByIdAndDelete(req.params.id);
        if (!temple) {
            return next(new ErrorResponse("Temple not found", 404));
        }
        res.status(200).json({ success: true, message: "Temple removed" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getTemples, getTempleById, createTemple, updateTemple, deleteTemple };
