import { Accordion } from "@mantine/core";
import { HomeIcon, ShoppingCartIcon, WalletIcon } from "../../icons/Icons";
import { useState } from "react";
import BudgetBreakdownAddition from "./BudgetBreakdownAddition";
import BudgetBreakdownItems, {
  BudgetBreakdownItemsType,
} from "./BudgetBreakdownItems";
import BudgetNumber from "../BudgetNumber/BudgetNumber";

const budgetCategories = ["Needs", "Wants", "Savings"] as const;
const BUDGET_ITEM = { name: "", value: "" };
type BudgetItems = {
  [key: string]: BudgetBreakdownItemsType[];
};
type BudgetAddition = {
  [key: string]: BudgetBreakdownItemsType;
};
const budgetBreakdown = Object.fromEntries(
  budgetCategories.map((category) => [category, []]),
);
const budgetAddition = Object.fromEntries(
  budgetCategories.map((category) => [category, BUDGET_ITEM]),
);

interface IBudgetBreakdown {
  monthlyIncome: number;
}
const BudgetBreakdown = ({ monthlyIncome }: IBudgetBreakdown) => {
  const [breakdown, setBreakdown] = useState<BudgetItems>(budgetBreakdown);
  const [budgetItem, setBudgetItem] = useState<BudgetAddition>(budgetAddition);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Needs":
        return <HomeIcon />;
      case "Wants":
        return <ShoppingCartIcon />;
      case "Savings":
        return <WalletIcon />;
      default:
        return <HomeIcon />;
    }
  };

  const getCategoryCost = (category: string) => {
    if (!monthlyIncome) {
      return "";
    }
    switch (category) {
      case "Needs":
        return <BudgetNumber value={monthlyIncome * 0.5} />;
      case "Wants":
        return <BudgetNumber value={monthlyIncome * 0.3} />;
      case "Savings":
        return <BudgetNumber value={monthlyIncome * 0.2} />;
      default:
        return;
    }
  };

  const handleAddInCategory = (categoryName: string) => {
    setBreakdown((prev) => {
      const addedItem = [...prev[categoryName], budgetItem[categoryName]];
      return {
        ...prev,
        [categoryName]: addedItem,
      };
    });
    setBudgetItem((prev) => {
      return { ...prev, [categoryName]: { name: "", value: "" } };
    });
  };
  const handleBreakdownRemoval = (categoryName: string, name: string) => {
    const filteredCategory = breakdown[categoryName].filter(
      (breakdownItem) => breakdownItem.name !== name,
    );
    setBreakdown((prev) => ({ ...prev, [categoryName]: filteredCategory }));
  };
  return (
    <Accordion
      variant="contained"
      defaultValue={[budgetCategories[0]]}
      multiple
      classNames={{
        root: "pt-4 w-full",
        item: "bg-stone-200",
      }}
    >
      {Object.keys(breakdown).map((categoryKey) => {
        return (
          <Accordion.Item value={categoryKey} key={categoryKey}>
            <Accordion.Control icon={getCategoryIcon(categoryKey)}>
              {categoryKey} {getCategoryCost(categoryKey)}
            </Accordion.Control>
            <Accordion.Panel>
              {breakdown[categoryKey].map((item) => {
                return (
                  <BudgetBreakdownItems
                    key={item.name}
                    breakdownItem={item}
                    onBreakdownRemoval={() =>
                      handleBreakdownRemoval(categoryKey, item.name)
                    }
                  />
                );
              })}
              <BudgetBreakdownAddition
                name={budgetItem[categoryKey].name}
                value={budgetItem[categoryKey].value}
                handleOnNameChange={(e) =>
                  setBudgetItem((prev) => ({
                    ...prev,
                    [categoryKey]: {
                      ...budgetItem[categoryKey],
                      name: e.target.value,
                    },
                  }))
                }
                handleOnValueChange={(e) =>
                  setBudgetItem((prev) => ({
                    ...prev,
                    [categoryKey]: {
                      ...budgetItem[categoryKey],
                      value: e,
                    },
                  }))
                }
                handleOnAddClick={() => handleAddInCategory(categoryKey)}
              />
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default BudgetBreakdown;
