import { useEffect } from "react";
import { StyledTimer } from "./Timer.style";
import { useDispatch, useSelector } from "react-redux";
import { tickTack } from "../../features/questions/questionsSlice";

function Timer() {
  const { remainingSeconds } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // useEffect(
  //   function () {
  //     const id = setInterval(function () {
  //       // dispatch(tickTack());
  //     }, 1000);

  //     return () => clearInterval(id);
  //   },
  //   [dispatch]
  // );

  return (
    <StyledTimer>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </StyledTimer>
  );
}

export default Timer;
