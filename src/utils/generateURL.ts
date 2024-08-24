export const generateURL = (
  numQuestions: number,
  categoryId: string | null,
  difficulty: string | null
) => {
  let url = `https://opentdb.com/api.php?`;
  if (numQuestions && numQuestions > 0 && numQuestions <= 20) {
    url += `amount=${numQuestions}`;
  } else {
    url += `amount=10`;
  }

  if (categoryId) {
    url += `&category=${categoryId}`;
  }

  if (difficulty) {
    url += `&difficulty=${difficulty}`;
  }

  return url;
};
