import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  Label,
  Select,
} from "./QuizSettingsPage.style";
import Button from "../../components/Button/Button";
import { categoryData } from "../../utils/cateogryData";
type Difficulty = "easy" | "medium" | "hard";

const buttonColors: { [key in Difficulty]: string } = {
  easy: "#4caf50",
  medium: "#ff9800",
  hard: "#f44336",
};

const QuizSettingsPage = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState("10");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const navigate = useNavigate();

  const startQuiz = (e: FormEvent) => {
    e.preventDefault();
    navigate(
      `/quiz?categoryId=${category}&difficulty=${difficulty}&questions=${numberOfQuestions}`
    );
  };

  return (
    <Container>
      <h1>Quiz Settings</h1>
      <Form onSubmit={startQuiz}>
        <Label htmlFor='number-of-questions'>Number of Questions:</Label>
        <Input
          id='number-of-questions'
          type='number'
          value={numberOfQuestions}
          min={1}
          max={20}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
        />
        <Label htmlFor='category'>Category:</Label>
        <Select
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryData.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          {/* Add more categories as needed */}
        </Select>
        <Label htmlFor='difficulty'>Difficulty:</Label>
        <Select
          id='difficulty'
          value={difficulty}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setDifficulty(e.target.value as Difficulty)
          }
        >
          <option value=''>Select Difficulty</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </Select>
        <Button color={difficulty ? buttonColors[difficulty] : ""}>
          Start Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default QuizSettingsPage;
