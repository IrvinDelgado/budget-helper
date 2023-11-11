import { Accordion } from "@mantine/core";
import { HomeIcon, ShoppingCartIcon, WalletIcon } from "../../icons/Icons";

const BudgetBreakdown = () => {
  const needsBreakdown = [];
  const wantsBreakdown = [];
  const saveBreakdown = [];

  return (
    <Accordion
      variant="contained"
      classNames={{ root: "pt-4 pr-4 w-full", item: "bg-stone-200" }}
    >
      <Accordion.Item value="needs">
        <Accordion.Control icon={<HomeIcon />}>Needs</Accordion.Control>
        <Accordion.Panel>Test</Accordion.Panel>
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
