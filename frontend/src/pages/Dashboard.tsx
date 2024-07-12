import { useEffect } from "react";
import styled from "styled-components";
import AddBudgetItemForm from "../components/AddBudgetItemForm";
import BudgetDataSection from "../components/BudgetDataSection";
import BudgetTable from "../components/BudgetTable";
import Navbar from "../components/Navbar";
import { BudgetItemActionType } from "../context/BudgetItemsContext";
import { useBudgetItemsContext } from "../hooks/useBudgetItemsContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Dashboard = () => {
  // const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const { budgetItems, dispatch } = useBudgetItemsContext();

  useEffect(() => {
    const fetchBudgetItems = async () => {
      const response = await fetch("/api/budget");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: BudgetItemActionType.SET_BUDGET_ITEMS,
          payload: json,
        });
        // setBudgetItems(json);
      }
    };

    fetchBudgetItems();
  }, [dispatch]);

  return (
    <Container>
      <Navbar brandName="Budget Tracker" />
      <BudgetDataSection budgetItems={budgetItems} />
      <AddBudgetItemForm />
      <BudgetTable headerName="Budget Table" budgetItems={budgetItems} />
    </Container>
  );
};

export default Dashboard;
