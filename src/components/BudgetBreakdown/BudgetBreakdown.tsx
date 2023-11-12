import { Accordion } from "@mantine/core";
import { HomeIcon, ShoppingCartIcon, WalletIcon } from "../../icons/Icons";
import { useState } from "react";
import BudgetBreakdownAddition from "./BudgetBreakdownAddition";
import BudgetBreakdownItems, {
  BudgetBreakdownItemsType,
} from "./BudgetBreakdownItems";

const BudgetBreakdown = () => {
  const [needsBreakdown, setNeedsBreakdown] = useState<
    BudgetBreakdownItemsType[]
  >([]);
  const [wantsBreakdown, setWantsBreakdown] = useState<
    BudgetBreakdownItemsType[]
  >([]);
  const [savingsBreakdown, setSavingsBreakdown] = useState<
    BudgetBreakdownItemsType[]
  >([]);
  const [nBAddtion, setNBAddition] = useState<BudgetBreakdownItemsType>({
    name: "",
    value: "",
  });
  const [wBAddtion, setWBAddition] = useState<BudgetBreakdownItemsType>({
    name: "",
    value: "",
  });
  const [sBAddtion, setSBAddition] = useState<BudgetBreakdownItemsType>({
    name: "",
    value: "",
  });

  const handleOnNBAddition = () => {
    setNeedsBreakdown((prev) => [...prev, nBAddtion]);
    setNBAddition({ name: "", value: "" });
  };

  const handleOnNBRemoval = (name: string) => {
    setNeedsBreakdown((prev) => {
      return prev.filter((breakdownItem) => breakdownItem.name !== name);
    });
  };
  const handleOnWBAddition = () => {
    setWantsBreakdown((prev) => [...prev, wBAddtion]);
    setWBAddition({ name: "", value: "" });
  };

  const handleOnWBRemoval = (name: string) => {
    setWantsBreakdown((prev) => {
      return prev.filter((breakdownItem) => breakdownItem.name !== name);
    });
  };
  const handleOnSBAddition = () => {
    setSavingsBreakdown((prev) => [...prev, sBAddtion]);
    setSBAddition({ name: "", value: "" });
  };

  const handleOnSBRemoval = (name: string) => {
    setSavingsBreakdown((prev) => {
      return prev.filter((breakdownItem) => breakdownItem.name !== name);
    });
  };

  return (
    <Accordion
      variant="contained"
      defaultValue={["needs"]}
      multiple
      classNames={{ root: "pt-4 pr-4 w-full", item: "bg-stone-200" }}
    >
      <Accordion.Item value="needs">
        <Accordion.Control icon={<HomeIcon />}>Needs</Accordion.Control>
        <Accordion.Panel>
          {needsBreakdown.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={handleOnNBRemoval}
            />
          ))}
          <BudgetBreakdownAddition
            name={nBAddtion.name}
            value={nBAddtion.value}
            handleOnNameChange={(e) =>
              setNBAddition((prev) => ({ ...prev, name: e.target.value }))
            }
            handleOnValueChange={(e) =>
              setNBAddition((prev) => ({ ...prev, value: e }))
            }
            handleOnAddClick={() => handleOnNBAddition()}
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="wants">
        <Accordion.Control icon={<ShoppingCartIcon />}>Wants</Accordion.Control>
        <Accordion.Panel>
          {wantsBreakdown.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={handleOnWBRemoval}
            />
          ))}
          <BudgetBreakdownAddition
            name={wBAddtion.name}
            value={wBAddtion.value}
            handleOnNameChange={(e) =>
              setWBAddition((prev) => ({ ...prev, name: e.target.value }))
            }
            handleOnValueChange={(e) =>
              setWBAddition((prev) => ({ ...prev, value: e }))
            }
            handleOnAddClick={() => handleOnWBAddition()}
          />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="save">
        <Accordion.Control icon={<WalletIcon />}>Save</Accordion.Control>
        <Accordion.Panel>
          {savingsBreakdown.map((item) => (
            <BudgetBreakdownItems
              key={item.name}
              breakdownItem={item}
              onBreakdownRemoval={handleOnSBRemoval}
            />
          ))}
          <BudgetBreakdownAddition
            name={sBAddtion.name}
            value={sBAddtion.value}
            handleOnNameChange={(e) =>
              setSBAddition((prev) => ({ ...prev, name: e.target.value }))
            }
            handleOnValueChange={(e) =>
              setSBAddition((prev) => ({ ...prev, value: e }))
            }
            handleOnAddClick={() => handleOnSBAddition()}
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default BudgetBreakdown;
