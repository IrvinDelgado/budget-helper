import {
  Accordion,
  ActionIcon,
  Group,
  NumberFormatter,
  NumberInput,
  TextInput,
} from "@mantine/core";
import {
  HomeIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  WalletIcon,
} from "../../icons/Icons";
import { useState } from "react";
type BudgetBreakdownItemsType = {
  name: string;
  value: string | number;
};

type BudgetBreakdownAdditionType = {
  name: string;
  handleOnNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  handleOnValueChange: (numberValue: string | number) => void;
  handleOnAddClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const BudgetBreakdownAddition = ({
  name,
  value,
  handleOnNameChange,
  handleOnValueChange,
  handleOnAddClick,
}: BudgetBreakdownAdditionType) => {
  return (
    <Group className="pl-9 pt-4">
      <TextInput
        classNames={{
          input: "bg-slate-500 text-black font-bold bg-stone-300",
        }}
        placeholder="Name"
        value={name}
        onChange={handleOnNameChange}
      />
      <NumberInput
        classNames={{
          label: "font-bold",
          input: "bg-slate-500 text-black font-bold bg-stone-300",
        }}
        placeholder="$0.00"
        hideControls
        thousandSeparator=","
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        value={value}
        onChange={handleOnValueChange}
      />
      <ActionIcon variant="subtle" color="gray" onClick={handleOnAddClick}>
        <PlusIcon />
      </ActionIcon>
    </Group>
  );
};

interface IBudgetBreakdownItems {
  breakdownItem: BudgetBreakdownItemsType;
  onBreakdownRemoval: (name: string) => void;
}

const BudgetBreakdownItems = ({
  breakdownItem,
  onBreakdownRemoval,
}: IBudgetBreakdownItems) => {
  return (
    <Group className="pl-9" key={breakdownItem.name}>
      <span className="pr-4 text-stone-700">{breakdownItem.name}</span>
      <NumberFormatter
        className={"font-bold text-red-700"}
        prefix="$"
        value={breakdownItem.value}
        thousandSeparator
        fixedDecimalScale
        decimalScale={2}
      />
      <ActionIcon
        variant="subtle"
        color="gray"
        onClick={() => onBreakdownRemoval(breakdownItem.name)}
      >
        <MinusIcon />
      </ActionIcon>
    </Group>
  );
};

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
