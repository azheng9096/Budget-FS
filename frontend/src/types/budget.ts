export const BudgetCategory = ["Personal", "Education", "Utility", "Rent", "Income", "Others"];

export type BudgetItem = {
  _id: string;
  name: string;
  category: string;
  amount: number;
  date: Date;
};
