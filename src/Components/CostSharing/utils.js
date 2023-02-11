export const getEmptyPerson = () => ({
  name: "",
  amount: 0,
});

export const isEmptyPerson = (person) => !person.name && !person.amount;

export const round = (num, places) => {
  const x = Math.pow(10, places);
  return Math.round(num * x) / x;
};

export const calculatePayback = (personList) => {
  if (personList.length === 0) return [[],0];

  const total = personList.reduce((total, { amount }) => total + amount, 0);
  const average = total / personList.length;

  const sortedPersonList = personList
    .map((person) => {
      return { ...person, amount: person.amount - average };
    })
    .sort((x, y) => x.amount < y.amount);

  const positivePersonList = sortedPersonList.filter(
    ({ amount }) => amount > 0
  );
  const negativePersonList = sortedPersonList.filter(
    ({ amount }) => amount < 0
  );

  const paybackList = [];

  while (positivePersonList.length && negativePersonList.length) {
    const highestPositive = positivePersonList[0];
    const lowestNegative = negativePersonList[negativePersonList.length - 1];

    if (highestPositive.amount >= -lowestNegative.amount) {
      paybackList.push({
        from: lowestNegative.name,
        to: highestPositive.name,
        amount: round(-lowestNegative.amount, 2),
      });
      negativePersonList.pop();
      if (highestPositive.amount === -lowestNegative.amount) {
        positivePersonList.shift();
      }
    } else {
      paybackList.push({
        from: lowestNegative.name,
        to: highestPositive.name,
        amount: round(highestPositive.amount, 2),
      });
      positivePersonList.shift();
    }
  }

  return [paybackList, total];
};
