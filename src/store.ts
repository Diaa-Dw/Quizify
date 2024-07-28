import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./features/questions/questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});

export default store;
