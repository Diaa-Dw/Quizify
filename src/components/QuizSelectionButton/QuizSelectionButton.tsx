import { QuizBox } from "./QuizSelectionButton.style";

interface QuizSelectionButtonProps {
  icon: React.ReactNode;
  title: string;
  color: string[];
  to: string;
  iconColor?: string;
}

function QuizSelectionButton({
  icon,
  title,
  color,
  to,
  iconColor,
}: QuizSelectionButtonProps) {
  return (
    <QuizBox color={color} to={to} iconColor={iconColor || undefined}>
      <span className='icon'>{icon}</span>
      <span className='title'>{title}</span>
    </QuizBox>
  );
}

export default QuizSelectionButton;
