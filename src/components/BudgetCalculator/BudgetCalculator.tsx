import { NumberInput, Stack } from "@mantine/core";

interface IBudgetCalculator {
  monthlyIncome: string | number;
  setMonthlyIncome: (monthlyIncome: string | number) => void;
}
const BudgetCalculator = (props: IBudgetCalculator) => {
  const { monthlyIncome, setMonthlyIncome } = props;
  return (
    <Stack className="m-0 max-h-56 w-full items-center rounded-lg bg-stone-200 p-4">
      <NumberInput
        classNames={{
          root: "w-3/4 pb-4",
          label: "font-bold",
          input: "bg-slate-500 text-center text-black font-bold bg-stone-300",
        }}
        label="Monthly Budget"
        placeholder="$0.00"
        hideControls
        thousandSeparator=","
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        value={monthlyIncome}
        onChange={setMonthlyIncome}
      />
    </Stack>
  );
};

export default BudgetCalculator;
