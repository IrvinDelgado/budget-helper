interface IDiffNumber {
  budgetNumber?: number;
  budgetUsed?: number;
}

const DiffNumber = ({ budgetNumber, budgetUsed }: IDiffNumber) => {
  if (!budgetNumber && !budgetUsed) {
    return <></>;
  }
  return (
    <div>
      {budgetNumber} - {budgetUsed}
    </div>
  );
};

export default DiffNumber;
