import { useEffect } from "react";
import styled from "styled-components";
import AddBudgetItemForm from "../components/AddBudgetItemForm";
import BudgetDataSection from "../components/BudgetDataSection";
import BudgetTable from "../components/BudgetTable";
import { BudgetItemActionType } from "../context/BudgetItemsContext";
import { useBudgetItemsContext } from "../hooks/useBudgetItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Dashboard = () => {
  // const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const { budgetItems, dispatch } = useBudgetItemsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBudgetItems = async () => {
      const response = await fetch("/api/budget", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: BudgetItemActionType.SET_BUDGET_ITEMS,
          payload: json,
        });
        // setBudgetItems(json);
      }
    };

    if (user) fetchBudgetItems();
  }, [dispatch, user]);

  return (
    <Container>
      <BudgetDataSection budgetItems={budgetItems} />
      <AddBudgetItemForm />
      <BudgetTable headerName="Budget Table" budgetItems={budgetItems} />
    </Container>
  );
};

export default Dashboard;
