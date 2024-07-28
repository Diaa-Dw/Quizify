export const shuffleArray = (array, seed) => {
  const seededRandom = (seed) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const rng = seededRandom;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng(seed) * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    seed++;
  }

  return array;
};
