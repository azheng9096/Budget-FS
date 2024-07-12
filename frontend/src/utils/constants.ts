export const NumberToMoneyString = (num: number) => {
  return `${num < 0 ? "-" : ""}$${Math.abs(num).toFixed(2)}`;
};
