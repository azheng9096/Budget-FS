import styled from "styled-components";
import { BudgetItemActionType } from "../context/BudgetItemsContext";
import { useBudgetItemsContext } from "../hooks/useBudgetItemsContext";
import { BudgetItem } from "../types/budget";
import { NumberToMoneyString } from "../utils/constants";
import { useAuthContext } from "../hooks/useAuthContext";

type Props = {
  budgetItem: BudgetItem;
};

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;

  > span {
    transition: all var(--anim-time) ease-in-out;
  }

  &:hover {
    cursor: pointer;

    > span {
      color: #b04646;
    }
  }
`;

const BudgetTableRow = ({ budgetItem }: Props) => {
  const { dispatch } = useBudgetItemsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) return;

    const response = await fetch("/api/budget/" + budgetItem._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({
        type: BudgetItemActionType.DELETE_BUDGET_ITEM,
        payload: json,
      });
    }
  };

  return (
    <tr>
      <td>
        {/* {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
        })} */}
        {new Date(budgetItem.date).toISOString().split("T")[0]}
      </td>
      <td>{budgetItem.name}</td>
      <td>{budgetItem.category}</td>
      <td>{NumberToMoneyString(budgetItem.amount)}</td>
      <td>
        <DeleteButton onClick={handleClick}>
          <span className="material-symbols-rounded error">delete</span>
        </DeleteButton>
      </td>
    </tr>
  );
};

export default BudgetTableRow;
