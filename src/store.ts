import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./features/questions/questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
