const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.get("/", projectController.getAll);
router.get("/:id", projectController.getOne);

// Admin-protected routes
router.post("/", authMiddleware, projectController.create);
router.put("/:id", authMiddleware, projectController.update);
router.delete("/:id", authMiddleware, projectController.delete);

module.exports = router;
