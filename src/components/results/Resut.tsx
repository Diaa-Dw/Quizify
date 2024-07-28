import React, { useEffect, useState } from "react";
import { ResultContainer } from "./Result.style";
import { useSelector } from "react-redux";
import { getTotalPoints } from "../../features/questions/questionsSlice";
import { scoreEmoji } from "../../utils/scoreEmoji";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Result() {
  const { points } = useSelector((state) => state.questions);
  const totalPoints = useSelector(getTotalPoints);
  const percentage = (points / totalPoints) * 100;
  const emoji = scoreEmoji(percentage);

  console.log("🚀 ~ Result ~ totalPoints:", totalPoints);
  return (
    <ResultContainer>
      <h2>Result</h2>
      <p>{`${emoji} You scored ${points} out of ${totalPoints} (${percentage.toFixed(
        2
      )}%)`}</p>
      <p>(Highscore: 50 points)</p>
      <Link to='/quiz-settings'>
        <Button size='small'>Start New Quiz</Button>
      </Link>
    </ResultContainer>
  );
}

export default Result;
