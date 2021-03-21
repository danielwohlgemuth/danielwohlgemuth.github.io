import { calculatePayback, isEmptyPerson, round } from "./utils";

test("is empty person", () => {
  const result = isEmptyPerson({ name: "", amount: 0 });
  expect(result).toBeTruthy();
});

test("is not empty person because of name", () => {
  const result = isEmptyPerson({ name: "a", amount: 0 });
  expect(result).toBeFalsy();
});

test("is not empty person because of amount", () => {
  const result = isEmptyPerson({ name: "", amount: 1 });
  expect(result).toBeFalsy();
});

test("calculate payback", () => {
  const personList = [
    { name: "Amy", amount: 10 },
    { name: "Max", amount: 0 },
    { name: "Tim", amount: 5 },
  ];

  const [paybackList, total] = calculatePayback(personList);

  expect(paybackList).toEqual([{ from: "Max", to: "Amy", amount: 5 }]);
  expect(total).toEqual(15);
});

test("round up", () => {
  const result = round(15.057, 2);
  expect(result).toEqual(15.06);
});

test("round down", () => {
  const result = round(15.052, 2);
  expect(result).toEqual(15.05);
});
