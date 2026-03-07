const Donation = require("../models/Donation");
const ErrorResponse = require("../utils/ErrorResponse");

/**
 * @desc    Create a new donation
 * @route   POST /api/donations
 * @access  Logged-in users
 */
const createDonation = async (req, res, next) => {
    try {
        const { templeId, amount } = req.body;

        const donation = await Donation.create({
            user: req.user._id,
            temple: templeId,
            amount,
        });

        res.status(201).json({ success: true, data: donation });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get all donations (admin view)
 * @route   GET /api/donations
 * @access  ADMIN
 */
const getDonations = async (req, res, next) => {
    try {
        const donations = await Donation.find()
            .populate("user", "name email")
            .populate("temple", "name location");

        res.status(200).json({ success: true, count: donations.length, data: donations });
    } catch (error) {
        next(error);
    }
};

module.exports = { createDonation, getDonations };
