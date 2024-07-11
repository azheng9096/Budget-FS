const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Personal", "Education", "Utility", "Rent", "Income", "Others"],
    default: "Personal",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

const budgetItemModel = mongoose.model("BudgetItem", budgetItemSchema);

module.exports = { budgetItemModel };