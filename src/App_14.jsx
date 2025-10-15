import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayoutPage_14,
  BlogStaticPage_14,
  HomePage_14,
  BlogLocalJsonPage_14,
  BlogNodePage_14,
  BookListPage_14,
} from "./page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_14></HomeLayoutPage_14>,
    children: [
      {
        index: true,
        element: <HomePage_14></HomePage_14>,
      },
      {
        path: "static_14",
        element: <BlogStaticPage_14></BlogStaticPage_14>,
      },
      {
        path: "localjson_14",
        element: <BlogLocalJsonPage_14></BlogLocalJsonPage_14>,
      },
      {
        path: "node_14",
        element: <BlogNodePage_14></BlogNodePage_14>,
      },
      {
        path: "booklist_14",
        element: <BookListPage_14></BookListPage_14>,
      },
    ],
  },
]);

const App_14 = () => {
  return <RouterProvider router={router} />;
};

export default App_14;
