import HomeScreen from "@pages/Home";
import { Ocr } from "@pages/Article/OCR";
import Article from "@pages/Article/Article";
import Input from "@pages/Article/ArticleAddForm";
import { FormDetail } from "@pages/Article/ArticleAddForm2";
import ErrorPage from "@pages/error";
import Root from "@renderer/routes/Root";
import Explore from "@pages/Explore";
import Saved from "@pages/saved";
import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@components/theme-provider";
import Feed from "@pages/Feed";
import Statusbar from "@components/Statusbar";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "getting-started",
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
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Input />,
              },
              {
                path: "detail",
                element: <FormDetail />,
              },
            ],
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
    <>
      <Statusbar title="Vite Electron React" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
