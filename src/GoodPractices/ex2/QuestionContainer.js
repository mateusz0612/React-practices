import React, { useState, useEffect, useCallback } from "react";
import { QuestionList } from "./QuestionList";

// Separate stateful aspects from rendering
// GOOD EXAMPLE

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

  return <QuestionList questions={state.questions} />;
};
