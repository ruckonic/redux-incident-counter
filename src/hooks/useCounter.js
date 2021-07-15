import { useSelector } from 'react-redux';

import { useActions } from './useActions';
import { decrement, set, increment } from '../actions';

export function useCounter() {
  /** @type number */
  const count = useSelector((state) => state.count);
  const actions = useActions({ decrement, set, increment });

  return { ...actions, count };
}
