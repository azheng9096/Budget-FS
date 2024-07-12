import styled from "styled-components";
import { BudgetCategory } from "../types/budget";

const BudgetForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > label {
    font-size: 0.85rem;
    font-weight: 600;
  }

  > input,
  select {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border-width: 1px;
    min-width: 15rem;
  }
`;

const BudgetFormButton = styled.button`
  background-color: var(--secondary-text);
  padding: 1rem 1.75rem;
  border: none;
  border-radius: 0.5rem;

  color: white;
  text-transform: uppercase;
`

const AddBudgetForm = () => {
  return (
    <BudgetForm className="card">
      <InputContainer>
        <label>Name</label>
        <input type="text" id="budget-form-name" style={{ width: "20rem" }} />
      </InputContainer>
      <InputContainer>
        <label>Category</label>
        <select id="budget-form-category">
          {BudgetCategory.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </InputContainer>
      <InputContainer>
        <label>Amount (- Spent, + Earned)</label>
        <input type="number" step="0.01" id="budget-form-amount" />
      </InputContainer>
      <BudgetFormButton>Add Budget Item</BudgetFormButton>
    </BudgetForm>
  );
};

export default AddBudgetForm;
