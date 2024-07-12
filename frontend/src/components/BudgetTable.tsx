import styled from "styled-components";
import { BudgetItem } from "../types/budget";
import { formatDistanceToNow } from "date-fns";

type Props = {
  headerName?: string;
  budgetItems: BudgetItem[];
};

const Card = styled.div`
  padding: 0;
`;

const TableHeader = styled.div`
  padding: 1.5rem;
`;

const Table = styled.table`
  font-size: 0.85rem;
  width: 100%;
  border-collapse: collapse;

  th:first-child,
  td:first-child {
    padding-left: 1.5rem;
  }
  th:last-child,
  td:last-child {
    padding-right: 1.5rem;
  }

  thead tr {
    background-color: #f2f2f2;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid #bbb;
  }

  th,
  td {
    text-align: left;
    padding: 1rem 0;
  }
`;

const BudgetTable = ({ headerName, budgetItems }: Props) => {
  return (
    <Card className="card">
      {headerName && (
        <TableHeader>
          <h3>{headerName}</h3>
        </TableHeader>
      )}
      <Table>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems &&
            budgetItems.map((item, index) => (
              <tr key={index}>
                <td>
                  {/* {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })} */}
                  {new Date(item.date).toISOString().split("T")[0]}
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.amount.toString()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default BudgetTable;
