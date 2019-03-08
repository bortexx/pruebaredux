import contador from "./contador";


it("Si action es del tipo incremento ", () => {
  expect(contador({number:0}, {type: 'INCREMENTO'})).toEqual({ number: 1});
});
it("Si action es del tipo decremento ", () => {
  expect(contador({number:0}, {type: 'DECREMENTO'})).toEqual({ number: -1});
});
