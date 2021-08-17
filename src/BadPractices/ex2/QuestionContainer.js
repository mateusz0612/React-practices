import React, { useState, useEffect, useCallback } from "react";

// Separate stateful aspects from rendering
// BAD EXAMPLE
// We can seperate fetching data and displaying data

export const QuestionContainer = () => {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    questions: []
  });

  const getQuestions = useCallback(async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    setState((prevState) => {
      return { ...prevState, questions: data.results };
    });
  }, []);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <div>
      {state.questions.map((question) => {
        const { category, question: questionContent } = question;
        return (
          <div>
            <p>Category: {category}</p>
            <p>Question: {questionContent}</p>
          </div>
        );
      })}
    </div>
  );
};
