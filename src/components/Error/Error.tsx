import { useEffect, useState } from "react";
import { ErrorContainer } from "./Error.style";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../../features/questions/questionsSlice";
import Button from "../Button/Button";
import { AppDispatch } from "../../store";

function Error({ error, url }: { error: string; url: string }) {
  const [timer, setTimer] = useState(5);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (timer !== 0) {
      const id = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(id);
    }
  }, [timer]);

  const handleClick = () => {
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
