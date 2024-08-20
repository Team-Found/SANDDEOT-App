import { Ocr } from "@renderer/pages/articleAdd/OCR";
import Input from "@renderer/pages/articleAdd/ArticleAddForm";
import ErrorPage from "@pages/error";
import Root from "@renderer/routes/Root";
import D1 from "@renderer/pages/articleDetail/D1";
import D2 from "@renderer/pages/articleDetail/D2";
import D3 from "@renderer/pages/articleDetail/D3";
import Saved from "@renderer/pages/main/Saved";
import Following from "@renderer/pages/main/Following";
import Mine from "@renderer/pages/main/Mine";
import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@renderer/components/Root/Set/theme-provider";
import Feed from "@renderer/pages/main/Feed";
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
        element: <D1 />,
      },
      {
        path: "detail2/:id",
        element: <D2 />,
      },
      {
        path: "detail3/:id",
        element: <D3 />,
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
