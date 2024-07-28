const emojiRanges = {
  90: "😄", // Very happy
  70: "🙂", // Happy
  50: "😐", // Neutral
  30: "🙁", // Sad
  0: "😢", // Very sad
};
export const scoreEmoji = (percentage) => {
  let emoji = "";
  for (const range in emojiRanges) {
    if (percentage >= range) {
      console.log(range);
      emoji = emojiRanges[range];
    }
  }
  return emoji;
};
