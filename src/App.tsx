import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayput from "./pages/AppLayout/AppLayput";
import Home from "./pages/Home/Home";
import QuizSettingsPage from "./pages/QuizSettings/QuizSettingsPage";
import QuizPage from "./pages/QuizPage/QuizPage";

const router = createBrowserRouter([
  {
    element: <AppLayput />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz-settings",
        element: <QuizSettingsPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
