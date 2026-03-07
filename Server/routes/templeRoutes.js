const express = require("express");
const router = express.Router();
const {
    getTemples,
    getTempleById,
    createTemple,
    updateTemple,
    deleteTemple,
} = require("../controllers/templeController");
const { protect, authorizeRoles } = require("../middleware/auth");

// Public routes
router.get("/", getTemples);
router.get("/:id", getTempleById);

// Admin-only routes
router.post("/", protect, authorizeRoles("ADMIN"), createTemple);
router.put("/:id", protect, authorizeRoles("ADMIN"), updateTemple);
router.delete("/:id", protect, authorizeRoles("ADMIN"), deleteTemple);

module.exports = router;
