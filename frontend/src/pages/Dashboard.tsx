import styled from "styled-components";
import AddBudgetForm from "../components/AddBudgetForm";
import Navbar from "../components/Navbar";
import BudgetTable from "../components/BudgetTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Dashboard = () => {
  return (
    <Container>
      <Navbar brandName="Budget Tracker" />
      <AddBudgetForm />
      <BudgetTable />
    </Container>
  );
};

export default Dashboard;
