import React, { useState } from "react";

// Keep components small and function-specific
// BAD EXAMPLE
// This component is doing too much

export const CounterAndForm = () => {
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    lastName: ""
  });

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${formData.name} + ${formData.lastName}`);
  };

  const displayGreetings = () => {
    alert("Pozdrawiam!");
  };

  return (
    <div>
      <p>Counter value: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <form onSubmit={handleSubmit}>
        <label>
          Enter name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter lastname:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={displayGreetings}>
        Greet
      </button>
    </div>
  );
};
