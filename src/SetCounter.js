import { useDispatch } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const dispatch = useDispatch();
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const el = event.target['set-to'];
          dispatch(set(+el.value));
          el.value = '';
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" />
        <input type="submit" />
      </form>
    </section>
  );
};
