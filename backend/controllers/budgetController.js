const mongoose = require("mongoose");
const { budgetItemModel } = require("../models/budgetModel");

// GET all budget items
const getBudgetItems = async (req, res) => {
  const user_id = req.user._id;

  const budgetItems = await budgetItemModel
    .find({ user_id })
    .sort({ date: "desc" })
    .exec();

  res.status(200).json(budgetItems);
};

// GET specific budget item
const getBudgetItem = async (req, res) => {
  const { id } = req.params;

  // check that id is valid to prevent type error and server crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such budget item" });
  }

  const budgetItem = await budgetItemModel.findById(id);
  if (!budgetItem) {
    return res.status(404).json({ error: "No such budget item" });
  }

  res.status(200).json(budgetItem);
};

// POST budget item
const createBudgetItem = async (req, res) => {
  const { name, category, amount } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!category) {
    emptyFields.push("category");
  }

  if (!amount) {
    emptyFields.push("amount");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const user_id = req.user._id;
    const budgetItem = await budgetItemModel.create({
      name,
      category,
      amount,
      user_id,
    });
    res.status(200).json(budgetItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a budget item
const deleteBudgetItem = async (req, res) => {
  const { id } = req.params;

  const budgetItem = await budgetItemModel.findOneAndDelete({ _id: id });

  if (!budgetItem) {
    return res.status(400).json({ error: "No such budget item" });
  }

  res.status(200).json(budgetItem);
};

// UPDATE a budget item
const updateBudgetItem = async (req, res) => {
  const { id } = req.params;

  // check that id is valid to prevent type error and server crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such budget item" });
  }

  const budgetItem = await budgetItemModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!budgetItem) {
    return res.status(400).json({ error: "No such budget item" });
  }

  res.status(200).json(budgetItem);
};

module.exports = {
  getBudgetItems,
  getBudgetItem,
  createBudgetItem,
  deleteBudgetItem,
  updateBudgetItem,
};
