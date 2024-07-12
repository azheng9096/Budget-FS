import { BudgetItemsContext } from "../context/BudgetItemsContext";
import { useContext } from "react";

export const useBudgetItemsContext = () => {
  const context = useContext(BudgetItemsContext);
  
  if (!context) {
    throw Error("useBudgetItemsContext must be used inside a BudgetItemsContextProvider");
  }

  return context;
}