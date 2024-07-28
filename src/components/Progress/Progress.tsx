import { useSelector } from "react-redux";
import { StyledProgress } from "./Progress.style";
import { POINTS_PER_QUESTION } from "../../features/questions/questionsSlice";

function Progress({ answer }) {
  const { questions, index, points } = useSelector((state) => state.questions);
  const questionsCount = questions.length;
  const maximumPoint = questionsCount * POINTS_PER_QUESTION;
  return (
    <StyledProgress>
      <progress max={questionsCount} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {questionsCount}
      </p>

      <p>
        <strong>{points}</strong> / {maximumPoint}PX
      </p>
    </StyledProgress>
  );
}

export default Progress;
