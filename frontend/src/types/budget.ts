export const BudgetCategory = ["Personal", "Education", "Utility", "Rent", "Income", "Others"];

export type BudgetItem = {
  name: string;
  category: string;
  amount: Number;
  date: Date;
};
