import React from "react";

export const Person = ({ name, lastName, age }) => {
  return (
    <div>
      <p>
        Hello, my name is {name} {lastName}, I'm {age} years old!
      </p>
    </div>
  );
};
