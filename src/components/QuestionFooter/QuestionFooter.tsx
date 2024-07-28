import { Footer } from "./QuestionFooter.style";

interface QuestionFooterProps {
  children: React.ReactNode;
}

function QuestionFooter({ children }: QuestionFooterProps) {
  return <Footer>{children}</Footer>;
}

export default QuestionFooter;
