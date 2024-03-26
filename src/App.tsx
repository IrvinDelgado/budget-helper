import "@mantine/core/styles.css";
import { MantineProvider, Stack } from "@mantine/core";
import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator";
import BudgetBreakdown from "./components/BudgetBreakdown/BudgetBreakdown";
import { useState } from "react";

const App = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<string | number>("");
  return (
    <MantineProvider>
      <div className="h-screen w-screen bg-gradient-to-r from-slate-950 to-sky-950">
        <h1 className="p-4 text-4xl font-bold text-white">Budget Helper</h1>
        <Stack className="m-auto mt-4 w-2/3">
          <BudgetCalculator
            monthlyIncome={monthlyIncome}
            setMonthlyIncome={setMonthlyIncome}
          />
          <BudgetBreakdown monthlyIncome={+monthlyIncome} />
        </Stack>
      </div>
    </MantineProvider>
  );
};

export default App;
