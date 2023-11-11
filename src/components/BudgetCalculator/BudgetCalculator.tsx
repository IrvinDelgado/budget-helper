import { NumberFormatter, NumberInput } from "@mantine/core";
import { useState } from "react";
type BudgetNumberType = {
  value: number | string;
};
const BudgetNumber = ({ value }: BudgetNumberType) => {
  return (
    <NumberFormatter
      className={"text-2xl font-bold text-green-700"}
      prefix="$"
      value={value}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
    />
  );
};

const BudgetCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<string | number>("");

  return (
    <div className="m-4 w-1/2 rounded-lg bg-stone-200 p-4">
      <div className="flex justify-center">
        <NumberInput
          classNames={{
            root: "w-3/4 pb-4",
            label: "font-bold",
            input: "bg-slate-500 text-center text-black font-bold bg-stone-300",
          }}
          label="Monthly Income"
          placeholder="$0.00"
          hideControls
          thousandSeparator=","
          prefix="$"
          decimalScale={2}
          fixedDecimalScale
          value={monthlyIncome}
          onChange={setMonthlyIncome}
        />
      </div>
      <div>
        <div className="flex justify-around pb-8">
          <span>Needs</span>
          <span>Wants</span>
          <span>Save</span>
        </div>
        <div className="flex justify-between pb-8">
          <BudgetNumber value={+monthlyIncome * 0.5} />
          <BudgetNumber value={+monthlyIncome * 0.2} />
          <BudgetNumber value={+monthlyIncome * 0.3} />
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
