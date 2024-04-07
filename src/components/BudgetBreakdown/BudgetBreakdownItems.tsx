import { Group, NumberFormatter, ActionIcon } from "@mantine/core";
import { MinusIcon } from "../../icons/Icons";

export type BudgetBreakdownItemsType = {
  name: string;
  value: string | number;
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
    <Group className="pt-2" key={breakdownItem.name}>
      <span className="w-2/5 pr-2 text-stone-700">{breakdownItem.name}</span>
      <NumberFormatter
        className={"w-2/5 font-bold text-red-700"}
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

export default BudgetBreakdownItems;
