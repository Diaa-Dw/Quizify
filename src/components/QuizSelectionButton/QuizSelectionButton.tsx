import React from "react";
import { QuizBox } from "./QuizSelectionButton.style";

function QuizSelectionButton({ icon, title, color, to, iconColor }) {
  return (
    <QuizBox color={color} to={to} iconColor={iconColor}>
      <span className='icon'>{icon}</span>
      <span className='title'>{title}</span>
    </QuizBox>
  );
}

export default QuizSelectionButton;
