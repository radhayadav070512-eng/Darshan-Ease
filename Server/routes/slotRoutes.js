const express = require("express");
const router = express.Router();
const {
    getSlots,
    createSlot,
    updateSlot,
    deleteSlot,
} = require("../controllers/slotController");
const { protect, authorizeRoles } = require("../middleware/auth");

// Public route
router.get("/", getSlots);

// Admin / Organizer routes
router.post("/", protect, authorizeRoles("ADMIN", "ORGANIZER"), createSlot);
router.put("/:id", protect, authorizeRoles("ADMIN", "ORGANIZER"), updateSlot);
router.delete("/:id", protect, authorizeRoles("ADMIN", "ORGANIZER"), deleteSlot);

module.exports = router;
