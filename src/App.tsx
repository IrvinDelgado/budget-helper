import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator"
import BudgetBreakdown from "./components/BudgetBreakdown/BudgetBreakdown"

const App = () => {
	return (
    <div className="bg-gradient-to-r from-slate-600 to-slate-800">
			<div>Budget Helper</div>
			<BudgetCalculator/>
			<BudgetBreakdown/>
    </div>
  )
}

export default App
