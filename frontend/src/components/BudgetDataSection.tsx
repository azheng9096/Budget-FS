import { useMemo } from "react";
import { BudgetItem } from "../types/budget";
import DataCard from "./DataCard";
import DataStatsCard from "./DataStatsCard";
import HorizontalScrollContainer from "./HorizontalScrollContainer";
import { NumberToMoneyString } from "../utils/constants";

type Props = {
  budgetItems: BudgetItem[];
};

const CalculateData = (budgetItems: BudgetItem[]) => {
  let totalSpent = 0,
    totalEarned = 0;

  budgetItems.forEach((item) => {
    if (item.amount < 0) {
      totalSpent += Math.abs(item.amount);
    } else {
      totalEarned += item.amount;
    }
  });

  const netBalance = totalEarned - totalSpent;
  return { netBalance, totalSpent, totalEarned };
};

const BudgetDataSection = ({ budgetItems }: Props) => {
  const data = useMemo(() => CalculateData(budgetItems), [budgetItems]);

  return (
    <HorizontalScrollContainer>
      <DataCard></DataCard>
      <DataStatsCard header="Net Balance" icon="balance" data={NumberToMoneyString(data.netBalance)} />
      <DataStatsCard header="Total Spent" icon="payments" data={NumberToMoneyString(data.totalSpent)} />
      <DataStatsCard header="Total Earned" icon="savings" data={NumberToMoneyString(data.totalEarned)} />
    </HorizontalScrollContainer>
  );
};

export default BudgetDataSection;
