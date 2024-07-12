import styled from "styled-components";

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

const BudgetTable = () => {
  return (
    <Card className="card">
      <TableHeader>
        <h3>Budget Table</h3>
      </TableHeader>
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
          <tr>
            <td>2024-07-11</td>
            <td>HTML tables</td>
            <td>22</td>
          </tr>
          <tr>
            <td>2024-07-11</td>
            <td>HTML tables</td>
            <td>22</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default BudgetTable;
