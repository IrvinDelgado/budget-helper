import { Accordion } from "@mantine/core";
import { HomeIcon, ShoppingCartIcon, WalletIcon } from "../../icons/Icons";
import { useState } from "react";
import BudgetBreakdownAddition from "./BudgetBreakdownAddition";
import BudgetBreakdownItems, {
  BudgetBreakdownItemsType,
} from "./BudgetBreakdownItems";

type BudgetBreakdownFormType = {
  needs: BudgetBreakdownItemsType[];
  wants: BudgetBreakdownItemsType[];
  savings: BudgetBreakdownItemsType[];
};

const BudgetBreakdown = () => {
  const emptyBreakDown: BudgetBreakdownItemsType = {
    name: "",
    value: "",
  };
  const [breakdown, setBreakdown] = useState<BudgetBreakdownFormType>({
    needs: [],
    wants: [],
    savings: [],
  });
  const [categoryAddition, setCategoryAddition] = useState({
    needs: { ...emptyBreakDown },
    wants: { ...emptyBreakDown },
    savings: { ...emptyBreakDown },
  });

  const handleAddInCategory = (categoryName: "needs" | "wants" | "savings") => {
    console.log(categoryName);
    setBreakdown((prev) => {
      const addedItem = [...prev[categoryName], categoryAddition[categoryName]];
      console.log(addedItem);
      return {
        ...prev,
        [categoryName]: addedItem,
      };
    });
    setCategoryAddition((prev) => {
      return { ...prev, [categoryName]: { ...emptyBreakDown } };
    });
  };
  const handleDeleteInCategory = (
    categoryName: "needs" | "wants" | "savings",
    name: string,
  ) => {
    const filteredCategory = breakdown[categoryName].filter(
      (breakdownItem) => breakdownItem.name !== name,
    );
    setBreakdown((prev) => ({ ...prev, [categoryName]: filteredCategory }));
  };
  const totalBreakdownSection = (breakdowns: BudgetBreakdownItemsType[]) => {
    return breakdowns.reduce((acc, curr) => {
      return acc + Number(curr.value);
    }, 0);
  };

  return (
    <Accordion
      variant="contained"
      defaultValue={["needs"]}
      multiple
      classNames={{
        root: "pt-4 w-full md:pr-4 md:w-full",
        item: "bg-stone-200",
      }}
    >
      <Accordion.Item value="needs">
        <Accordion.Control icon={<HomeIcon />}>
          Needs ${totalBreakdownSection(breakdown.needs)}
        </Accordion.Control>
        <Accordion.Panel>
          {breakdown.needs.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={() =>
                handleDeleteInCategory("needs", item.name)
              }
            />
          ))}
          <BudgetBreakdownAddition
            name={categoryAddition.needs.name}
            value={categoryAddition.needs.value}
            handleOnNameChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                needs: { ...categoryAddition.needs, name: e.target.value },
              }))
            }
            handleOnValueChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                needs: { ...categoryAddition.needs, value: e },
              }))
            }
            handleOnAddClick={() => handleAddInCategory("needs")}
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="wants">
        <Accordion.Control icon={<ShoppingCartIcon />}>
          Wants ${totalBreakdownSection(breakdown.wants)}
        </Accordion.Control>
        <Accordion.Panel>
          {breakdown.wants.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={() =>
                handleDeleteInCategory("wants", item.name)
              }
            />
          ))}
          <BudgetBreakdownAddition
            name={categoryAddition.wants.name}
            value={categoryAddition.wants.value}
            handleOnNameChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                wants: { ...categoryAddition.wants, name: e.target.value },
              }))
            }
            handleOnValueChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                wants: { ...categoryAddition.wants, value: e },
              }))
            }
            handleOnAddClick={() => handleAddInCategory("wants")}
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="savings">
        <Accordion.Control icon={<WalletIcon />}>
          Save ${totalBreakdownSection(breakdown.savings)}
        </Accordion.Control>
        <Accordion.Panel>
          {breakdown.savings.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={() =>
                handleDeleteInCategory("savings", item.name)
              }
            />
          ))}
          <BudgetBreakdownAddition
            name={categoryAddition.savings.name}
            value={categoryAddition.savings.value}
            handleOnNameChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                savings: { ...categoryAddition.savings, name: e.target.value },
              }))
            }
            handleOnValueChange={(e) =>
              setCategoryAddition((prev) => ({
                ...prev,
                savings: { ...categoryAddition.savings, value: e },
              }))
            }
            handleOnAddClick={() => handleAddInCategory("savings")}
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default BudgetBreakdown;
