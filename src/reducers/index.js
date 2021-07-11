import { DECREMENT, INCREMENT, SET } from '../actions';

const initialCounterState = {
  count: 0
};

export const counterReducer = (state = initialCounterState, action) => {
  const { type, payload } = action;
  if (type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (type === DECREMENT) {
    return { count: state.count === 0 ? 0 : state.count - 1 };
  }
  if (type === SET) {
    return { count: payload };
  }

  return state;
};
