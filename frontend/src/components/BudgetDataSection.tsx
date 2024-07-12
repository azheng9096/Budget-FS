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
    spentCategory: any = {},
    maxSpentCategory = "N/A";

  budgetItems.forEach((item) => {
    if (item.amount < 0) {
      totalSpent += Math.abs(item.amount);

      // update spent category datas
      if (spentCategory[item.category] === undefined)
        spentCategory[item.category] = 0;
      spentCategory[item.category] += Math.abs(item.amount);

      // update max spent category
      // check === undefined to take care of default "N/A" case
      if (
        spentCategory[maxSpentCategory] === undefined ||
        spentCategory[maxSpentCategory] < spentCategory[item.category]
      ) {
        maxSpentCategory = item.category;
      }
    } else {
      totalEarned += item.amount;
    }
  });

  const netBalance = totalEarned - totalSpent;
  const spentCategoryData: Data[] = Object.entries(spentCategory).map((e) => ({
    id: e[0],
    value: e[1] as number,
  }));
  return {
    netBalance,
    totalSpent,
    totalEarned,
    spentCategoryData,
    maxSpentCategory,
  };
};

const BudgetDataSection = ({ budgetItems }: Props) => {
  const data = useMemo(() => CalculateData(budgetItems), [budgetItems]);

  return (
    <HorizontalScrollContainer>
      <div className="card" style={{ height: 208, width: 208, padding: 0 }}>
        <Donut data={data.spentCategoryData} />
      </div>
      <DataStatsCard
        header="Net Balance"
        icon="balance"
        data={NumberToMoneyString(data.netBalance)}
        dataColor={data.netBalance < 0 ? "var(--error)" : "var(--success)"}
      />
      <DataStatsCard
        header="Top Spent Category"
        icon="category"
        data={data.maxSpentCategory}
        dataColor="#7478DA"
      />
      <DataStatsCard
        header="Total Spent"
        icon="payments"
        data={NumberToMoneyString(data.totalSpent)}
        dataColor={data.totalSpent > 0 ? "var(--error)" : ""}
      />
      <DataStatsCard
        header="Total Earned"
        icon="savings"
        data={NumberToMoneyString(data.totalEarned)}
        dataColor={data.totalEarned > 0 ? "var(--success)" : ""}
      />
    </HorizontalScrollContainer>
  );
};

export default BudgetDataSection;
