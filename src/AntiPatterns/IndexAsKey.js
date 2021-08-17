import React from "react";
import { Person } from "./Person";
import { MockData } from "./MockData";

// Antipattern - Index as key

export const IndexAsKey = () => {
  return MockData.map(({ name, lastName, age }, index) => (
    <Person name={name} lastName={lastName} age={age} key={index} />
  ));
};
