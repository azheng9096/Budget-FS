const express = require("express");
const {
  getBudgetItems,
  createBudgetItem,
  getBudgetItem,
  deleteBudgetItem,
  updateBudgetItem,
} = require("../controllers/budgetController");

const router = express.Router();

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