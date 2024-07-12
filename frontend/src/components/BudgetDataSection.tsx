import { useMemo } from "react";
import { BudgetItem } from "../types/budget";
import { NumberToMoneyString } from "../utils/constants";
import DataStatsCard from "./DataStatsCard";
import Donut, { Data } from "./Donut";
import HorizontalScrollContainer from "./HorizontalScrollContainer";

type Props = {
  budgetItems: BudgetItem[];
};

const CalculateData = (budgetItems: BudgetItem[]) => {
  let totalSpent = 0,
    totalEarned = 0,
    spentCategory: any = {};

  budgetItems.forEach((item) => {
    if (item.amount < 0) {
      totalSpent += Math.abs(item.amount);

      if (spentCategory[item.category] === undefined)
        spentCategory[item.category] = 0;
      spentCategory[item.category] += Math.abs(item.amount);
    } else {
      totalEarned += item.amount;
    }
  });

  const netBalance = totalEarned - totalSpent;
  const spentCategoryData: Data[] = Object.entries(spentCategory).map((e) => ({
    id: e[0],
    value: e[1] as number,
  }));
  return { netBalance, totalSpent, totalEarned, spentCategoryData };
};

const BudgetDataSection = ({ budgetItems }: Props) => {
  const data = useMemo(() => CalculateData(budgetItems), [budgetItems]);

  return (
    <HorizontalScrollContainer>
      <div className="card" style={{ height: 208, width: 400, padding: 0 }}>
        <Donut data={data.spentCategoryData} />
      </div>
      <DataStatsCard
        header="Net Balance"
        icon="balance"
        data={NumberToMoneyString(data.netBalance)}
      />
      <DataStatsCard
        header="Total Spent"
        icon="payments"
        data={NumberToMoneyString(data.totalSpent)}
      />
      <DataStatsCard
        header="Total Earned"
        icon="savings"
        data={NumberToMoneyString(data.totalEarned)}
      />
    </HorizontalScrollContainer>
  );
};

export default BudgetDataSection;
