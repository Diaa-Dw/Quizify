import { useState } from "react";
import { StyledQuestion } from "./Question.style";
import Opitions from "../Options/Opition";
import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import QuestionFooter from "../QuestionFooter/QuestionFooter";
import { useDispatch } from "react-redux";
import {
  correctAnswer,
  nextQuestion,
} from "../../features/questions/questionsSlice";
import Progress from "../Progress/Progress";

interface QuestionStructure {
  type: string;
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
  category: string;
  difficulty: string;
}

interface QuestionProps {
  question: QuestionStructure;
}

function Question({ question }: QuestionProps) {
  const [answer, setAnswer] = useState<null | string>(null);
  const dispatch = useDispatch();

  const handleOptionSelection = (selectedOption: string) => {
    if (selectedOption === question.correct_answer) {
      setAnswer(selectedOption);
      dispatch(correctAnswer());
    } else {
      setAnswer(selectedOption);
    }
  };

  const hanldeNextQuestion = () => {
    dispatch(nextQuestion());
    setAnswer(null);
  };

  return (
    <StyledQuestion>
      <Progress answer={answer} />

      <h4>{question.question}</h4>
      <Opitions
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
        handleOptionSelection={handleOptionSelection}
        answer={answer}
      />
      <QuestionFooter>
        <Timer />
        {answer && (
          <Button
            onClick={hanldeNextQuestion}
            color='rgba(255,255,255,0.3)'
            size='small'
          >
            Next
          </Button>
        )}
      </QuestionFooter>
    </StyledQuestion>
  );
}

export default Question;
