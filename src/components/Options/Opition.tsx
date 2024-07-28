import React, { useCallback, useState } from "react";
import { StyledOptions } from "./Opitions.style";
import { shuffleArray } from "../../utils/shuflleArray";
import he from "he";
function Opitions({
  incorrect_answers,
  correct_answer,
  handleOptionSelection,
  answer,
}) {
  const options = useCallback(
    shuffleArray([...incorrect_answers, correct_answer], Date.now()),
    [incorrect_answers, correct_answer]
  );

  return (
    <StyledOptions>
      {options.map((option, idx) => {
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
            {he.decode(option)}
          </button>
        );
      })}
    </StyledOptions>
  );
}

export default Opitions;
