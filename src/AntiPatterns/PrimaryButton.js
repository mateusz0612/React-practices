import React from "react";

// Antipattern - props spreading on DOM elements

export const PrimaryButton = (props) => {
  return (
    <button type={props.type}>
      {props.withPrefix ? "PL " : ""}
      {props.children}
    </button>
  );
};
