import React from "react";

export const QuestionItem = ({ category, question }) => {
  return (
    <div>
      <p>Category: {category}</p>
      <p>Question: {question}</p>
    </div>
  );
};
