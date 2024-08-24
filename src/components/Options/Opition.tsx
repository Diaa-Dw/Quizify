import { StyledOptions } from "./Opitions.style";
import { sortAlphabetically } from "../../utils/sortAlphabetically";

interface OptionsProps {
  incorrect_answers: string[];
  correct_answer: string;
  handleOptionSelection: (selectedOption: string) => void;
  answer: string | null;
}

function Opitions({
  incorrect_answers,
  correct_answer,
  handleOptionSelection,
  answer,
}: OptionsProps) {
  const options = sortAlphabetically([...incorrect_answers, correct_answer]);

  return (
    <StyledOptions>
      {options.map((option: string, idx: number) => {
        return (
          <button
            key={idx}
            className={`btn-option btn ${
              answer !== null &&
              (option === correct_answer ? "correct" : "wrong")
            }`}
            onClick={() => handleOptionSelection(option)}
            disabled={answer !== null}
          >
            {option}
          </button>
        );
      })}
    </StyledOptions>
  );
}

export default Opitions;
