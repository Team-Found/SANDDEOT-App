import { Ocr } from "@pages/Article/OCR";
import Input from "@pages/Article/ArticleAddForm";
import ErrorPage from "@pages/error";
import Root from "@renderer/routes/Root";
import Detail from "@pages/Detail";
import Detail2 from "@pages/Detail2";
import { Detail3 } from "@pages/Detail3";
import Saved from "@pages/Saved";
import Following from "@pages/Following";
import Mine from "@pages/Mine";
import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@components/theme-provider";
import Feed from "@pages/Feed";
import FeedRouter from "./routes/Feed";

const router = createHashRouter([
  {
    path: "/",
    element: <FeedRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "following",
        element: <Following />,
      },
      // {
      //   path: "search",
      //   element: <Search />,
      // },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "mine",
        element: <Mine />,
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "detail2/:id",
        element: <Detail2 />,
      },
      {
        path: "detail3/:id",
        element: <Detail3 />,
      },
      {
        path: "ocr",
        element: <Ocr />,
      },
      {
        path: "editor",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Input />,
          },
        ],
      },
    ],
  },
]);

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
