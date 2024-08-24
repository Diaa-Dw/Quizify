import { ResultContainer } from "./Result.style";
import { useSelector } from "react-redux";
import { getTotalPoints } from "../../features/questions/questionsSlice";
import { scoreEmoji } from "../../utils/scoreEmoji";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
// import { useLocalStorageState } from "../../hooks/useLocalstorage";

function Result() {
  const { points } = useSelector((state: RootState) => state.questions);
  const totalPoints = useSelector(getTotalPoints);
  const percentage = (points / totalPoints) * 100;
  const emoji = scoreEmoji(percentage);
  // const [highScore, setHighScore] = useLocalStorageState(
  //   totalPoints,
  //   "highScore"
  // );

  // useEffect(() => {
  //   return () => {
  //     setHighScore(points > highScore ? points : highScore);
  //   };
  // }, []);

  return (
    <ResultContainer>
      <h2>Result</h2>
      <p>{`${emoji} You scored ${points} out of ${totalPoints} (${percentage.toFixed(
        2
      )}%)`}</p>
      <Link to='/quiz-settings'>
        <Button size='small'>Start New Quiz</Button>
      </Link>
    </ResultContainer>
  );
}

export default Result;
