import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledQuizPage } from "./QuizPage.style";
import Question from "../../components/Question/Question";
import { fetchQuestions } from "../../features/questions/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import { generateURL } from "../../utils/generateURL";
import Result from "../../components/results/Resut";
import { AppDispatch, RootState } from "../../store";

function QuizPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const difficulty = searchParams.get("difficulty");
  const questionsNumber = searchParams.get("questions");
  const { status, error, questions, index } = useSelector(
    (state: RootState) => state.questions
  );
  const dispatch = useDispatch<AppDispatch>();

  const url = generateURL(Number(questionsNumber), categoryId, difficulty);
  useEffect(() => {
    dispatch(fetchQuestions(url));
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "finished") {
    return <Result />;
  }
  if (status === "error") {
    return <Error error={error} url={url} />;
  }
  return (
    <StyledQuizPage>
      <Question question={questions[index]} />
    </StyledQuizPage>
  );
}

export default QuizPage;
