import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SECS_PER_QUESTION = 45;
export const POINTS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  index: 0,
  points: 0,
  status: "loading",
  remainingSeconds: 0,
  error: "",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.index < state.questions.length - 1) state.index += 1;
      else state.status = "finished";
    },
    tickTack: (state) => {
      if (state.remainingSeconds !== 0) state.remainingSeconds -= 1;
      else state.status = "finished";
    },
    correctAnswer: (state) => {
      state.points += POINTS_PER_QUESTION;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "ready";
        state.error = "";
        state.questions = action.payload;
        state.remainingSeconds = state.questions.length * SECS_PER_QUESTION;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (url) => {
    const response = await fetch(url);

    const data = await response.json();
    console.log("🚀 ~ data:", data);
    if (data.response_code === 0) {
      return data.results;
    }
    console.log(data);
    if (data.response_code !== 0) {
      throw new Error("Failed to fetch questions");
    }
    return data.results;
  }
);

export const { nextQuestion, tickTack, correctAnswer } = questionsSlice.actions;

export default questionsSlice.reducer;
