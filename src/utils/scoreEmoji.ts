const emojiRanges: { [key: number]: string } = {
  90: "😄", // Very happy
  70: "🙂", // Happy
  50: "😐", // Neutral
  30: "🙁", // Sad
  0: "😢", // Very sad
};

export const scoreEmoji = (percentage: number): string => {
  let emoji = "";
  for (const range in emojiRanges) {
    if (percentage >= Number(range)) {
      emoji = emojiRanges[Number(range)];
    }
  }
  return emoji;
};
