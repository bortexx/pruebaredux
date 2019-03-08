import { INCREMENTO, DECREMENTO } from "./counter-types";

const initialState = {
  number: 0
};

export const counterIncrement = ({ number }) => ({
  number: number + 1
});

export const counterDecrement = ({ number }) => ({
  number: number - 1
});

const reducerMap = {
  [INCREMENTO]: counterIncrement,
  [DECREMENTO]: counterDecrement
};

export default (state = initialState, action) =>
  reducerMap[action.type]
    ? reducerMap[action.type](state, action)
    : initialState;
