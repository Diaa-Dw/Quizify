import { useEffect, useState } from "react";
import { ErrorContainer } from "./Error.style";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../../features/questions/questionsSlice";
import Button from "../Button/Button";

function Error({ error }) {
  const [timer, setTimer] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timer !== 0) {
      const id = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(id);
    }
  }, [timer]);

  const handleClick = () => {
    const url = `https://opentdb.com/api.php?amount=5`;
    dispatch(fetchQuestions(url));
  };

  return (
    <ErrorContainer>
      <div className='error'>
        <p>{error}</p>
        <Button size={"small"} onClick={handleClick} disabled={timer !== 0}>
          {timer !== 0 ? `Retury in ${timer} sec` : `Retury Now`}
        </Button>
      </div>
    </ErrorContainer>
  );
}

export default Error;
