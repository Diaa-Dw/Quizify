import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Progress from "../../components/Progress/Progress";
import { StyledQuizPage } from "./QuizPage.style";
import QuestionFooter from "../../components/QuestionFooter/QuestionFooter";
import Timer from "../../components/Timer/Timer";
import Button from "../../components/Button/Button";
import Question from "../../components/Question/Question";
import {
  fetchQuestions,
  nextQuestion,
} from "../../features/questions/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { generateURL } from "../../utils/generateURL";

function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const difficulty = searchParams.get("difficulty");
  const questionsNumber = searchParams.get("questions");
  const { status, error, questions, index } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const url = generateURL(questionsNumber, categoryId, difficulty);
    console.log("🚀 ~ useEffect ~ url:", url);
    dispatch(fetchQuestions(url));
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "finished") {
    return <h1>Done</h1>;
  }
  if (status === "error") {
    return <Error error={error} />;
  }
  return (
    <StyledQuizPage>
      <Question question={questions[index]} />
    </StyledQuizPage>
  );
}

export default QuizPage;
