import QuizSelectionButton from "../QuizSelectionButton/QuizSelectionButton";
import { BoxContainer } from "./QuizSelectionBox.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faComputer,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const ButtonData = [
  {
    icon: <FontAwesomeIcon icon={faLandmark} />,
    title: "History",
    color: ["rgb(149, 99, 64)", "#CA9570"],
    link: "/quiz?categoryId=23",
  },
  {
    icon: <FontAwesomeIcon icon={faComputer} />,
    title: "computer science",
    color: ["#4D9DF2", "#3E5D80"],
    link: "/quiz?categoryId=18",
  },
  {
    icon: <FontAwesomeIcon icon={faEllipsis} />,
    title: "More",
    color: ["#FBBB46", "#FFA500"],
    link: "/quiz-settings",
  },
];

function QuizSelectionBox() {
  return (
    <BoxContainer>
      {ButtonData.map((item) => (
        <QuizSelectionButton
          icon={item.icon}
          color={item.color}
          title={item.title}
          to={item.link}
          key={item.title}
        />
      ))}
    </BoxContainer>
  );
}

export default QuizSelectionBox;
