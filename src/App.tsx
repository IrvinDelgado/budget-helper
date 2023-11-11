import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator";
import BudgetBreakdown from "./components/BudgetBreakdown/BudgetBreakdown";

const App = () => {
  return (
    <MantineProvider>
      <div className="h-screen w-screen bg-gradient-to-r from-slate-950 to-sky-950">
        <h1 className="p-4 text-4xl font-bold text-white">Budget Helper</h1>
        <div className="flex">
          <BudgetCalculator />
          <BudgetBreakdown />
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
