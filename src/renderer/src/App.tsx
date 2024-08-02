import HomeScreen from "@pages/Home";
import { Ocr } from "@pages/Article/OCR";
import Article from "@pages/Article/Article";
import { Input } from "@pages/Article/Input";
import ErrorPage from "@pages/error";
import Root from "@renderer/routes/Root";
import Explore from "@pages/Explore";
import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@components/theme-provider";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "article",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Article />,
          },
          {
            path: "ocr",
            element: <Ocr />,
          },
          {
            path: "input",
            element: <Input />,
          },
        ],
      },
      {
        path: "word",
        element: <div className="text-white">wordwordword</div>,
      },
    ],
  },
]);

function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
