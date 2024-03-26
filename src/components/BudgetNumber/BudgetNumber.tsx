import { NumberFormatter } from "@mantine/core";
type BudgetNumberType = {
  value: number | string;
  className?: string;
};
const BudgetNumber = ({ value, className }: BudgetNumberType) => {
  return (
    <NumberFormatter
      className={className}
      prefix="$"
      value={value}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
    />
  );
};

export default BudgetNumber;
