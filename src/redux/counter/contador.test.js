import contador from "./contador";

const INCREMENT = {
  type: "INCREMENT"
};

const DECREMENT = {
  type: "DECREMENT"
};

it("Si action es del tipo incremento ", () => {
  expect(contador(0, INCREMENT)).toBe(1);
});
it("Si action es del tipo decremento ", () => {
  expect(contador(0, DECREMENT)).toBe(-1);
});
