import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator";
// import BudgetBreakdown from "./components/BudgetBreakdown/BudgetBreakdown";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-slate-600 to-slate-800">
      <h1 className="p-4 text-4xl font-bold text-white">Budget Helper</h1>
      <BudgetCalculator />
      {/* <BudgetBreakdown /> */}
    </div>
  );
};

export default App;
