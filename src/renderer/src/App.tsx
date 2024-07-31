import HomeScreen from "@pages/Home";
import { Ocr } from "@pages/Article/OCR";
import Article from "@pages/Article/Article";
import ErrorPage from "@pages/error";
import Root from "@routes/root";
import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

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
        element: <div></div>,
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
        ],
      },
      {
        path: "word",
        element: <div></div>,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
