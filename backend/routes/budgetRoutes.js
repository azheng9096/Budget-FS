const express = require("express");
const {
  getBudgetItems,
  createBudgetItem,
  getBudgetItem,
  deleteBudgetItem,
  updateBudgetItem,
} = require("../controllers/budgetController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all budget routes
router.use(requireAuth);

// GET all budget items
router.get("/", getBudgetItems);

// GET specific budget item
router.get("/:id", getBudgetItem);

// POST budget item
router.post("/", createBudgetItem);

// DELETE a budget item
router.delete("/:id", deleteBudgetItem);

// UPDATE a budget item
router.patch("/:id", updateBudgetItem);

module.exports = router;
