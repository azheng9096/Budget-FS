import styled from "styled-components";
import AddBudgetForm from "../components/AddBudgetForm";
import Navbar from "../components/Navbar";
import BudgetTable from "../components/BudgetTable";
import { BudgetItem } from "../types/budget";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Dashboard = () => {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

  useEffect(() => {
    const fetchBudgetItems = async () => {
      const response = await fetch("/api/budget");
      const json = await response.json();

      if (response.ok) {
        setBudgetItems(json);
      }
    };

    fetchBudgetItems();
  }, []);

  return (
    <Container>
      <Navbar brandName="Budget Tracker" />
      <AddBudgetForm />
      <BudgetTable headerName="Budget Table" budgetItems={budgetItems}/>
    </Container>
  );
};

export default Dashboard;
