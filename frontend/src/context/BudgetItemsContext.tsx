import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { BudgetItem } from "../types/budget";

export enum BudgetItemActionType {
  SET_BUDGET_ITEMS = "SET_BUDGET_ITEM",
  CREATE_BUDGET_ITEM = "CREATE_BUDGET_ITEM",
  DELETE_BUDGET_ITEM = "DELETE_BUDGET_ITEM",
}

interface BudgetItemAction {
  type: BudgetItemActionType;
  payload: any;
}

interface BudgetItemState {
  budgetItems: BudgetItem[];
}

export const budgetItemsReducer = (
  state: BudgetItemState,
  action: BudgetItemAction
) => {
  switch (action.type) {
    case BudgetItemActionType.SET_BUDGET_ITEMS:
      return {
        budgetItems: action.payload,
      };
    case BudgetItemActionType.CREATE_BUDGET_ITEM:
      return {
        budgetItems: [action.payload, ...state.budgetItems],
      };
    case BudgetItemActionType.DELETE_BUDGET_ITEM:
      return {
        budgetItems: state.budgetItems.filter(
          (b) => b._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

type BudgetItemContext = {
  budgetItems: BudgetItem[];
  dispatch: Dispatch<BudgetItemAction>;
} | null;

export const BudgetItemsContext = createContext<BudgetItemContext>(null);

type Props = {
  children?: ReactNode;
};

export const BudgetItemsContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(budgetItemsReducer, {
    // budgetItems: null,
    budgetItems: [],
  });

  return (
    // ...state == state.budgetItems
    <BudgetItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BudgetItemsContext.Provider>
  );
};
