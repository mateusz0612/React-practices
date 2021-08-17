import React, { useState } from "react";

// Antipattern - initial state based on prop

const CounterValue = ({ counterValue }) => {
  const [value, setValue] = useState(counterValue);
  return <p>Value: {value}</p>;
};

export const NotWorkingCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <CounterValue counterValue={counter} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
