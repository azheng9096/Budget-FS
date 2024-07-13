import { AuthActionType } from "../context/AuthContext";
import { BudgetItemActionType } from "../context/BudgetItemsContext";
import { useAuthContext } from "./useAuthContext";
import { useBudgetItemsContext } from "./useBudgetItemsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: budgetItemsDispatch } = useBudgetItemsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: AuthActionType.LOGOUT, payload: null });
    budgetItemsDispatch({
      type: BudgetItemActionType.SET_BUDGET_ITEMS,
      payload: [],
    });
  };

  return { logout };
};
