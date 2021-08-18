import React from "react";

export const GreetButton = () => {
  const displayGreetings = () => {
    alert("Pozdrawiam!");
  };

  return (
    <button type="button" onClick={displayGreetings}>
      Greet
    </button>
  );
};
