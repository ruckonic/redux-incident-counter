import { useEffect, useState } from 'react';
import { useCounter } from './hooks/useCounter';

export const SetCounter = () => {
  const { count, set } = useCounter();
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    setCounter(count);
  }, [count]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const el = event.target['set-to'];
          set(+el.value);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
