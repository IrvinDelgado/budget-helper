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
  PlusIcon,
  ShoppingCartIcon,
  WalletIcon,
} from "../../icons/Icons";
import { useState } from "react";
type BudgetBreakdownItemsType = {
  name: string;
  value: string | number;
};
const BudgetBreakdownItems = ({ name, value }: BudgetBreakdownItemsType) => {
  return (
    <div className="pl-9" key={name}>
      <span className="pr-4 text-stone-700">{name}</span>
      <NumberFormatter
        className={"font-bold text-red-700"}
        prefix="$"
        value={value}
        thousandSeparator
        fixedDecimalScale
        decimalScale={2}
      />
    </div>
  );
};

const BudgetBreakdown = () => {
  const [needsBreakdown, setNeedsBreakdown] = useState([
    { name: "Rent", value: 1200 },
  ]);
  //const [wantsBreakdown, setWantsBreakdown] = useState([]);
  //const [savingsBreakdown, setSavingsBreakdown] = useState([]);
  const [nBAddtion, setNBAddition] = useState({ name: "", value: "" });

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
              name={item.name}
              value={item.value}
            />
          ))}
          <Group className="pl-9 pt-4">
            <TextInput
              classNames={{
                input: "bg-slate-500 text-black font-bold bg-stone-300",
              }}
              placeholder="Name"
              value={nBAddtion.name}
              onChange={(e) => {
                console.log(e.target.value);
              }}
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
              value={nBAddtion.value}
              onChange={(numberValue) => {
                console.log(numberValue);
              }}
            />
            <ActionIcon variant="subtle" color="gray">
              <PlusIcon />
            </ActionIcon>
          </Group>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="wants">
        <Accordion.Control icon={<ShoppingCartIcon />}>Wants</Accordion.Control>
        <Accordion.Panel>Test</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="save">
        <Accordion.Control icon={<WalletIcon />}>Save</Accordion.Control>
        <Accordion.Panel>Test</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default BudgetBreakdown;
