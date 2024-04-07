import { Group, TextInput, NumberInput, ActionIcon, Stack } from "@mantine/core";
import { PlusIcon } from "../../icons/Icons";
import { useRef } from "react";

type BudgetBreakdownAdditionType = {
  name: string;
  handleOnNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  handleOnValueChange: (numberValue: string | number) => void;
  handleOnAddClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
const BudgetBreakdownAddition = ({
  name,
  value,
  handleOnNameChange,
  handleOnValueChange,
  handleOnAddClick,
}: BudgetBreakdownAdditionType) => {
  const itemNameRef = useRef<HTMLInputElement>(null);

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if ((e.code === "Enter" || e.key === "Enter") && value && name) {
      handleOnAddClick();
      itemNameRef.current?.focus();
    }
  };

  return (
    <Group className="pt-4">
      <Stack className="w-5/6">
        <TextInput
          ref={itemNameRef}
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
          onKeyUp={handleOnKeyDown}
        />
       </Stack> 
      <ActionIcon
        disabled={!name || !value}
        variant="subtle"
        color="gray"
        onClick={handleOnAddClick}
      >
        <PlusIcon />
      </ActionIcon>
    </Group>
  );
};

export default BudgetBreakdownAddition;
