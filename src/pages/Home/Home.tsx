import { LeftBox, RightBox, StyledHome } from "./Home.style";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import QuizSelectionBox from "../../components/QuizSelectionBox/QuizSelectionBox";

function Home() {
  return (
    <>
      <StyledHome>
        <LeftBox>
          <h1>Challenge Your Knowledge with Our Fun Quizzes!</h1>
          <h3>
            Test your skills across various topics and compete with friends.
          </h3>
          <Link to='quiz-settings'>
            <Button>Start a Quiz</Button>
          </Link>
        </LeftBox>
        <RightBox>
          <img src='hero.png' alt='hero' />
        </RightBox>
      </StyledHome>
      <QuizSelectionBox />
    </>
  );
}

export default Home;
