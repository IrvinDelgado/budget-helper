import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator";
import BudgetBreakdown from "./components/BudgetBreakdown/BudgetBreakdown";

const App = () => {
  return (
    <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      <div>Budget Helper</div>
      <BudgetCalculator />
      <BudgetBreakdown />
    </div>
  );
};

export default App;
