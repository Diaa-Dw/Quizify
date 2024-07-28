export const generateURL = (numQuestions, categoryId, difficulty) => {
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
