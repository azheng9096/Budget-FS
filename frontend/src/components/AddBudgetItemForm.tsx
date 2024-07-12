import styled from "styled-components";
import { BudgetCategory } from "../types/budget";
import { useBudgetItemsContext } from "../hooks/useBudgetItemsContext";
import { SyntheticEvent, useState } from "react";
import { BudgetItemActionType } from "../context/BudgetItemsContext";

const BudgetItemForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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

const BudgetItemFormButton = styled.button`
  background-color: var(--secondary-text);
  padding: 1rem 1.75rem;
  border: none;
  border-radius: 0.5rem;

  color: white;
  text-transform: uppercase;

  transition: all var(--anim-time) ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--secondary-text-hover)
  }
`;

const ErrorField = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`;

const AddBudgetItemForm = () => {
  const { dispatch } = useBudgetItemsContext();
  const [name, setName] = useState("");
  const [category, setCategory] = useState(BudgetCategory[0]);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault(); // prevents page refresh on form submit

    const budgetItem = { name, category, amount };

    const response = await fetch("/api/budget", {
      method: "POST",
      body: JSON.stringify(budgetItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      setName("");
      setCategory(BudgetCategory[0]);
      setAmount("");
      setError(null);
      setEmptyFields([]);

      console.log("New Budget Item Added", json);
      dispatch({
        type: BudgetItemActionType.CREATE_BUDGET_ITEM,
        payload: json,
      });
    }
  };

  return (
    <BudgetItemForm className="card" onSubmit={handleSubmit}>
      <div>
        <InputContainer>
          <label className={emptyFields.includes("name") ? "error" : ""}>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="budget-form-name"
            style={{ width: "20rem" }}
          />
        </InputContainer>
        <InputContainer>
          <label className={emptyFields.includes("category") ? "error" : ""}>
            Category
          </label>
          <select
            id="budget-form-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {BudgetCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label className={emptyFields.includes("amount") ? "error" : ""}>
            Amount (- Spent, + Earned)
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="budget-form-amount"
          />
        </InputContainer>
        <BudgetItemFormButton type="submit">
          Add Budget Item
        </BudgetItemFormButton>
      </div>
      {error && (
        <div className="error">
          <ErrorField>{error}</ErrorField>
        </div>
      )}
    </BudgetItemForm>
  );
};

export default AddBudgetItemForm;
