const express = require("express");
const router = express.Router();
const { createDonation, getDonations } = require("../controllers/donationController");
const { protect, authorizeRoles } = require("../middleware/auth");

// POST /api/donations — Any logged-in user can donate
router.post("/", protect, createDonation);

// GET /api/donations — Admin-only: view all donations
router.get("/", protect, authorizeRoles("ADMIN"), getDonations);

module.exports = router;
