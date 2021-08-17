import React from "react";
import { QuestionItem } from "./QuestionItem";

export const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map(({ category, question }) => (
        <QuestionItem key={question} question={question} category={category} />
      ))}
    </div>
  );
};
